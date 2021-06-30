import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { CMSEstate } from "utils/types/estate";
import type { EditEstateForm as EditEstateFormData } from "utils/types/forms";

interface Props {
  estate: CMSEstate;
}

export default function EditEstateForm({ estate }: Props) {
  const { images, plan } = estate;
  const form = useForm<EditEstateFormData>({
    defaultValues: estate,
  });

  return (
    <FormProvider {...form}>
      <Box as="form">
        <FormTabs existingImages={images} existingPlan={plan} />
      </Box>
    </FormProvider>
  );
}
