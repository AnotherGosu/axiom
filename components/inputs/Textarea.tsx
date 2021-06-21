import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

interface Props extends TextareaProps {
  id: string;
  label: string;
  control: Control<any>;
}

export default function Textarea({
  id,
  label,
  control,
  isRequired,
  ...rest
}: Props) {
  const { field } = useController({
    name: id,
    control,
    defaultValue: "",
    rules: { required: isRequired && "Это обязательное поле" },
  });
  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <ChakraTextarea {...field} {...rest} />
    </FormControl>
  );
}
