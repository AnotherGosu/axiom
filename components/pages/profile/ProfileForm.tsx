import { VStack, Button, Skeleton } from "@chakra-ui/react";
import Section from "components/common/Section";
import UserData from "components/pages/profile/UserData";
import ContactData from "components/pages/profile/ContactData";
import type { User } from "utils/types/user";
import { useForm, FormProvider } from "react-hook-form";
import { editUserSubmit } from "./helpers";

interface Props {
  isValidating: boolean;
  defaultValues: User;
  mutate: any;
}

export default function ProfileForm({
  defaultValues,
  mutate,
  isValidating,
}: Props) {
  const form = useForm<User>({ defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = form;

  const onSubmit = async (data) => {
    await editUserSubmit(data);
    mutate();
  };

  return (
    <FormProvider {...form}>
      <VStack
        as="form"
        spacing="50px"
        align="flex-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Section heading="Профиль">
          <Skeleton isLoaded={!isValidating}>
            <UserData />
          </Skeleton>
        </Section>
        <Section heading="Контактные данные">
          <Skeleton isLoaded={!isValidating}>
            <ContactData />
          </Skeleton>
        </Section>
        <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
          Изменить
        </Button>
      </VStack>
    </FormProvider>
  );
}
