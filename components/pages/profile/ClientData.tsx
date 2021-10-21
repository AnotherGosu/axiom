import { Wrap, WrapItem } from "@chakra-ui/react";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";

export default function ClientData() {
  return (
    <Wrap spacing="20px">
      <WrapItem>
        <TextInput id="name" label="ФИО" />
      </WrapItem>
      <WrapItem>
        <PhoneInput id="phone" label="Телефон" />
      </WrapItem>
    </Wrap>
  );
}
