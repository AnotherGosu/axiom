import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { Control, useController, RegisterOptions } from "react-hook-form";
import NumberFormat from "react-number-format";

export interface Props extends InputProps {
  id: string;
  label: string;
  control: Control<any>;
  isInteger?: boolean;
  thousandSeparator?: boolean;
  format?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  helperText?: string;
  isStringValue?: boolean;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export default function NumberInput({
  id,
  label,
  placeholder,
  leftChildren,
  rightChildren,
  helperText,
  format,
  thousandSeparator,
  control,
  isInteger,
  isRequired,
  isStringValue,
  rules,
}: Props) {
  const {
    field: { onChange, ...fieldProps },
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control,
    defaultValue: null,
    rules: {
      ...rules,
      required: isRequired && "Это обязательное поле",
    },
  });

  const onValueChange = ({ formattedValue, floatValue }) => {
    isStringValue ? onChange(formattedValue) : onChange(floatValue);
  };

  return (
    <FormControl
      label={label}
      id={id}
      isInvalid={invalid}
      isRequired={isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {leftChildren && (
          <InputLeftElement pointerEvents="none" children={leftChildren} />
        )}
        <NumberFormat
          autoComplete="off"
          format={format}
          mask="_"
          onValueChange={onValueChange}
          thousandSeparator={thousandSeparator && " "}
          allowEmptyFormatting
          decimalScale={isInteger ? 0 : 2}
          allowNegative={false}
          customInput={Input}
          placeholder={placeholder}
          {...fieldProps}
        />
        {rightChildren && (
          <InputRightElement
            zIndex={-1}
            pointerEvents="none"
            children={rightChildren}
          />
        )}
      </InputGroup>
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}