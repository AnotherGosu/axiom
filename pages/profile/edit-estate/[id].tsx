import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import EditEstateForm from "components/pages/edit-estate/EditEstateForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import getEstateToEdit from "utils/cms/queries/getEstateToEdit";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function EditEstate({ estate }: Props) {
  return (
    <WithHeader headTitle="Изменить объект">
      <Section heading="Изменить объект">
        <EditEstateForm estateForm={estate} />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { id } = ctx.params;
    const estate = await getEstateToEdit(id.toString());
    return { props: { estate } };
  },
});
