import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";
import { Option } from "utils/types";

type Props = SelectProps & {
  id: string;
  label: string;
  options: Option[];
  control: Control<any>;
  helperText?: string;
};

const Select: React.FC<Props> = ({
  id,
  label,
  control,
  options,
  isRequired,
  helperText,
  ...rest
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control,
    defaultValue: isRequired ? options[0][0] : "",
    rules: { required: isRequired && "Это обязательное поле" },
  });

  return (
    <FormControl
      id={id}
      labe={label}
      isRequired={isRequired}
      isInvalid={invalid}
    >
      <FormLabel>{label}</FormLabel>
      <ChakraSelect {...field} {...rest}>
        {!isRequired && <option value=""></option>}
        {options.map(([value, title]) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </ChakraSelect>
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default Select;
