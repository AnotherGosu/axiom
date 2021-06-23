import { Stack, StackProps, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "../Link";

export default function Auth(props: StackProps) {
  const { push } = useRouter();

  return (
    <Stack spacing="30px" align="center" direction="row" {...props}>
      <Link
        fontWeight="semibold"
        fontSize="lg"
        href="/sign-up"
        title="Регистрация"
      />
      <Button onClick={() => push("/sign-in")}>Войти</Button>
    </Stack>
  );
}
