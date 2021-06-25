import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import TagBar from "components/common/TagBar";
import Location from "components/common/Location";
import Price from "components/common/Price";
import PublicationDate from "components/common/PublicationDate";
import ButtonLink from "components/common/ButtonLink";
import type { SearchedEstate } from "utils/types/estate";
export default function SearchResultsCardInfo({
  id,
  createdAt,
  title,
  description,
  price,
  address,
  commonSquare,
  isBargaining,
  isMortgage,
}: SearchedEstate) {
  const tags = { isMortgage, isBargaining };

  return (
    <Box p="20px">
      <TagBar tags={tags} mb="10px" />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb="20px"
      >
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          mb={{ base: "10px", md: "0" }}
          isTruncated
        >
          {`${title}, ${commonSquare} м`}
          <sup>2</sup>
        </Heading>
        <Price
          price={price}
          fontWeight="semibold"
          fontSize={{ base: "lg", md: "xl" }}
        />
      </Flex>
      <Location address={address} mb="10px" />
      <Text noOfLines={2} mb="20px">
        {description}
      </Text>
      <Flex align="center" justifyContent="space-between">
        <ButtonLink href={`/estates/${id}`}>Подробнее</ButtonLink>
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
