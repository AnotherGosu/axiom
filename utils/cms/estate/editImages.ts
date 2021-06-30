import { gql } from "graphql-request";
import { client, authorizationHeader } from "../client";
import { uploadAsset } from "../asset";
import type { EditEstateFormData, CMSEstate } from "utils/types/estate";

export async function editImages({
  images,
  existingImages,
  estateId,
}: {
  images: EditEstateFormData["images"];
  existingImages: CMSEstate["images"];
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
  const removedImages = existingImages.filter(
    (img) => !imagesToSetIds.includes(img.id)
  );

  const imagesToSet = imagesToSetIds.map((id) => ({ id }));
  const imagesToDelete = removedImages.map((img) => ({ id: img.id }));

  await client.request(
    DELETE_ESTATE_IMAGES,
    { estateId, imagesIds: imagesToDelete },
    authorizationHeader
  );
  await client.request(
    SET_ESTATE_IMAGES,
    { estateId, imagesIds: imagesToSet },
    authorizationHeader
  );
}

const DELETE_ESTATE_IMAGES = gql`
  mutation DeleteEstateImages(
    $estateId: ID!
    $imagesIds: [AssetWhereUniqueInput!]
  ) {
    updateEstate(
      where: { id: $estateId }
      data: { images: { delete: $imagesIds } }
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
