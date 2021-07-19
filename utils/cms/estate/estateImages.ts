import { gql } from "graphql-request";
import { client, authorizationHeader } from "../client";
import { uploadAsset } from "../asset";
import type { EditEstateForm } from "utils/types/forms";
import type { Estate } from "utils/types/estate";

export async function editImages({
  images,
  existingImages,
  estateId,
}: {
  images: EditEstateForm["images"];
  existingImages: Estate["images"];
  estateId: string;
}) {
  const imagesToSetIds = await Promise.all(
    images.map(async (img) => {
      //user uploaded new image
      if (img instanceof File) {
        const { id } = await uploadAsset(img);
        return id;
      }
      //user kept exsiting image
      else {
        return img.id;
      }
    })
  );

  const removedImages = existingImages
    .filter((img) => !imagesToSetIds.includes(img.id))
    .map((img) => ({ id: img.id }));

  await deleteImages({ estateId, specificImages: removedImages });

  const imagesToSet = imagesToSetIds.map((id) => ({ id }));
  return await client.request(
    SET_ESTATE_IMAGES,
    { estateId, imagesIds: imagesToSet },
    authorizationHeader
  );
}

export async function connectImages({
  estateId,
  images,
}: {
  estateId: string;
  images: File[];
}) {
  if (!images.length) return;

  const uploadedImages = await Promise.all(
    images.map((image) => uploadAsset(image))
  );

  const imagesToConnect = uploadedImages.map((img) => ({
    where: { id: img.id },
  }));

  return await client.request(
    CONNECT_ESTATE_IMAGES,
    { estateId, imagesToConnect },
    authorizationHeader
  );
}

export async function deleteImages({
  estateId,
  specificImages,
}: {
  estateId: string;
  specificImages?: { id: string }[];
}) {
  let imagesToDelete = [];

  if (specificImages) {
    imagesToDelete = specificImages;
  } else {
    //delete all estate images
    const {
      estate: { images },
    } = await client.request(GET_ESTATE_IMAGES, {
      estateId,
    });
    imagesToDelete = images;
  }

  if (!imagesToDelete.length) return;

  return await client.request(
    DELETE_ESTATE_IMAGES,
    { estateId, imagesToDelete },
    authorizationHeader
  );
}

const DELETE_ESTATE_IMAGES = gql`
  mutation DeleteEstateImages(
    $estateId: ID!
    $imagesToDelete: [AssetWhereUniqueInput!]
  ) {
    updateEstate(
      where: { id: $estateId }
      data: { images: { delete: $imagesToDelete } }
    ) {
      id
    }
  }
`;

const CONNECT_ESTATE_IMAGES = gql`
  mutation ConnectEstateImages(
    $estateId: ID!
    $imagesToConnect: [AssetConnectInput!]
  ) {
    updateEstate(
      where: { id: $estateId }
      data: { images: { connect: $imagesToConnect } }
    ) {
      id
    }
  }
`;

const SET_ESTATE_IMAGES = gql`
  mutation SetEstateImages(
    $estateId: ID!
    $imagesIds: [AssetWhereUniqueInput!]
  ) {
    updateEstate(
      where: { id: $estateId }
      data: { images: { set: $imagesIds } }
    ) {
      id
    }
  }
`;

const GET_ESTATE_IMAGES = gql`
  query GetEstateImages($estateId: ID!) {
    estate(where: { id: $estateId }) {
      images {
        id
      }
    }
  }
`;
