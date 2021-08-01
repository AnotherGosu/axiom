import { Box, Heading } from "@chakra-ui/react";
import Price from "../Price";
import Location from "../Location";
import type { EstateCard } from "utils/types/estate";

interface Props extends EstateCard {
  children?: React.ReactNode;
}

export default function CardContent({
  title,
  commonSquare,
  price,
  address,
  children,
}: Props) {
  return (
    <Box p="20px" bg="white">
      <Heading as="h3" size="md" isTruncated mb="10px">
        {`${title}, ${commonSquare} м`}
        <sup>2</sup>
      </Heading>
      <Price fontSize="lg" fontWeight="semibold" price={price} mb="10px" />
      <Location address={address} />
      {children}
    </Box>
  );
}
