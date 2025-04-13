import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
        goodbye: String!
      }
    `,
  resolvers: {
    Query: {
      hello: () => "Hello Deno!",
      goodbye: () => "Goodbye Deno!",
    },
  },
});
