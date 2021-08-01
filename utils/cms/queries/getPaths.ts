import { gql } from "graphql-request";
import { client } from "./client";

export default async function getPaths() {
  const { estates } = await client.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}

const GET_PATHS = gql`
  query GetPaths {
    estates {
      id
    }
  }
`;
