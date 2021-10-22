import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";
import type { User } from "utils/types/user";

export default async function getUser(sub: string) {
  const query = { type: "users", "metadata.sub": sub };

  try {
    const {
      data: {
        getObjects: { objects },
      },
    } = await fetcher.query({
      query: GET_USER,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        query,
      },
    });
    const { id, created_at, metadata } = objects[0];
    return { id, created_at, ...metadata } as User;
  } catch (err) {
    console.log(`getUser error: ${err.message}`);
  }
}

const GET_USER = gql`
  query GetUser(
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
        created_at
        id
        metadata
      }
    }
  }
`;
