import { gql } from "graphql-request";
import { client } from "./client";
import type { EditEstateFormServer } from "utils/types/forms";
import uploadAsset from "./uploadAsset";
import deleteAssets from "./deleteAssets";

export default async function updateEstate(formData: EditEstateFormServer) {
  const {
    id: estateId,
    images,
    plan,
    existingImages,
    existingPlan,
    orderedImages,
    ...fields
  } = formData;

  let data = {};
  const deleteAssetsIds = [];

  const setImagesIds = await Promise.all(
    //iterate images updated by user
    orderedImages.map((img) => {
      const { name, id } = img;
      //new image uploaded byser user
      if (name) {
        //find relative file by its name
        const uploadImage = images.find((img) => img.name === name);
        return uploadAsset(uploadImage);
      }
      //existing image kept by user
      else {
        return id;
      }
    })
  );
  const setImages = setImagesIds.map((id) => ({ id }));
  data = { ...data, images: { set: setImages } };

  //delete images that were removed by user
  existingImages.forEach((img) => {
    if (!setImagesIds.includes(img.id)) {
      deleteAssetsIds.push(img.id);
    }
  });

  //user uploaded new plan
  if (plan) {
    const uploadedPlanId = await uploadAsset(plan);
    data = { ...data, plan: { connect: { id: uploadedPlanId } } };
    //delete existing plan in case it exists O_O
    existingPlan && deleteAssetsIds.push(existingPlan.id);
  }
  //user removed existing plan
  else if (!plan && existingPlan) {
    deleteAssetsIds.push(existingPlan.id);
  }

  data = { ...data, ...fields };

  const res = client.request(UPDATE_ESTATE, { data, estateId });
  await deleteAssets(deleteAssetsIds);
  return res;
}

const UPDATE_ESTATE = gql`
  mutation UpdateEstate($data: EstateUpdateInput!, $estateId: ID) {
    updateEstate(data: $data, where: { id: $estateId }) {
      id
    }
  }
`;
