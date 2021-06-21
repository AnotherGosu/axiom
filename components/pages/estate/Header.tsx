import { Box, Flex, Text } from "@chakra-ui/react";
import LocationMarker from "components/common/Location";

interface Props {
  address: string;
  createdAt: string;
}

export default function Header({ address, createdAt }: Props) {
  return (
    <Flex flexDir="column" gridGap="15px">
      <LocationMarker
        address={address}
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
      />
      <Box bg="whitesmoke" px="15px" py="5px">
        <Text fontSize="lg" color="blackAlpha.600">
          {createdAt}
        </Text>
      </Box>
    </Flex>
  );
}
