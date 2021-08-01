import { gql } from "graphql-request";
import { client } from "./client";

export default async function deleteAssets(ids: string[]) {
  const res = await client.request(DELETE_ASSETS, { ids });
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
