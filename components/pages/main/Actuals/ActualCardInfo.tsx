import { Heading, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import TagBar from "components/common/TagBar";
import Location from "components/common/Location";
import Price from "components/common/Price";
import { ActualEstate } from "utils/types/estate";
import { useRouter } from "next/router";

export default function ActualCardInfo({
  id,
  title,
  address,
  price,
  isBargaining,
  isMortgage,
}: ActualEstate) {
  const { push } = useRouter();
  const tags = { isBargaining, isMortgage };

  return (
    <Box p="15px">
      <TagBar tags={tags} mb="10px" />
      <Heading as="h3" mb="10px" size="md" fontWeight="semibold" isTruncated>
        {title}
      </Heading>
      <Location address={address} mb="20px" />
      <Flex align="center" mt="auto">
        <Button onClick={() => push(`/estates/${id}`)}>Подробнее</Button>
        <Spacer />
        <Price price={price} fontSize="xl" fontWeight="semibold" />
      </Flex>
    </Box>
  );
}
