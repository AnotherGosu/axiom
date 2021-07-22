import { Skeleton } from "@chakra-ui/skeleton";
import ButtonLink from "../ButtonLink";
import ProfileMenu from "./ProfileMenu";
import { useUser } from "@auth0/nextjs-auth0";

export default function Auth() {
  const { user, isLoading, error } = useUser();

  if (error) {
    console.log(error);
    return <div />;
  }

  return (
    <Skeleton isLoaded={!isLoading}>
      {user ? (
        <ProfileMenu />
      ) : (
        <ButtonLink href="/api/auth/login">Войти</ButtonLink>
      )}
    </Skeleton>
  );
}
