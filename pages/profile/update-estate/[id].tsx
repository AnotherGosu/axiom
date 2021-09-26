import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import UpdateEstateForm from "components/pages/update-estate/UpdateEstateForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import getEditFormEstate from "utils/cms/queries/getEstateToUpdate";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function EditEstate({ estate }: Props) {
  return (
    <WithHeader headTitle="Обновить объект">
      <Section heading="Обновить объект">
        <UpdateEstateForm estate={estate} />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const { id } = ctx.params;
    const estate = await getEditFormEstate(id.toString());
    return { props: { estate } };
  },
});
