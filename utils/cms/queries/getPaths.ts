import { gql } from "graphql-request";
import { fetcher } from "./fetcher";

export default async function getPaths() {
  const { estates } = await fetcher.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}

const GET_PATHS = gql`
  query GetPaths {
    estates {
      id
    }
  }
`;
