import { gql } from "graphql-request";
import { ESTATE_COMMON, ESTATE_APARTMENT, ESTATE_BUILDING } from "./fragments";
import { fetcher } from "./fetcher";
import type { Estate } from "utils/types/estate";

export default async function getEstateToUpdate(estateId: string) {
  const { estate } = await fetcher.request(GET_ESTATE_TO_UPDATE, {
    estateId,
  });

  return estate as Estate;
}

const GET_ESTATE_TO_UPDATE = gql`
  query GetEditFormEstate($estateId: ID!) {
    estate(where: { id: $estateId }) {
      ...EstateCommon
      ...EstateApartment
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;
