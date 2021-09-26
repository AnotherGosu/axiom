import { Select as ChakraSelect } from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";
import { Option } from "utils/types/common";

interface Props extends FormControlProps {
  options: Option[];
  isEmptyOption?: boolean;
}

export default function Select({
  options,
  isEmptyOption = true,
  ...rest
}: Props) {
  return (
    <FormControl defaultValue={null} {...rest}>
      {(field) => (
        <ChakraSelect {...field}>
          {isEmptyOption && <option value={null}></option>}
          {options.map(([value, title]) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </ChakraSelect>
      )}
    </FormControl>
  );
}
