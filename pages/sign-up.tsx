import { VStack, Button } from "@chakra-ui/react";
import AuthLayout from "components/layouts/AuthLayout";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";
import Link from "components/common/Link";
import { useForm } from "react-hook-form";
import type { CreateUserFormFields } from "utils/types/user";
import { signUpUser } from "utils/auth/helpers";

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CreateUserFormFields>({
    reValidateMode: "onSubmit",
  });

  return (
    <AuthLayout headTitle="Регистрация" heading="Регистрация">
      <VStack
        as="form"
        spacing="20px"
        p="20px"
        mb="10px"
        alignItems="flex-start"
        borderWidth={1}
        borderRadius="md"
        onSubmit={handleSubmit(signUpUser)}
      >
        <TextInput id="name" label="Имя" control={control} isRequired />
        <TextInput
          id="email"
          label="Электронная почта"
          control={control}
          isRequired
        />
        <PhoneInput id="phone" label="Телефон" control={control} isRequired />
        <Button type="submit" isLoading={isSubmitting}>
          Зарегистрироваться
        </Button>
      </VStack>
      <Link title="У меня уже есть аккаунт" href="/signIn" />
    </AuthLayout>
  );
}
