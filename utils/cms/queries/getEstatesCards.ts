import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";
import { structureEstateObject } from "./helpers";
import type { EstateCard } from "utils/types/estate";

export default async function getEstatesCards({
  filter = {},
  limit = 12,
  sort = "created_at_dec",
}: {
  filter?: any;
  limit?: number;
  sort?: "created_at_asc" | "created_at_dec";
}): Promise<EstateCard[]> {
  const metafields = [
    "address",
    "price",
    "commonSquare",
    "isBargaining",
    "isMortgage",
    "images.image.url",
    "plan.url",
    "location",
  ].map((field) => `metadata.${field}`);

  const props = [...metafields, "id", "title", "created_at"].join(",");

  const input = { limit, sort, props, query: { type: "estates", ...filter } };

  try {
    const {
      data: {
        getObjects: { objects },
      },
    } = await fetcher.query({
      query: GET_ESTATES_CARDS,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        input,
      },
    });
    return objects.map((object) => structureEstateObject(object));
  } catch (err) {
    console.log(`getEstatesCards error: ${err.message}`);
    return [];
  }
}

const GET_ESTATES_CARDS = gql`
  query GetActualEstates(
    $bucketSlug: String!
    $readKey: String
    $input: ObjectInputGetObjects
  ) {
    getObjects(bucket_slug: $bucketSlug, read_key: $readKey, input: $input) {
      objects {
        title
        id
        created_at
        metadata
      }
    }
  }
`;
