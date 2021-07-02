import PageLayout from "components/layouts/PageLayout";
import ProfileForm from "components/pages/profile/ProfileForm";
import { getLoginSession } from "utils/auth/session";
import { getUser } from "utils/cms/user/requests";
import type { InferGetStaticPropsType, GetServerSidePropsContext } from "next";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

export default function Profile({ user }: Props) {
  return (
    <PageLayout headTitle="Профиль">
      <ProfileForm {...user} />
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

  const user = await getUser(session.issuer);

  return { props: { user } };
};
