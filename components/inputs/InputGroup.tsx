import {
  InputGroup as ChakraInputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  useBreakpointValue,
  InputProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

export default function InputGroup({
  leftChildren,
  rightChildren,
  ...rest
}: Props) {
  const size = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <ChakraInputGroup size={size}>
      {leftChildren && <InputLeftAddon children={leftChildren} />}
      <Input {...rest} />
      {rightChildren && <InputRightAddon children={rightChildren} />}
    </ChakraInputGroup>
  );
}
