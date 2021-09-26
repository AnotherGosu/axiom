import { gql } from "graphql-request";
import { ESTATE_COMMON, ESTATE_APARTMENT, ESTATE_BUILDING } from "./fragments";
import { fetcher } from "./fetcher";
import { structureEstate } from "./helpers";

export default async function getEstate(estateId: string) {
  const estate = await fetcher.request(GET_ESTATE, {
    estateId,
  });

  return structureEstate(estate);
}

const GET_ESTATE = gql`
  query GetEstate($estateId: ID!) {
    estate(where: { id: $estateId }) {
      ...EstateCommon
    }
    common: estate(where: { id: $estateId }) {
      ...EstateCommon
    }
    apartment: estate(where: { id: $estateId }) {
      ...EstateApartment
    }
    building: estate(where: { id: $estateId }) {
      ...EstateBuilding
    }
  }
  ${ESTATE_COMMON}
  ${ESTATE_APARTMENT}
  ${ESTATE_BUILDING}
`;
