import { Box, VStack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import type { AddEstateForm as AddEstateFormData } from "utils/types/forms";
import EstateTypeRadio from "components/estateForm/EstateTypeRadio";
import RentTypeRadio from "components/estateForm/RentTypeRadio";

interface Props {
  issuer: string;
}

export default function AddEstateForm({ issuer }: Props) {
  const form = useForm<AddEstateFormData>({
    defaultValues: {
      location: { latitude: 48.47, longitude: 135.07 },
    },
  });

  const isRentType = form.watch("rentType");
  const isEstateType = form.watch("estateType");

  return (
    <FormProvider {...form}>
      <VStack as="form" w="100%" spacing="50px" align="flex-start">
        <RentTypeRadio />
        {isRentType && <EstateTypeRadio />}
        {isEstateType && <FormTabs issuer={issuer} />}
      </VStack>
    </FormProvider>
  );
}
