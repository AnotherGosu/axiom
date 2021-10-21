import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { EditEstateForm as EditEstateFormType } from "utils/types/forms";

interface Props {
  estateForm: EditEstateFormType;
}

export default function EditEstateForm({ estateForm }: Props) {
  const form = useForm<EditEstateFormType>({
    defaultValues: {
      ...estateForm,
    },
  });

  return (
    <FormProvider {...form}>
      <Box as="form">
        <FormTabs />
      </Box>
    </FormProvider>
  );
}
