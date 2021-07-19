import { VStack, Button } from "@chakra-ui/react";
import AuthLayout from "components/layouts/AuthLayout";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";
import Link from "components/common/Link";
import { useForm, FormProvider } from "react-hook-form";
import { signUpUser } from "utils/auth/helpers";
import type { SignUpForm } from "utils/types/forms";

export default function SignUp() {
  const form = useForm<SignUpForm>({
    reValidateMode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <AuthLayout headTitle="Регистрация" heading="Регистрация">
      <FormProvider {...form}>
        <VStack
          as="form"
          spacing="20px"
          p="20px"
          mb="10px"
          borderWidth={1}
          borderRadius="md"
          onSubmit={handleSubmit(signUpUser)}
        >
          <TextInput
            id="lastName"
            label="Фамилия"
            rules={{ required: "Это обязательное поле" }}
          />
          <TextInput id="name" label="Имя" isRequired />
          <TextInput
            id="patronim"
            label="Отчество"
            rules={{ required: "Это обязательное поле" }}
          />
          <TextInput
            id="email"
            label="Электронная почта"
            rules={{ required: "Это обязательное поле" }}
          />
          <PhoneInput
            id="phone"
            label="Телефон"
            rules={{ required: "Это обязательное поле" }}
          />
          <Button type="submit" isLoading={isSubmitting} w="100%">
            Зарегистрироваться
          </Button>
        </VStack>
      </FormProvider>
      <Link title="У меня уже есть аккаунт" href="/signIn" />
    </AuthLayout>
  );
}
