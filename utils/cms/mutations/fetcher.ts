import { GraphQLClient } from "graphql-request";

export const fetcher = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_API_URL,
  {
    headers: { authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_TOKEN}` },
  }
);
