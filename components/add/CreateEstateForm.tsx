import { Box, Flex } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import SelectMenu from "./SelectMenu";
import { CreateEstateFormFields } from "utils/types";
import { rentTypeOptions, estateTypeOptions } from "utils/constants";
import { BsBuilding } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { GiHouse, GiHomeGarage } from "react-icons/gi";
import { FaMapSigns } from "react-icons/fa";
import {
  IoKey,
  IoCalendarOutline,
  IoTimeOutline,
  IoStorefrontOutline,
} from "react-icons/io5";

const CreateEstateForm: React.FC = () => {
  const form = useForm<CreateEstateFormFields>();

  const isTabsVisible = form.watch("rentType") && form.watch("estateType");

  return (
    <FormProvider {...form}>
      <Box as="form" w="100%" maxW="3xl">
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
        {isTabsVisible && <FormTabs />}
      </Box>
    </FormProvider>
  );
};

export default CreateEstateForm;

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
