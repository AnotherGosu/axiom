import { InferGetStaticPropsType, GetServerSidePropsContext } from "next";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import CreateEstateForm from "components/pages/add-estate/CreateEstateForm";
import { getLoginSession } from "utils/auth/session";
import { getUserContacts } from "utils/cms/requests";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

export default function AddEstate({ user, issuer }: Props) {
  return (
    <PageLayout headTitle="Добавить">
      <Section heading="Добавить новый объект">
        <CreateEstateForm user={user} issuer={issuer} />
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

  const { issuer = "" } = session;

  const user = await getUserContacts(issuer);

  return { props: { user, issuer } };
};
