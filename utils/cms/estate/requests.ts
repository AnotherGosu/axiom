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
  DELETE_ESTATE,
} from "./queries";
import type { Estate, EstateCard } from "utils/types/estate";
import type { AddEstateForm, EditEstateForm } from "utils/types/forms";
import { structureEstate, createFilters } from "utils/cms/estate/helpers";
import { editPlan, connectPlan, deletePlan } from "./estatePlan";
import { editImages, connectImages, deleteImages } from "./estateImages";

export async function addEstate({
  data,
  sub,
}: {
  data: AddEstateForm;
  sub: string;
}) {
  const { images, plan, ...rest } = data;
  const requestData = { ...rest, customUser: { connect: { sub } } };

  const {
    createEstate: { id: estateId },
  } = await client.request(
    ADD_ESTATE,
    { data: requestData },
    authorizationHeader
  );

  await connectImages({ estateId, images });
  await connectPlan({ estateId, plan });

  return estateId;
}

export async function editEstate({
  data,
  existingImages,
  existingPlan,
}: {
  data: EditEstateForm;
  existingImages: Estate["images"];
  existingPlan: Estate["plan"];
}) {
  const { images, plan, id: estateId, createdAt, ...rest } = data;

  await editImages({ images, existingImages, estateId });
  await editPlan({ plan, existingPlan, estateId });

  return await client.request(
    EDIT_ESTATE,
    { estateId, data: rest },
    authorizationHeader
  );
}

export async function deleteEstate(estateId: string) {
  await deleteImages({ estateId });
  await deletePlan(estateId);
  return await client.request(DELETE_ESTATE, { estateId }, authorizationHeader);
}

export async function getSearchedEstates({
  query,
  orderBy = "createdAt_DESC",
}: {
  query: { [key: string]: string | string[] };
  orderBy?: string;
}) {
  const filters = createFilters(query);
  const { estates } = await client.request(GET_SEARCHED_ESTATES, {
    filters,
    orderBy,
  });
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
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

  return structureEstate(estate);
}

export async function getEditFormEstate(id: string) {
  const { estate } = await client.request(GET_EDIT_FORM_ESTATE, {
    id,
  });

  return estate as Estate;
}

export async function getPaths() {
  const { estates } = await client.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}

export async function getMyEstates({
  sub,
  orderBy = "createdAt_DESC",
}: {
  sub: string;
  orderBy?: string;
}) {
  const { estates } = await client.request(GET_MY_ESTATES, { sub, orderBy });
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
}
