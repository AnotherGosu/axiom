import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import Map from "components/common/Map";
import { useFormContext, useController } from "react-hook-form";

const AddressInput: React.FC = () => {
  const { control } = useFormContext();

  const {
    field: { onChange, ...fieldProps },
    fieldState: { invalid, error },
  } = useController({
    name: "address",
    control,
    defaultValue: "",
    rules: { required: "Это обязательное поле" },
  });

  const locationControl = useController({
    name: "location",
    control,
    defaultValue: { latitude: "", longitude: "" },
  });

  return (
    <VStack spacing="20px" w="100%">
      <FormControl label="Адрес" id="address" isInvalid={invalid} isRequired>
        <FormLabel>Адрес</FormLabel>
        <Input
          onChange={onChange}
          {...fieldProps}
          placeholder="Россия, Хабаровск, улица Дзержинского, 24"
        />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>

      <Map
        setAddress={onChange}
        setLocation={(coords: [number, number]) =>
          locationControl.field.onChange({
            latitude: coords[0],
            longitude: coords[1],
          })
        }
      />
    </VStack>
  );
};

export default AddressInput;
