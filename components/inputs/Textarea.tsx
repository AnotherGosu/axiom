import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";

export default function Textarea(props: FormControlProps) {
  return (
    <FormControl defaultValue="" {...props}>
      {(field) => <ChakraTextarea {...field} />}
    </FormControl>
  );
}
