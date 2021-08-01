import WithHeader from "components/layouts/WithHeader";
import Profile from "components/pages/profile";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import getCustomUserProfile from "utils/cms/queries/getCustomUserProfile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ProfilePage({ profile }: Props) {
  return (
    <WithHeader headTitle="Профиль">
      <Profile initialData={profile} />
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const profile = await getCustomUserProfile(session.user.sub);
    return { props: { profile } };
  },
});
