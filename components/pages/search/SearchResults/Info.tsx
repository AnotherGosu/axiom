import {
  Box,
  Text,
  Flex,
  Spacer,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import TagBar from "components/common/TagBar";
import LocationMarker from "components/common/Location";
import Price from "components/common/SquarePrice";
import LinkTitle from "./LinkTitle";
import Features from "./Features";
import type { SearchedEstate } from "utils/types/estate";

export default function Info({
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
  const isBase = useBreakpointValue({ base: true, sm: false });
  const publicationDate = new Date(createdAt).toLocaleDateString("ru");

  return (
    <Flex flexDir="column" flexGrow={1} minW="0" gridRowGap="10px">
      <Flex justifyContent="space-between" gridColumnGap="20px">
        <LinkTitle id={id} title={title} commonSquare={commonSquare} />
        <Box minW="max-content">
          <Price
            price={price}
            commonSquare={commonSquare}
            priceFontSize={{ base: "md", md: "lg", lg: "xl" }}
            squarePriceFontSize={{ base: "sm", md: "md", lg: "lg" }}
          />
        </Box>
      </Flex>
      <TagBar isBargaining={isBargaining} isMortgage={isMortgage} />
      <LocationMarker
        address={address}
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        isTruncated
      />
      {/* {!isBase && <Features features={rest} />} */}
      {!isBase && (
        <Text noOfLines={2} fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      )}
      <Spacer />
      <Flex align="center" justifyContent="space-between">
        <Button size={isBase ? "md" : "lg"}>Показать телефон</Button>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          {publicationDate}
        </Text>
      </Flex>
    </Flex>
  );
}
