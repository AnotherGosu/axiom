import { Flex, VStack, Heading, Button, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import EstateCardMenu from "./EstateCardMenu";
import Price from "components/common/Price";
import Location from "components/common/Location";
import PublicationDate from "components/common/PublicationDate";
import { EstateType } from "utils/localizations";
import { useRouter } from "next/router";
import type { UserEstate } from "utils/types/estate";

export default function EstateCard({
  id,
  preview,
  title,
  address,
  price,
  createdAt,
}: UserEstate) {
  const { push } = useRouter();
  return (
    <Flex
      p="20px"
      borderRadius="md"
      justifyContent="space-between"
      borderWidth={1}
      w="100%"
      maxW="2xl"
    >
      <Image
        src={preview.url}
        alt={title}
        width="200px"
        height="150px"
        layout="fixed"
      />
      <VStack align="flex-start" spacing="10px">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Location maxW="xs" address={address} />
        <Flex w="100%" align="flex-end">
          <VStack spacing="10px">
            <Price fontWeight="bold" price={price} />
            <PublicationDate createdAt={createdAt} />
          </VStack>
          <Spacer />
          <Button onClick={() => push(`/estates/${id}`)}>Просмотр</Button>
        </Flex>
      </VStack>

      <EstateCardMenu />
    </Flex>
  );
}
