import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { client } from "./client";
import { createFilters, structureEstate } from "./helpers";
import type { EstateCard } from "utils/types/estate";

export default async function getSearchedEstates({
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

const GET_SEARCHED_ESTATES = gql`
  query GetSearchedEstates(
    $filters: EstateWhereInput
    $orderBy: EstateOrderByInput
  ) {
    estates(where: $filters, orderBy: $orderBy) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;
