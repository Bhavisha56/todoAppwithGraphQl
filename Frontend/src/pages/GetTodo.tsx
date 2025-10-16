import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const GET_TODOS = gql`
  query GetAllTodos {
    todos {
      id
      text
      completed
    }
  }
`;

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const GetTodo = () => {
  const { loading, error, data } = useQuery<{ todos: Todo[] }>(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.todos.map(({ id, text, completed }) => (
        <li key={id}>
          <p style={{ }}>
            {text} - {completed ? "True" : "False"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default GetTodo;
