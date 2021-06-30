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
  createdAt,
  id,
}: EstateCard) {
  return (
    <Box p="20px">
      <Flex justify="space-between" mb="20px">
        <Heading as="h3" size="md" isTruncated>
          {title}
        </Heading>
        <Price fontWeight="semibold" price={price} />
      </Flex>
      <Location address={address} mb="20px" />
      <Flex justify="space-between" align="center">
        <MyEstatesCardMenu id={id} />
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
