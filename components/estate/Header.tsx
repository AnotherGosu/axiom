import { Box, Flex, Text } from "@chakra-ui/react";
import LocationMarker from "components/common/LocationMarker";

interface Props {
  address: string;
  postDate: string;
}

const Header: React.FC<Props> = ({ address, postDate }) => {
  return (
    <Flex flexDir="column" gridGap="15px">
      <LocationMarker
        address={address}
        fontSize={{ base: "md", md: "lg", lg: "xl" }}
      />
      <Box bg="whitesmoke" px="15px" py="5px">
        <Text fontSize="lg" color="blackAlpha.600">
          {postDate}
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
