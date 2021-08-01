import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext, useController } from "react-hook-form";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

export default function AddressInput() {
  const { control } = useFormContext();

  const {
    field: { onChange: setAddress, ...fieldProps },
    fieldState: { invalid, error },
  } = useController({
    name: "address",
    control,
    defaultValue: "",
    rules: { required: "Это обязательное поле" },
  });

  const {
    field: { value: location, onChange: setLocation },
  } = useController({
    name: "location",
    control,
    defaultValue: { latitude: null, longitude: null },
  });

  const suggestStyle = {
    'ymaps[class*="search__suggest"]': {
      marginTop: "10px",
      borderRadius: "0.375rem",
      fontFamily: "Nunito",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    'ymaps[class*="suggest-item"]': {
      margin: "5px 0",
      borderRadius: 0,
    },
    'ymaps[class*="suggest-item_selected_yes"]': {
      background: "#B794F4",
    },
  };

  return (
    <VStack spacing="20px" w="100%" maxW="3xl" sx={suggestStyle}>
      <FormControl label="Адрес" id="address" isInvalid={invalid} isRequired>
        <FormLabel>Адрес</FormLabel>
        <Input id="suggest" onChange={setAddress} {...fieldProps} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
      <Map
        setAddress={setAddress}
        setLocation={setLocation}
        location={location}
      />
    </VStack>
  );
}
