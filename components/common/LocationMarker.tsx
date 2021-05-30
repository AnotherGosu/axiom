import { HStack, Icon, Text, TextProps } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  address: string;
  fontSize: TextProps["fontSize"];
  isTruncated?: boolean;
}

const LocationMarker: React.FC<Props> = ({
  address,
  fontSize,
  isTruncated,
}) => {
  return (
    <HStack spacing="5px">
      <Icon as={IoLocationSharp} />
      <Text fontSize={fontSize} isTruncated={isTruncated}>
        {address}
      </Text>
    </HStack>
  );
};

export default LocationMarker;
