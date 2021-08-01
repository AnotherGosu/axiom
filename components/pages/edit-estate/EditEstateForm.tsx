import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { Estate } from "utils/types/estate";
import type { EditEstateFormClient } from "utils/types/forms";

interface Props {
  estate: Estate;
}

export default function EditEstateForm({ estate }: Props) {
  const { images, plan } = estate;
  const form = useForm<EditEstateFormClient>({
    defaultValues: { ...estate, existingImages: images, existingPlan: plan },
  });

  return (
    <FormProvider {...form}>
      <Box as="form">
        <FormTabs />
      </Box>
    </FormProvider>
  );
}
