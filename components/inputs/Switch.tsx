import { Switch as ChakraSwitch } from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";

export default function Switch(props: FormControlProps) {
  return (
    <FormControl
      defaultValue={false}
      display="flex"
      alignItems="center"
      {...props}
    >
      {(field) => <ChakraSwitch isChecked={field.value} {...field} />}
    </FormControl>
  );
}
