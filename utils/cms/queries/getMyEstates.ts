import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { fetcher } from "./fetcher";
import { structureEstateCard } from "./helpers";

export default async function getMyEstates({
  sub,
  orderBy = "createdAt_DESC",
}: {
  sub: string;
  orderBy?: string;
}) {
  const { estates } = await fetcher.request(GET_MY_ESTATES, { sub, orderBy });
  return estates.map((estate) => structureEstateCard(estate));
}

const GET_MY_ESTATES = gql`
  query GetUserEstates($sub: String, $orderBy: EstateOrderByInput) {
    estates(where: { creator: { sub: $sub } }, orderBy: $orderBy) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;
