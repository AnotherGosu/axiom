import {
  FormControl,
  FormLabel,
  Switch as ChakraSwitch,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  control: Control<any>;
}

export default function Switch({ id, label, control }: Props) {
  const { field } = useController({
    name: id,
    control,
    defaultValue: false,
  });

  return (
    <FormControl id={id} display="flex" alignItems="center">
      <FormLabel mb="0">{label}</FormLabel>
      <ChakraSwitch {...field} />
    </FormControl>
  );
}
