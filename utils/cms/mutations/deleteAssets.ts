import { gql } from "graphql-request";
import { fetcher } from "./fetcher";

export default async function deleteAssets(ids: string[]) {
  const res = await fetcher.request(DELETE_ASSETS, { ids });
  return res;
}

const DELETE_ASSETS = gql`
  mutation DeleteAssets($ids: [ID!]) {
    deleteManyAssetsConnection(where: { id_in: $ids }) {
      aggregate {
        count
      }
    }
  }
`;
