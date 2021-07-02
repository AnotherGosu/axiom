import { Wrap, WrapItem } from "@chakra-ui/react";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";

export default function Accaunt() {
  return (
    <Wrap spacing="20px">
      <WrapItem>
        <TextInput id="name" label="ФИО" isReadOnly />
      </WrapItem>
      <WrapItem>
        <TextInput id="email" label="Электроннная почта" isReadOnly />
      </WrapItem>
      <WrapItem>
        <PhoneInput id="phone" label="Телефон" isReadOnly />
      </WrapItem>
    </Wrap>
  );
}
