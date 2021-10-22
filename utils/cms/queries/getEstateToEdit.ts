import { gql } from "@apollo/client";
import { fetcher } from "./fetcher";
import { getMediaList } from "../mutations/media";

export default async function getEstate(estateId: string) {
  try {
    const {
      data: {
        getObject: { id, metadata },
      },
    } = await fetcher.query({
      query: GET_ESTATE_TO_EDIT,
      variables: {
        bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
        readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
        estateId,
      },
    });

    const mediaList = await getMediaList(id);
    const {
      creator: { id: userId },
      images = [],
      plan,
      ...fields
    } = metadata;

    return {
      ...fields,
      id,
      userId,
      images: images.map((image) => image?.image?.url),
      plan: plan?.url || null,
      mediaList,
    };
  } catch (err) {
    console.log(`getEstateToEdit error: ${err.message}`);
  }
}

const GET_ESTATE_TO_EDIT = gql`
  query GetEstate($bucketSlug: String!, $readKey: String!, $estateId: ID!) {
    getObject(
      bucket_slug: $bucketSlug
      read_key: $readKey
      object_id: $estateId
    ) {
      id
      metadata
    }
  }
`;
