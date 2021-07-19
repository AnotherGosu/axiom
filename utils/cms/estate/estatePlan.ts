import { gql } from "graphql-request";
import { client, authorizationHeader } from "../client";
import { uploadAsset } from "../asset";
import type { EditEstateForm } from "utils/types/forms";
import type { Estate } from "utils/types/estate";

export async function editPlan({
  plan,
  existingPlan,
  estateId,
}: {
  plan: EditEstateForm["plan"];
  existingPlan: Estate["plan"];
  estateId: string;
}) {
  //user removed existing plan
  if (plan === null && existingPlan) {
    await deletePlan(estateId);
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
    await connectPlan({ plan, estateId });
  }
}

export async function connectPlan({
  estateId,
  plan,
}: {
  estateId: string;
  plan: File;
}) {
  if (!plan) return;

  const { id } = await uploadAsset(plan);
  const planToConnect = { id };

  await client.request(
    CONNECT_ESTATE_PLAN,
    { estateId, planToConnect },
    authorizationHeader
  );
}

export async function deletePlan(estateId: string) {
  await client.request(DELETE_ESTATE_PLAN, { estateId }, authorizationHeader);
}

const DELETE_ESTATE_PLAN = gql`
  mutation DeleteEstatePlan($estateId: ID!) {
    updateEstate(where: { id: $estateId }, data: { plan: { delete: true } }) {
      id
    }
  }
`;

const CONNECT_ESTATE_PLAN = gql`
  mutation ConnectEstatePlan(
    $estateId: ID!
    $planToConnect: AssetWhereUniqueInput
  ) {
    updateEstate(
      where: { id: $estateId }
      data: { plan: { connect: $planToConnect } }
    ) {
      id
    }
  }
`;
