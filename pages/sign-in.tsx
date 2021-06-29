import { VStack, Button } from "@chakra-ui/react";
import AuthLayout from "components/layouts/AuthLayout";
import TextInput from "components/inputs/TextInput";
import Link from "components/common/Link";
import { useForm } from "react-hook-form";
import { signInUser } from "utils/auth/helpers";

export default function SignIn() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    reValidateMode: "onSubmit",
  });

  return (
    <AuthLayout headTitle="Авторизация" heading="Авторизация">
      <VStack
        as="form"
        spacing="20px"
        p="20px"
        mb="10px"
        borderWidth={1}
        borderRadius="md"
        onSubmit={handleSubmit(signInUser)}
      >
        <TextInput id="email" label="Электронная почта" control={control} />
        <Button type="submit" isLoading={isSubmitting} w="100%">
          Войти
        </Button>
      </VStack>
      <Link title="У меня еще нет аккаунта" href="/signUp" />
    </AuthLayout>
  );
}
