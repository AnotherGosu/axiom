import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getLoginSession } from "utils/auth/session";
import { getMyEstates } from "utils/cms/estate/requests";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import EstatesList from "components/pages/my-estates/MyEstatesList";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MyEstates({ estates }: Props) {
  return (
    <PageLayout headTitle="Мои объекты">
      <Section heading="Мои объекты">
        <EstatesList estates={estates} />
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

  const estates = await getMyEstates(session.issuer);

  return {
    props: {
      estates,
    },
  };
};
