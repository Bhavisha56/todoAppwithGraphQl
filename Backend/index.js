import {ApolloServer,gql} from "apollo-server"
import db from "./db.js"

const typeDefs=gql`

type Todo{
id:ID!
text:String!
completed:Boolean 
}

type Query{
todos:[Todo]
}

type Mutation{
addTodo(text:String!):Todo
updateTodo(id:ID!,text:String!):Todo
deleteTodo(id:ID!):Todo
}

`
// The corrected Resolvers
const resolvers = {
  Query: {
    todos: async () => {
      // Change 'todos' to 'tododata'
      const result = await db.query('SELECT * FROM tododata ORDER BY id ASC');
      return result.rows;
    },
  },
  Mutation: {
    addTodo: async (_, { text }) => {
      // Change 'todos' to 'tododata'
      const sql = 'INSERT INTO tododata(text, completed) VALUES($1, $2) RETURNING *';
      const result = await db.query(sql, [text, false]);
      return result.rows[0];
    },
    updateTodo: async (_, { id },{text}) => {
      // Change 'todos' to 'tododata'
      const sql = 'UPDATE tododata SET completed = NOT completed WHERE id = $1 RETURNING *';
      const result = await db.query(sql, [id],[text]);
      if (result.rows.length === 0) throw new Error("Todo not found");
      return result.rows[0];
    },
    deleteTodo: async (_, { id }) => {
      // Change 'todos' to 'tododata'
      const sql = 'DELETE FROM tododata WHERE id = $1 RETURNING *';
      const result = await db.query(sql, [id]);
      if (result.rows.length === 0) throw new Error("Todo not found");
      return result.rows[0];
    },
  },
};


// Start the server (This does NOT change)
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});