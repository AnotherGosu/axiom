import { GraphQLClient } from "graphql-request";
import {
  GET_ESTATE,
  GET_SEARCHED_ESTATES,
  GET_PATHS,
  GET_USER_BY_EMAIL,
  CREATE_ESTATE,
  CREATE_USER,
  GET_USER_PROFILE,
  GET_USER_ESTATES,
  GET_ACTUAL_ESTATES,
  GET_USER_CONTACTS,
} from "./queries";
import type {
  ActualEstate,
  CMSEstate,
  FormEstate,
  SearchedEstate,
  UserEstate,
} from "../types/estate";
import type {
  CreateUserRequest,
  UserProfile,
  UserContacts,
} from "../types/user";
import { structureEstate } from "../helpers";

const authorizationHeader = `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}`;

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export async function uploadAsset(file) {
  const form = new FormData();
  form.append("fileUpload", file);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}`,
    },
    body: form,
  });

  return res.json();
}

export async function createEstate(data: FormEstate, issuer: string) {
  const { images, plan, ...rest } = data;

  const uploadedImages = await Promise.all(
    images.map((image) => uploadAsset(image))
  );
  const imagesAssets = uploadedImages.map((img) => ({ id: img.id }));

  let planAsset = null;
  if (plan) {
    const uploadedPlan = await uploadAsset(plan);
    planAsset = { id: uploadedPlan.id };
  }

  return client.request(
    CREATE_ESTATE,
    { ...rest, images: imagesAssets, plan: planAsset },
    { authorization: authorizationHeader }
  );
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

export async function createUser(userData: CreateUserRequest) {
  return client.request(
    CREATE_USER,
    { ...userData },
    { authorization: authorizationHeader }
  );
}

export async function getUserProfile(issuer: string) {
  const { customUser } = await client.request(GET_USER_PROFILE, { issuer });
  return customUser as UserProfile;
}

export async function getUserEstates(issuer: string) {
  const { estates } = await client.request(GET_USER_ESTATES, { issuer });

  const userEstates: UserEstate[] = estates.map((estate) =>
    structureEstate(estate)
  );

  return userEstates;
}

export async function getUserByEmail(email: string) {
  const { customUser } = await client.request(GET_USER_BY_EMAIL, { email });
  return customUser;
}

export async function getUserContacts(issuer: string) {
  const { customUser } = await client.request(GET_USER_CONTACTS, { issuer });
  return customUser as UserContacts;
}
