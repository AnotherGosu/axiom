import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";
import NumberFormat from "react-number-format";

export interface Props extends FormControlProps {
  isInteger?: boolean;
  thousandSeparator?: boolean;
  format?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  isStringValue?: boolean;
}

export default function NumberInput({
  leftChildren,
  rightChildren,
  format,
  thousandSeparator,
  isInteger,
  isStringValue,
  isReadOnly,
  ...rest
}: Props) {
  return (
    <FormControl defaultValue={null} {...rest}>
      {({ onChange, ...field }) => (
        <InputGroup>
          {leftChildren && (
            <InputLeftAddon pointerEvents="none" children={leftChildren} />
          )}
          <NumberFormat
            onValueChange={({ formattedValue, floatValue }) => {
              return isStringValue
                ? onChange(formattedValue)
                : onChange(floatValue);
            }}
            autoComplete="off"
            format={format}
            mask="_"
            thousandSeparator={thousandSeparator && " "}
            allowEmptyFormatting
            decimalScale={isInteger ? 0 : 2}
            allowedDecimalSeparators={[",", "."]}
            allowNegative={false}
            customInput={Input}
            borderLeftRadius={leftChildren && "none"}
            readOnly={isReadOnly}
            {...field}
          />
          {rightChildren && (
            <InputRightElement
              zIndex={-1}
              pointerEvents="none"
              children={rightChildren}
            />
          )}
        </InputGroup>
      )}
    </FormControl>
  );
}
