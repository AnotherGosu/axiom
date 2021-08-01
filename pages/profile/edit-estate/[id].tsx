import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import EditEstateForm from "components/pages/edit-estate/EditEstateForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import getEditFormEstate from "utils/cms/queries/getEditFormEstate";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function EditEstate({ estate }: Props) {
  return (
    <WithHeader headTitle="Изменить объект">
      <Section heading="Изменить объект">
        <EditEstateForm estate={estate} />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { id } = ctx.params;
    const { createdAt, ...rest } = await getEditFormEstate(id.toString());
    return { props: { estate: rest } };
  },
});
