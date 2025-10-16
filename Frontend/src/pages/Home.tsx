import { gql } from "@apollo/client";
// useMutation
import GetTodo from "./GetTodo";
// useState
import { useMutation } from "@apollo/client/react";
import { useState } from "react";

const ADD_TODO = gql`
  mutation AddNewTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

const Home = () => {
  const [addTodo] = useMutation(ADD_TODO);
  const [input, setInput] = useState("");

  const handleAddTodo = async () => {
    if (!input.trim()) return;
    try {
      await addTodo({
        variables: { text: input },
      });
      setInput(""); // clear input after adding
      window.location.reload(); // simple refresh (or you can refetch)
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <div className="main">
      <div className="text-center">
        <input
          className="bg-white m-10 w-62 p-5 text-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-purple-900 text-white p-5 rounded-2xl active:scale-90"
        >
          Add Todo
        </button>
      </div>

      <div className="text-white text-center text-3xl tracking-tighter">
        <GetTodo />
      </div>
    </div>
  );
};

export default Home;
