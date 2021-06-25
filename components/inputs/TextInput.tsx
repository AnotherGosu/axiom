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
import { Control, useController, useFormContext } from "react-hook-form";

interface Props extends InputProps {
  id: string;
  label?: string;
  control?: Control<any>;
  isDisabled?: boolean;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  helperText?: string;
}

export default function TextInput({
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
}: Props) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control: control ? control : useFormContext().control,
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
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {leftChildren && <InputLeftElement children={leftChildren} />}
        <Input {...field} {...rest} required={false} />
        {rightChildren && <InputRightElement children={rightChildren} />}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
