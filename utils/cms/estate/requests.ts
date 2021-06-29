import { client, authorizationHeader } from "../client";
import {
  GET_ESTATE,
  GET_SEARCHED_ESTATES,
  GET_PATHS,
  ADD_ESTATE,
  GET_ACTUAL_ESTATES,
  GET_USER_ESTATES,
  EDIT_ESTATE,
} from "./queries";
import type {
  ActualEstate,
  CMSEstate,
  AddEstateFormData,
  EditEstateFormData,
  SearchedEstate,
  UserEstate,
} from "utils/types/estate";
import { structureEstate } from "utils/helpers";
import { editPlan } from "./editPlan";
import { editImages } from "./editImages";

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

export async function addEstate({
  data,
  issuer,
}: {
  data: AddEstateFormData;
  issuer: string;
}) {
  const { images, plan, ...rest } = data;

  const uploadedImages = await Promise.all(
    images.map((image) => uploadAsset(image))
  );
  const imagesAssets = uploadedImages.map((img) => ({ id: img.id }));

  const uploadedPlan = await uploadAsset(plan);
  const planAsset = { id: uploadedPlan.id };

  return client.request(
    ADD_ESTATE,
    { ...rest, images: imagesAssets, plan: planAsset, issuer },
    authorizationHeader
  );
}

export async function editEstate({
  data,
  existingImages,
  existingPlan,
}: {
  data: EditEstateFormData;
  existingImages: CMSEstate["images"];
  existingPlan: CMSEstate["plan"];
}) {
  const { images, plan, ...rest } = data;

  await editImages({ images, existingImages, estateId: rest.id });
  await editPlan({ plan, existingPlan, estateId: rest.id });

  const res = await client.request(EDIT_ESTATE, rest, authorizationHeader);

  return res;
}

export async function getSearchedEstates() {
  const { estates }: { estates: CMSEstate[] } = await client.request(
    GET_SEARCHED_ESTATES
  );
  const searchedEstates: SearchedEstate[] = estates.map((estate) =>
    structureEstate(estate)
  );
  return searchedEstates;
}

export async function getActualEstates() {
  const { estates }: { estates: CMSEstate[] } = await client.request(
    GET_ACTUAL_ESTATES
  );
  const actualEstates: ActualEstate[] = estates.map((estate) =>
    structureEstate(estate)
  );
  return actualEstates;
}

export async function getEstate(id: string) {
  const { estate }: { estate: CMSEstate } = await client.request(GET_ESTATE, {
    id,
  });

  return structureEstate(estate);
}

export async function getPaths() {
  const { estates } = await client.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}

export async function getUserEstates(issuer: string) {
  const { estates } = await client.request(GET_USER_ESTATES, { issuer });

  const userEstates: UserEstate[] = estates.map((estate) =>
    structureEstate(estate)
  );

  return userEstates;
}
