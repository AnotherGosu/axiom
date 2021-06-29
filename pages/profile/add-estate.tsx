import { InferGetStaticPropsType, GetServerSidePropsContext } from "next";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import AddEstateForm from "components/pages/add-estate/AddEstateForm";
import { getLoginSession } from "utils/auth/session";
import { getUser } from "utils/cms/user/requests";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

export default function AddEstate({ user }: Props) {
  return (
    <PageLayout headTitle="Добавить">
      <Section heading="Добавить объект">
        <AddEstateForm user={user} />
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

  const { issuer } = session;

  const user = await getUser(issuer);

  return { props: { user } };
};
