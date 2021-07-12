import { Heading, Box } from "@chakra-ui/react";
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
  commonSquare,
  isBargaining,
  isMortgage,
}: EstateCard) {
  const tags = { isBargaining, isMortgage };

  return (
    <Box p="15px">
      <TagBar tags={tags} mb="10px" />
      <Heading as="h3" size="md" isTruncated mb="10px">
        {`${title}, ${commonSquare} м`}
        <sup>2</sup>
      </Heading>
      <Price price={price} fontSize="lg" fontWeight="semibold" mb="10px" />
      <Location address={address} mb="20px" />
      <ButtonLink href={`/estates/${id}`}>Подробнее</ButtonLink>
    </Box>
  );
}
