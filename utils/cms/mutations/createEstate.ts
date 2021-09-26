import { gql } from "graphql-request";
import { fetcher } from "./fetcher";
import type { CreateEstateFormServer } from "utils/types/forms";
import uploadAsset from "./uploadAsset";

export default async function createEstate({
  formData,
  sub,
}: {
  formData: CreateEstateFormServer;
  sub: string;
}) {
  const { images, plan, ...fields } = formData;
  let data = {};

  if (images.length !== 0) {
    const uploadedImagesIds = await Promise.all(
      images.map((image) => uploadAsset(image))
    );
    const imagesConnect = uploadedImagesIds.map((id) => ({ id }));
    data = { ...data, images: { connect: imagesConnect } };
  }

  if (plan) {
    const uploadedPlanId = await uploadAsset(plan);
    data = { ...data, plan: { connect: { id: uploadedPlanId } } };
  }

  data = { ...data, ...fields, creator: { connect: { sub } } };

  const {
    createEstate: { id },
  } = await fetcher.request(CREATE_ESTATE, { data });

  return id;
}

const CREATE_ESTATE = gql`
  mutation CreateEstate($data: EstateCreateInput!) {
    createEstate(data: $data) {
      id
    }
  }
`;
