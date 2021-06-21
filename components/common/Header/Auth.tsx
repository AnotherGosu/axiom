import { HStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "../Link";

export default function Auth() {
  const { push } = useRouter();

  return (
    <HStack spacing="30px">
      <Link fontWeight="semibold" href="/sign-up" title="Регистрация" />
      <Button onClick={() => push("/sign-in")}>Войти</Button>
    </HStack>
  );
}
