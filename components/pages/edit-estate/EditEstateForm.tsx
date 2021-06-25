import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { FormEstate } from "utils/types/estate";

interface Props {
  defaultValues: FormEstate;
  issuer: string;
}

export default function EditEstateForm({ defaultValues, issuer }: Props) {
  const form = useForm({
    defaultValues,
  });
  return (
    <FormProvider {...form}>
      <Box as="form">
        <FormTabs issuer={issuer} />
      </Box>
    </FormProvider>
  );
}
