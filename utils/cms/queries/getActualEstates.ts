import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { fetcher } from "./fetcher";
import { structureEstateCard } from "./helpers";

export default async function getActualEstates() {
  const { estates } = await fetcher.request(GET_ACTUAL_ESTATES);
  return estates.map((estate) => structureEstateCard(estate));
}

const GET_ACTUAL_ESTATES = gql`
  query GetActualEstates {
    estates(last: 4, orderBy: createdAt_DESC) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;
