import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  useBreakpointValue,
  InputRightElement,
} from "@chakra-ui/react";
import { watch } from "node:fs";
import { Control, useController } from "react-hook-form";
import NumberFormat from "react-number-format";

type Props = InputProps & {
  id: string;
  label: string;
  control: Control<any>;
  isInteger?: boolean;
  thousandSeparator?: boolean;
  format?: string;
  isDisabled?: boolean;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  helperText?: string;
  isRawValue?: boolean;
  watchMaxValue?: any;
};

const NumberInput: React.FC<Props> = ({
  id,
  label,
  placeholder,
  isDisabled,
  leftChildren,
  rightChildren,
  helperText,
  format,
  thousandSeparator,
  control,
  isInteger,
  isRequired,
  isRawValue,
  watchMaxValue,
}) => {
  const size = useBreakpointValue({ base: "md", md: "lg" });

  const {
    field: { onChange, ...fieldProps },
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control,
    defaultValue: null,
    rules: {
      required: isRequired && "Это обязательное поле",
      max: { value: watchMaxValue, message: "Проверьте введенные данные" },
    },
  });

  const onFieldChange = ({ formattedValue, floatValue }) => {
    isRawValue ? onChange(formattedValue) : onChange(floatValue);
  };

  return (
    <FormControl
      label={label}
      id={id}
      isInvalid={invalid}
      isRequired={isRequired}
      isDisabled={isDisabled}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup size={size}>
        {leftChildren && <InputLeftElement children={leftChildren} />}
        <NumberFormat
          autoComplete="off"
          format={format}
          mask="_"
          onValueChange={(value) => onFieldChange(value)}
          thousandSeparator={thousandSeparator && " "}
          allowEmptyFormatting
          decimalScale={isInteger ? 0 : 2}
          allowNegative={false}
          customInput={Input}
          placeholder={placeholder}
          {...fieldProps}
        />
        {rightChildren && <InputRightElement children={rightChildren} />}
      </InputGroup>
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default NumberInput;
