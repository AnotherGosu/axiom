import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getLoginSession } from "utils/auth/session";
import { getMyEstates } from "utils/cms/estate/requests";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import MyEstatesSection from "components/pages/my-estates/MyEstates";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MyEstates({ estates, issuer }: Props) {
  return (
    <PageLayout headTitle="Мои объекты">
      <Section heading="Мои объекты">
        <MyEstatesSection initialEstates={estates} issuer={issuer} />
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getLoginSession(ctx.req);

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const { issuer } = session;

  const estates = await getMyEstates({ issuer });

  return {
    props: {
      issuer,
      estates,
    },
  };
};
