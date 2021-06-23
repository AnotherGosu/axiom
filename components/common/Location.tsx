import { Flex, Icon, Text, FlexProps } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props extends FlexProps {
  address: string;
}

export default function Location({ address, ...rest }: Props) {
  return (
    <Flex gridColumnGap="5px" align="center" {...rest}>
      <Icon as={IoLocationSharp} />
      <Text isTruncated>{address}</Text>
    </Flex>
  );
}
