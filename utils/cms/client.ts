import { GraphQLClient } from "graphql-request";

export const authorizationHeader = {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}`,
};
export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);
