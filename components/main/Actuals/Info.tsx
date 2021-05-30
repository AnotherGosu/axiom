import {
  Heading,
  Flex,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import LocationMarker from "components/common/LocationMarker";
import TagBar from "components/common/TagBar";
import { Tags } from "utils/types";
import { useRouter } from "next/router";

interface Props {
  id: string;
  title: string;
  address: string;
  price: number;
  tags: Tags;
}

const Info: React.FC<Props> = ({ id, title, address, price, tags }) => {
  const { push } = useRouter();
  const size = useBreakpointValue({ base: "md", lg: "lg" });

  const formatedPrice = new Intl.NumberFormat("ru-RU").format(price);

  return (
    <Flex flexDir="column" gridRowGap="15px" mt="auto" p="15px" minW="0">
      <TagBar tags={tags} />
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
};

export default Info;
