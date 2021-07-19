import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import { Control, useController, useFormContext } from "react-hook-form";

interface Props {
  id: string;
  label: string;
}

export default function Checkbox({ id, label }: Props) {
  // const { field } = useController({
  //   name: id,
  //   control: useFormContext().control,
  //   defaultValue: false,
  // });
  return (
    <ChakraCheckbox id={id} onChange={(e) => console.log(e.target)}>
      {label}
    </ChakraCheckbox>
  );
}
