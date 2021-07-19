import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";

interface Props extends FormControlProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

export default function TextInput({
  leftChildren,
  rightChildren,
  helperText,
  ...rest
}: Props) {
  return (
    <FormControl {...rest} defaultValue="">
      {(field) => (
        <InputGroup>
          {leftChildren && <InputLeftElement children={leftChildren} />}
          <Input {...field} required={false} />
          {rightChildren && <InputRightElement children={rightChildren} />}
        </InputGroup>
      )}
    </FormControl>
  );
}
