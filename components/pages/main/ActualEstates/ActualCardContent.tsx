import { Heading, Box, Flex, Spacer } from "@chakra-ui/react";
import TagBar from "components/common/TagBar";
import Location from "components/common/Location";
import Price from "components/common/Price";
import { EstateCard } from "utils/types/estate";
import ButtonLink from "components/common/ButtonLink";

export default function ActualCardContent({
  id,
  title,
  address,
  price,
  isBargaining,
  isMortgage,
}: EstateCard) {
  const tags = { isBargaining, isMortgage };

  return (
    <Box p="15px">
      <TagBar tags={tags} mb="10px" />
      <Heading as="h3" mb="10px" size="md" isTruncated>
        {title}
      </Heading>
      <Location address={address} mb="20px" />
      <Flex align="center" mt="auto">
        <ButtonLink href={`/estates/${id}`}>Подробнее</ButtonLink>
        <Spacer />
        <Price price={price} fontSize="xl" fontWeight="semibold" />
      </Flex>
    </Box>
  );
}
