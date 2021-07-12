import { Box, Heading, Flex } from "@chakra-ui/react";
import Price from "components/common/Price";
import Location from "components/common/Location";
import PublicationDate from "components/common/PublicationDate";
import MyEstatesCardMenu from "./MyEstatesCardMenu";
import type { EstateCard } from "utils/types/estate";

export default function MyEstatesCardContent({
  title,
  address,
  price,
  commonSquare,
  createdAt,
  id,
}: EstateCard) {
  return (
    <Box p="20px">
      <Heading as="h3" size="md" isTruncated mb="10px">
        {`${title}, ${commonSquare} м`}
        <sup>2</sup>
      </Heading>
      <Price fontSize="lg" fontWeight="semibold" price={price} mb="10px" />
      <Location address={address} mb="20px" />
      <Flex justify="space-between" align="center">
        <MyEstatesCardMenu id={id} />
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
