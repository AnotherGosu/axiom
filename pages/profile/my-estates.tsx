import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getMyEstates } from "utils/cms/estate/requests";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import MyEstatesSection from "components/pages/my-estates/MyEstates";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MyEstates({ estates }: Props) {
  return (
    <PageLayout headTitle="Мои объекты">
      <Section heading="Мои объекты">
        <MyEstatesSection initialEstates={estates} />
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const sub = session.user.sub;
    const estates = await getMyEstates({ sub });
    return { props: { estates } };
  },
});
