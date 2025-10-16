import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
// import { useState } from "react";
const GET_TODOS = gql`
  query GetAllTodos {
    todos {
      id
      text
      completed
    }
  }
`;

const Delete_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const Update_TODO=gql`
mutation updatetodo($updateTodoId: ID!, $completed: Boolean!){
  updateTodo(id: $updateTodoId, completed: $completed) {
    id,
    completed
  }
}
`


interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const GetTodo = () => {
  const { loading, error, data } = useQuery<{ todos: Todo[] }>(GET_TODOS);
  const [deleteTodo] = useMutation(Delete_TODO);
 const [udpateTodo]=useMutation(Update_TODO)
const handleUpdate = async (id: string, completed: boolean) => {
  try {
    await udpateTodo({
      variables:{updateTodoId: id, completed: !completed},
    })
          window.location.reload();
  } catch(err) {
          console.error("Error deleting todo:", err);
  }
}


  const handleDelete = async (id: string) => {
    try {
      await deleteTodo({
        variables: { id },
      });
      window.location.reload();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.todos.map(({ id, text, completed }) => (
        <li key={id}>
          <p style={{ }}>
            {text} - <button onClick={()=>handleUpdate(id,completed)}>{completed ? "done" :"pending"}</button> : <button onClick={()=>handleDelete(id)}>Delete</button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default GetTodo;
