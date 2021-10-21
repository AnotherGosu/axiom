import { VStack, Button, Skeleton } from "@chakra-ui/react";
import Section from "components/common/Section";
import ClientData from "components/pages/profile/ClientData";
import ContactData from "components/pages/profile/ContactData";
import type { ClientProfileForm } from "utils/types/forms";
import { useForm, FormProvider } from "react-hook-form";
import { edtClientProfileSubmit } from "./helpers";

interface Props {
  isValidating: boolean;
  defaultValues: ClientProfileForm;
  mutate: any;
}

export default function ProfileForm({
  defaultValues,
  mutate,
  isValidating,
}: Props) {
  const form = useForm<ClientProfileForm>({ defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = form;

  const onSubmit = async (data) => {
    await edtClientProfileSubmit(data);
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
            <ClientData />
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
