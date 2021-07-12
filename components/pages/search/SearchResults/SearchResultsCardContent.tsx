import { Box, Heading, Flex } from "@chakra-ui/react";
import TagBar from "components/common/TagBar";
import Location from "components/common/Location";
import Price from "components/common/Price";
import PublicationDate from "components/common/PublicationDate";
import ButtonLink from "components/common/ButtonLink";
import type { EstateCard } from "utils/types/estate";

export default function SearchResultsCardContent({
  id,
  createdAt,
  title,
  price,
  address,
  commonSquare,
  isBargaining,
  isMortgage,
}: EstateCard) {
  const tags = { isMortgage, isBargaining };

  return (
    <Box p="20px">
      <TagBar tags={tags} mb="10px" />
      <Heading as="h3" size="md" mb="10px" isTruncated>
        {`${title}, ${commonSquare} м`}
        <sup>2</sup>
      </Heading>
      <Price price={price} fontWeight="semibold" fontSize="lg" mb="10px" />
      <Location address={address} mb="20px" />
      <Flex align="center" justifyContent="space-between">
        <ButtonLink href={`/estates/${id}`}>Подробнее</ButtonLink>
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
