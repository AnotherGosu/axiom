import ButtonLink from "../ButtonLink";
import ProfileMenu from "./ProfileMenu";
import { useUser } from "@auth0/nextjs-auth0";

export default function Auth() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div />;
  if (error) {
    console.log(error);
    return <div />;
  }

  return !isLoading && user ? (
    <ProfileMenu />
  ) : (
    <ButtonLink href="/api/auth/login">Войти</ButtonLink>
  );
}
