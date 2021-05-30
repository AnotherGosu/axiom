import { Flex, Spacer } from "@chakra-ui/react";
import Info from "./Info";

import Image from "next/image";
import { Estate } from "utils/types";

interface Props {
  estate: Estate;
}

const Card: React.FC<Props> = ({ estate }) => {
  const { id, images, title, address, price, tags } = estate;
  return (
    <Flex
      as="article"
      h="100%"
      flexDir="column"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        src={images[0]?.url || "/logo.svg"}
        alt={title}
        width={400}
        height={300}
        objectFit="cover"
      />
      <Info title={title} address={address} price={price} id={id} tags={tags} />
    </Flex>
  );
};

export default Card;
