import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

type Props = TextareaProps & {
  id: string;
  label: string;
  control: Control<any>;
};

const Textarea: React.FC<Props> = ({
  id,
  label,
  control,
  isRequired,
  ...rest
}) => {
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
};

export default Textarea;
