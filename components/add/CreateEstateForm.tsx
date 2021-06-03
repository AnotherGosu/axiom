import { Box, VStack, useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import FormTabs from "./FormTabs";
import CardSelect from "./CardSelect";
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
import { createEstate } from "utils/cms";

const CreateEstateForm: React.FC = () => {
  const form = useForm<CreateEstateFormFields>({
    mode: "all",
  });

  const isRentType = form.watch("rentType");
  const isEstateType = form.watch("estateType");

  const toast = useToast();

  const onSubmit = async (data: CreateEstateFormFields) => {
    toast({
      isClosable: false,
      duration: null,
      status: "info",
      title: "Добавляем объект...",
    });

    try {
      const res = await createEstate(data);

      toast.closeAll();
      toast({
        isClosable: true,
        duration: 10000,
        status: "success",
        title: "Объект успешно добавлен",
      });
    } catch (err) {
      console.error(err);

      toast.closeAll();
      toast({
        isClosable: true,
        duration: 5000,
        status: "error",
        title: "Возникла ошибка",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)}>
        <VStack spacing="50px" align="flex-start">
          <CardSelect id="rentType" cards={rentTypeCards} />
          {isRentType && <CardSelect id="estateType" cards={estateTypeCards} />}
          {isEstateType && <FormTabs />}
        </VStack>
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

const estateTypeCards = estateTypeOptions.map((option, idx) => ({
  icon: estateTypeIcons[idx],
  option,
}));

const rentTypeCards = rentTypeOptions.map((option, idx) => ({
  icon: rentTypeIcons[idx],
  option,
}));
