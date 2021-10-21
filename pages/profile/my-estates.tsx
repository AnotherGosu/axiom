import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import getClientEstates from "utils/cms/queries/getClientEstates";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import MyEstatesSection from "components/pages/my-estates/MyEstates";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MyEstates({ estates }: Props) {
  return (
    <WithHeader headTitle="Мои объекты">
      <Section heading="Мои объекты">
        <MyEstatesSection initialEstates={estates} />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const sub = session.user.sub;
    const estates = await getClientEstates({ sub });
    return { props: { estates } };
  },
});
