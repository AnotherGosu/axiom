import { VStack, Button, Skeleton } from "@chakra-ui/react";
import Section from "components/common/Section";
import Accaunt from "components/pages/profile/Account";
import Contacts from "components/pages/profile/Contacts";
import type { customUserProfile } from "utils/types/customUser";
import { useForm, FormProvider } from "react-hook-form";
import { updateProfile } from "./helpers";

interface Props {
  isValidating: boolean;
  defaultValues: customUserProfile;
  mutate: any;
}

export default function ProfileForm({
  defaultValues,
  mutate,
  isValidating,
}: Props) {
  const form = useForm<customUserProfile>({ defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = form;

  const onSubmit = async (data) => {
    await updateProfile(data);
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
        <Section heading="Аккаунт">
          <Skeleton isLoaded={!isValidating}>
            <Accaunt />
          </Skeleton>
        </Section>
        <Section heading="Контактные данные">
          <Skeleton isLoaded={!isValidating}>
            <Contacts />
          </Skeleton>
        </Section>
        <Button type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
          Изменить
        </Button>
      </VStack>
    </FormProvider>
  );
}
