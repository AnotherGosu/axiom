import { VStack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { AddEstateForm as AddEstateFormType } from "utils/types/forms";
import EstateTypeRadio from "components/estateForm/EstateTypeRadio";
import RentTypeRadio from "components/estateForm/TransactionTypeRadio";

export default function AddEstateForm() {
  const form = useForm<AddEstateFormType>({
    defaultValues: {
      location: { latitude: 48.47, longitude: 135.07 },
    },
  });

  const isTransactionType = form.watch("transactionType");
  const isEstateType = form.watch("estateType");

  return (
    <FormProvider {...form}>
      <VStack as="form" w="100%" spacing="50px" align="flex-start">
        <RentTypeRadio />
        {isTransactionType && <EstateTypeRadio />}
        {isEstateType && <FormTabs />}
      </VStack>
    </FormProvider>
  );
}
