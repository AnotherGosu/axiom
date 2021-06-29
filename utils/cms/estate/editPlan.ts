import { gql } from "graphql-request";
import { client, authorizationHeader } from "../client";
import { uploadAsset } from "./requests";
import type { EditEstateFormData, CMSEstate } from "utils/types/estate";

export async function editPlan({
  plan,
  existingPlan,
  estateId,
}: {
  plan: EditEstateFormData["plan"];
  existingPlan: CMSEstate["plan"];
  estateId: string;
}) {
  //user removed existing plan
  if (plan === null && existingPlan?.id) {
    return client.request(
      DELETE_ESTATE_PLAN,
      { estateId },
      authorizationHeader
    );
  }
  //user uploaded new plan
  else if (plan instanceof File) {
    if (existingPlan) {
      await client.request(
        DELETE_ESTATE_PLAN,
        { estateId },
        authorizationHeader
      );
    }
    const res = await uploadAsset(plan);
    const planId = { id: res.id };
    return client.request(
      CONNECT_ESTATE_PLAN,
      { estateId, planId },
      authorizationHeader
    );
  }
}

const DELETE_ESTATE_PLAN = gql`
  mutation DeleteEstatePlan($estateId: ID!) {
    updateEstate(where: { id: $estateId }, data: { plan: { delete: true } }) {
      id
    }
  }
`;

const CONNECT_ESTATE_PLAN = gql`
  mutation ConnectEstatePlan($estateId: ID!, $planId: AssetWhereUniqueInput) {
    updateEstate(
      where: { id: $estateId }
      data: { plan: { connect: $planId } }
    ) {
      id
    }
  }
`;
