import { client, authorizationHeader } from "../client";
import {
  GET_ESTATE,
  GET_SEARCHED_ESTATES,
  GET_PATHS,
  ADD_ESTATE,
  GET_ACTUAL_ESTATES,
  GET_MY_ESTATES,
  EDIT_ESTATE,
  GET_EDIT_FORM_ESTATE,
} from "./queries";
import type { CMSEstate, Estate, EstateCard } from "utils/types/estate";
import type { AddEstateForm, EditEstateForm } from "utils/types/forms";
import { uploadAsset } from "../asset";
import { structureEstate } from "utils/cms/estate/helpers";
import { editPlan } from "./editPlan";
import { editImages } from "./editImages";

export async function addEstate({
  data,
  issuer,
}: {
  data: AddEstateForm;
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
  data: EditEstateForm;
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
  const { estates } = await client.request(GET_SEARCHED_ESTATES);
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards;
}

export async function getActualEstates() {
  const { estates } = await client.request(GET_ACTUAL_ESTATES);
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
}

export async function getEstate(id: string) {
  const { commonFields, apartment, building } = await client.request(
    GET_ESTATE,
    {
      id,
    }
  );
  const estate = { ...commonFields, apartment, building };

  return structureEstate(estate) as Estate;
}

export async function getEditFormEstate(id: string) {
  const { estate } = await client.request(GET_EDIT_FORM_ESTATE, {
    id,
  });

  return estate as CMSEstate;
}

export async function getPaths() {
  const { estates } = await client.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}

export async function getMyEstates(issuer: string) {
  const { estates } = await client.request(GET_MY_ESTATES, { issuer });
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
}
