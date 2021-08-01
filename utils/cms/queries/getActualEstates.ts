import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { client } from "./client";
import { structureEstate } from "./helpers";
import type { EstateCard } from "utils/types/estate";

export default async function getActualEstates() {
  const { estates } = await client.request(GET_ACTUAL_ESTATES);
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
}

const GET_ACTUAL_ESTATES = gql`
  query GetActualEstates {
    estates(last: 4, orderBy: createdAt_DESC) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;
