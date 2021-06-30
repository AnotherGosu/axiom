import { Box, Flex } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import RentTypeSelectMenu from "components/estateForm/RentTypeSelectMenu";
import EstateTypeSelectMenu from "components/estateForm/EstateTypeSelectMenu";
import type { AddEstateForm as AddEstateFormData } from "utils/types/forms";
import type { User } from "utils/types/user";

interface Props {
  user: User;
}

export default function AddEstateForm({ user }: Props) {
  const { issuer, name, phone } = user;
  const form = useForm<AddEstateFormData>({
    defaultValues: {
      agentName: name,
      agentPhone: phone,
    },
  });

  const isTabsVisible = form.watch("rentType") && form.watch("estateType");

  return (
    <FormProvider {...form}>
      <Box as="form">
        <Flex flexDir={["column", "row"]} gridGap="25px" mb="25px">
          <RentTypeSelectMenu />
          <EstateTypeSelectMenu />
        </Flex>
        {isTabsVisible && <FormTabs issuer={issuer} />}
      </Box>
    </FormProvider>
  );
}
