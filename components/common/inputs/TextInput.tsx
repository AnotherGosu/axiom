import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

type Props = InputProps & {
  id: string;
  label: string;
  control: Control<any>;
  isDisabled?: boolean;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  helperText?: string;
};

const TextInput: React.FC<Props> = ({
  id,
  label,
  placeholder,
  isDisabled,
  leftChildren,
  rightChildren,
  helperText,
  control,
  isRequired,
  ...rest
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control,
    defaultValue: "",
    rules: { required: isRequired && "Это обязательное поле" },
  });

  return (
    <FormControl
      label={label}
      id={id}
      isInvalid={invalid && !field.value}
      isRequired={isRequired}
      isDisabled={isDisabled}
      placeholder={placeholder}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {leftChildren && <InputLeftElement children={leftChildren} />}
        <Input {...field} {...rest} required={false} />
        {rightChildren && <InputRightElement children={rightChildren} />}
      </InputGroup>
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
