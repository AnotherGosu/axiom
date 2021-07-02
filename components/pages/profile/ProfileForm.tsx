import { VStack, Button } from "@chakra-ui/react";
import Section from "components/common/Section";
import Accaunt from "components/pages/profile/Accaunt";
import Contacts from "components/pages/profile/Contacts";
import type { User } from "utils/types/user";
import { useForm, FormProvider } from "react-hook-form";
import { handleEditProfile } from "./helpers";

export default function ProfileForm(user: User) {
  const form = useForm<User>({ defaultValues: user });
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = form;

  const onSubmit = (data: User) => handleEditProfile(data);

  return (
    <FormProvider {...form}>
      <VStack
        as="form"
        spacing="50px"
        align="flex-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Section heading="Аккаунт">
          <Accaunt />
        </Section>
        <Section heading="Контактные данные">
          <Contacts />
        </Section>
        <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
          Изменить
        </Button>
      </VStack>
    </FormProvider>
  );
}
