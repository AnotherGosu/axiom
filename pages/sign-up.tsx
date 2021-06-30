import { VStack, Button } from "@chakra-ui/react";
import AuthLayout from "components/layouts/AuthLayout";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";
import Link from "components/common/Link";
import { useForm } from "react-hook-form";
import { signUpUser } from "utils/auth/helpers";
import type { SignUpForm } from "utils/types/forms";

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    reValidateMode: "onSubmit",
  });

  return (
    <AuthLayout headTitle="Регистрация" heading="Регистрация">
      <VStack
        as="form"
        spacing="20px"
        p="20px"
        mb="10px"
        borderWidth={1}
        borderRadius="md"
        onSubmit={handleSubmit(signUpUser)}
      >
        <TextInput id="lastName" label="Фамилия" control={control} isRequired />
        <TextInput id="name" label="Имя" control={control} isRequired />
        <TextInput
          id="patronim"
          label="Отчество"
          control={control}
          isRequired
        />
        <TextInput
          id="email"
          label="Электронная почта"
          control={control}
          isRequired
        />
        <PhoneInput id="phone" label="Телефон" control={control} isRequired />
        <Button type="submit" isLoading={isSubmitting} w="100%">
          Зарегистрироваться
        </Button>
      </VStack>
      <Link title="У меня уже есть аккаунт" href="/signIn" />
    </AuthLayout>
  );
}
