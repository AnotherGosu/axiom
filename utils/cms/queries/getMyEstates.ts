import { gql } from "graphql-request";
import { ESTATE_CARD } from "./fragments";
import { client } from "./client";
import { structureEstate } from "./helpers";
import type { EstateCard } from "utils/types/estate";

export default async function getMyEstates({
  sub,
  orderBy = "createdAt_DESC",
}: {
  sub: string;
  orderBy?: string;
}) {
  const { estates } = await client.request(GET_MY_ESTATES, { sub, orderBy });
  const estateCards = estates.map((estate) => structureEstate(estate));
  return estateCards as EstateCard[];
}

const GET_MY_ESTATES = gql`
  query GetUserEstates($sub: String, $orderBy: EstateOrderByInput) {
    estates(where: { customUser: { sub: $sub } }, orderBy: $orderBy) {
      ...EstateCard
    }
  }
  ${ESTATE_CARD}
`;
