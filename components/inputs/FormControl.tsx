import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  useController,
  useFormContext,
  RegisterOptions,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";

interface FormControlInnerProps extends ChakraFormControlProps {
  children: (
    field: ControllerRenderProps<FieldValues, string>
  ) => React.ReactNode;
  defaultValue?: any;
  isHiddenLabel?: boolean;
  helperText?: string;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export type FormControlProps = Omit<FormControlInnerProps, "children">;

export default function FormControl({
  id,
  label,
  children,
  rules,
  isHiddenLabel,
  helperText,
  defaultValue,
  ...rest
}: FormControlInnerProps) {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control,
    defaultValue,
    rules,
  });

  return (
    <ChakraFormControl
      id={id}
      label={label}
      isInvalid={invalid && field.value}
      isRequired={!!rules?.required}
      {...rest}
    >
      {!isHiddenLabel && <FormLabel>{label}</FormLabel>}
      {children(field)}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </ChakraFormControl>
  );
}
