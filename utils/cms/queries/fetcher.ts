import { ApolloClient, InMemoryCache } from "@apollo/client";

export const fetcher = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_COSMIC_API_URL,
  cache: new InMemoryCache(),
});
