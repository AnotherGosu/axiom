import { Box, Flex, Text } from "@chakra-ui/react";
import Location from "components/common/Location";
import PublicationDate from "components/common/PublicationDate";

interface Props {
  title: string;
  address: string;
  createdAt: string;
  commonSquare: number;
}

export default function Header({
  title,
  commonSquare,
  address,
  createdAt,
}: Props) {
  return (
    <Flex flexDir="column" gridGap="15px">
      <Text fontSize={["xl", "2xl"]} fontWeight="bold">
        {`${title}, ${commonSquare} м`}
        <sup>2</sup>
      </Text>
      <Location address={address} fontSize={["sm", "md"]} isTruncated={false} />
      <Box bg="whitesmoke" px="15px" py="5px">
        <PublicationDate fontSize={["sm", "md"]} createdAt={createdAt} />
      </Box>
    </Flex>
  );
}
