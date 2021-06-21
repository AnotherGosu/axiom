import { Container, Flex, Icon, Text, TextProps } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props extends TextProps {
  address: string;
}

export default function Location({ address, ...rest }: Props) {
  return (
    <Flex gridColumnGap="5px" align="center">
      <Icon as={IoLocationSharp} />
      <Container>
        <Text isTruncated {...rest}>
          {address}
        </Text>
      </Container>
    </Flex>
  );
}
