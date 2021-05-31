import { Box, VStack, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
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

const CreateEstateForm: React.FC = () => {
  const form = useForm<CreateEstateFormFields>({
    mode: "all",
  });

  const { watch, formState, control } = form;

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
      const { id } = res.createEstate;

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
    <Box as="form" onSubmit={form.handleSubmit(onSubmit)}>
      <VStack spacing="50px" align="flex-start">
        <CardSelect id="rentType" control={control} cards={rentTypeCards} />
        <CardSelect id="estateType" control={control} cards={estateTypeCards} />
        <FormTabs control={control} watch={watch} formState={formState} />
      </VStack>
    </Box>
  );
};

export default CreateEstateForm;
