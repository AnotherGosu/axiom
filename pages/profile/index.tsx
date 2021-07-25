import WithHeader from "components/layouts/WithHeader";
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
    <WithHeader headTitle="Профиль">
      <ProfileForm {...userData} />
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = getSession(ctx.req, ctx.res);
    const userData = await getUser(session.user.sub);
    return { props: { userData } };
  },
});
