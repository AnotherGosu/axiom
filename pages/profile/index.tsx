import WithHeader from "components/layouts/WithHeader";
import Profile from "components/pages/profile";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import getUser from "utils/cms/queries/getUser";
import type { GetServerSidePropsContext } from "next";
import type { User } from "utils/types/user";

export default function ProfilePage({ userData }: { userData: User }) {
  return (
    <WithHeader headTitle="Профиль">
      <Profile initialData={userData} />
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const user = await getUser(session.user.sub);
    return { props: { userData: user } };
  },
});
