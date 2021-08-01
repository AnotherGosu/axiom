import { gql } from "graphql-request";
import {
  ESTATE_COMMON_FIELDS,
  ESTATE_APARTMENT,
  ESTATE_BUILDING,
} from "./fragments";
import { client } from "./client";
import type { Estate } from "utils/types/estate";

export default async function getEditFormEstate(estateId: string) {
  const { estate } = await client.request(GET_EDIT_FORM_ESTATE, {
    estateId,
  });

  return estate as Estate;
}

const GET_EDIT_FORM_ESTATE = gql`
  query GetEditFormEstate($estateId: ID!) {
    estate(where: { id: $estateId }) {
      ...EstateCommonFields
      ...EstateApartment
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON_FIELDS}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;
