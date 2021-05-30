import {
  InputGroup as ChakraInputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
  useBreakpointValue,
  InputProps,
} from "@chakra-ui/react";

interface Props {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

const InputGroup: React.FC<Props & InputProps> = ({
  leftChildren,
  rightChildren,
  ...rest
}) => {
  const size = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <ChakraInputGroup size={size}>
      {leftChildren && <InputLeftAddon children={leftChildren} />}
      <Input {...rest} />
      {rightChildren && <InputRightAddon children={rightChildren} />}
    </ChakraInputGroup>
  );
};

export default InputGroup;
