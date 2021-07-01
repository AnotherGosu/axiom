import { gql } from "graphql-request";
import { client, authorizationHeader } from "./client";

export async function uploadAsset(file: File) {
  if (!file) return;

  const form = new FormData();
  form.append("fileUpload", file);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}`,
    },
    body: form,
  });

  const data = await res.json();
  return data;
}

export async function deleteAssets(ids: string[]) {
  const DELETE_ASSETS = gql`
    mutation DeleteAssets($ids: ID!) {
      deleteManyAssetsConnection(where: { id_in: $ids }) {
        aggregate {
          count
        }
      }
    }
  `;
  const res = await client.request(DELETE_ASSETS, { ids }, authorizationHeader);
  return res;
}
