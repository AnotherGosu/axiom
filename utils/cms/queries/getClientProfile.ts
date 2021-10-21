import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";
import type { Client } from "utils/types/client";

export default async function getClientProfile(sub: string) {
  const query = { type: "clients", "metadata.sub": sub };

  const fields = ["name", "email", "phone", "contactName", "contactPhone"].map(
    (prop) => `metadata.${prop}`
  );

  const props = [...fields, "id"].join(",");

  try {
    const {
      data: {
        getObjects: { objects },
      },
    } = await fetcher.query({
      query: GET_CLIENT_PROFILE,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        query,
        props,
      },
    });
    const { id, metadata } = objects[0];
    return { id, ...metadata } as Client;
  } catch (err) {
    console.log(`getClientProfile error: ${err.message}`);
  }
}

const GET_CLIENT_PROFILE = gql`
  query GetClientProfile(
    $bucketSlug: String!
    $readKey: String!
    $query: JSON
    $props: String
  ) {
    getObjects(
      bucket_slug: $bucketSlug
      read_key: $readKey
      input: { query: $query, props: $props }
    ) {
      objects {
        id
        metadata
      }
    }
  }
`;
