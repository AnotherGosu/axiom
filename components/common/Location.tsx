import { Flex, Icon, Text, FlexProps } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props extends FlexProps {
  address: string;
}

export default function Location({
  address,
  isTruncated = true,
  ...rest
}: Props) {
  return (
    <Flex align="center" gridColumnGap="5px" {...rest}>
      <Icon as={IoLocationSharp} />
      <Text isTruncated={isTruncated}>{address}</Text>
    </Flex>
  );
}
