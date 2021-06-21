import { Flex } from "@chakra-ui/react";
import InputGroup from "components/inputs/InputGroup";

interface Props {
  minInputRightChildren?: React.ReactNode;
  maxInputRightChildren?: React.ReactNode;
  minInputId: string;
  maxInputId: string;
}

export default function RangeNumberInput({
  minInputRightChildren,
  maxInputRightChildren,
  minInputId,
  maxInputId,
}: Props) {
  return (
    <Flex
      justifyContent="space-between"
      gridGap="25px"
      flexDir={["column", "row"]}
    >
      <InputGroup
        leftChildren="от"
        rightChildren={minInputRightChildren}
        type="number"
        id={minInputId}
      />
      <InputGroup
        leftChildren="до"
        rightChildren={maxInputRightChildren}
        type="number"
        id={maxInputId}
      />
    </Flex>
  );
}
