import { Box, Flex } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import SelectMenu from "./SelectMenu";
import { CreateEstateFormFields } from "utils/types/estate";
import { rentTypeOptions, estateTypeOptions } from "utils/constants";
import { BsBuilding } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { GiHouse, GiHomeGarage } from "react-icons/gi";
import { FaMapSigns } from "react-icons/fa";
import type { UserContacts } from "utils/types/user";
import {
  IoKey,
  IoCalendarOutline,
  IoTimeOutline,
  IoStorefrontOutline,
} from "react-icons/io5";

interface Props {
  user: UserContacts;
  issuer: string;
}

export default function CreateEstateForm({ user, issuer }: Props) {
  const { name, phone } = user;
  const form = useForm<CreateEstateFormFields>({
    defaultValues: {
      agentName: name,
      agentPhone: phone,
    },
  });

  const isTabsVisible = form.watch("rentType") && form.watch("estateType");

  return (
    <FormProvider {...form}>
      <Box as="form" w="100%" maxW="4xl">
        <Flex flexDir={["column", "row"]} gridGap="25px" mb="25px">
          <SelectMenu
            id="rentType"
            label="Тип сделки"
            menuItems={rentTypeMenuItems}
          />
          <SelectMenu
            id="estateType"
            label="Тип объекта"
            menuItems={estateTypeMenuItems}
          />
        </Flex>
        {isTabsVisible && <FormTabs issuer={issuer} />}
      </Box>
    </FormProvider>
  );
}

const estateTypeIcons = [
  BsBuilding,
  IoIosBed,
  GiHouse,
  GiHomeGarage,
  IoStorefrontOutline,
  FaMapSigns,
];

const rentTypeIcons = [IoKey, IoCalendarOutline, IoTimeOutline];

const rentTypeMenuItems = rentTypeOptions.map((option, idx) => ({
  icon: rentTypeIcons[idx],
  value: option[0],
  label: option[1],
}));

const estateTypeMenuItems = estateTypeOptions.map((option, idx) => ({
  icon: estateTypeIcons[idx],
  value: option[0],
  label: option[1],
}));
