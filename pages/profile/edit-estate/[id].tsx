import { InferGetStaticPropsType, GetServerSidePropsContext } from "next";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import EditEstateForm from "components/pages/edit-estate/EditEstateForm";
import { getLoginSession } from "utils/auth/session";
import { getEstate } from "utils/cms/estate/requests";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

export default function EditEstate({ estate }: Props) {
  return (
    <PageLayout headTitle="Изменить">
      <Section heading="Изменить объект">
        <EditEstateForm estate={estate} />
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getLoginSession(ctx.req);
  if (!session)
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };

  const { id } = ctx.params;
  const estate = await getEstate(id.toString());

  return { props: { estate } };
};
