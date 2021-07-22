import PageLayout from "components/layouts/PageLayout";
import ProfileForm from "components/pages/profile/ProfileForm";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getUser } from "utils/cms/user/requests";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Profile({ userData }: Props) {
  return (
    <PageLayout headTitle="Профиль">
      <ProfileForm {...userData} />
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const userData = await getUser(session.user.sub);
    return { props: { userData } };
  },
});
