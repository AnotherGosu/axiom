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
      <Flex align="center" justifyContent="space-between">
        <ButtonLink href={`/estates/${id}`}>Подробнее</ButtonLink>
        <PublicationDate createdAt={createdAt} />
      </Flex>
    </Box>
  );
}
