import { Box, Heading, Flex } from "@chakra-ui/react";
import Price from "components/common/Price";
import Location from "components/common/Location";
import PublicationDate from "components/common/PublicationDate";
import MyEstateCardMenu from "./MyEstateCardMenu";
import type { UserEstate } from "utils/types/estate";

export default function MyEstateCardInfo({
  title,
  address,
  price,
  createdAt,
  id,
}: UserEstate) {
  return (
    <Box p="20px">
      <Heading as="h3" size="md" mb="20px" isTruncated>
        {title}
      </Heading>
      <Price fontWeight="semibold" price={price} mb="10px" />
      <Location address={address} mb="20px" />
      <Flex justify="space-between" align="center">
        <MyEstateCardMenu id={id} />
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
