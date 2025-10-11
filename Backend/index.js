import {ApolloServer,gql} from "apollo-server"


const typeDefs=gql`

type Todo{
id:ID!
text:String!
completed:Boolean!
}

type Query{
todos:[Todo]
}

type Mutation{
addTodo(text:String!):Todo
updateTodo(id:ID!):Todo
deleteTodo(id:ID!):Todo
}
`
