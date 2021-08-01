import { gql } from "graphql-request";
import {
  ESTATE_COMMON_FIELDS,
  ESTATE_APARTMENT,
  ESTATE_BUILDING,
} from "./fragments";
import { client } from "./client";
import { structureEstate } from "./helpers";

export default async function getEstate(estateId: string) {
  const { commonFields, apartment, building } = await client.request(
    GET_ESTATE,
    {
      estateId,
    }
  );
  const estate = { ...commonFields, apartment, building };

  return structureEstate(estate);
}

const GET_ESTATE = gql`
  query GetEstate($estateId: ID!) {
    commonFields: estate(where: { id: $estateId }) {
      ...EstateCommonFields
    }
    apartment: estate(where: { id: $estateId }) {
      ...EstateApartment
    }
    building: estate(where: { id: $estateId }) {
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON_FIELDS}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;
