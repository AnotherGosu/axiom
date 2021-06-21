import {
  Heading,
  Flex,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import LocationMarker from "components/common/Location";
import TagBar from "components/common/TagBar";
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
  const size = useBreakpointValue({ base: "md", lg: "lg" });

  const formatedPrice = new Intl.NumberFormat("ru-RU").format(price);

  return (
    <Flex flexDir="column" gridRowGap="15px" mt="auto" p="15px" minW="0">
      <TagBar isBargaining={isBargaining} isMortgage={isMortgage} />
      <Heading
        as="h3"
        fontSize={["lg", "xl"]}
        fontWeight="semibold"
        isTruncated
      >
        {title}
      </Heading>
      <LocationMarker address={address} fontSize={["sm", "md"]} isTruncated />
      <Flex justify="space-between" align="center">
        <Text fontSize={["lg", "xl"]} fontWeight="semibold">
          {`${formatedPrice} ₽`}
        </Text>
        <Button size={size} onClick={() => push(`/estates/${id}`)}>
          Подробнее
        </Button>
      </Flex>
    </Flex>
  );
}
