import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { fetcher } from "./fetcher";
import { createFilters, structureEstateCard } from "./helpers";

export default async function getSearchedEstates({
  query,
  orderBy = "createdAt_DESC",
}: {
  query: { [key: string]: string | string[] };
  orderBy?: string;
}) {
  const filters = createFilters(query);
  const { estates } = await fetcher.request(GET_SEARCHED_ESTATES, {
    filters,
    orderBy,
  });
  return estates.map((estate) => structureEstateCard(estate));
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
