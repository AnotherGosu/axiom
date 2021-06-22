import { Flex, SimpleGrid, Box } from "@chakra-ui/react";
import Image from "next/image";
import ModalGallery from "./ModalGallery";
import { Estate } from "utils/types/estate";

interface Props {
  title: string;
  images: Estate["images"];
  preview: Estate["preview"];
}

export default function Gallery({ title, images, preview }: Props) {
  const previews = images.slice(1, 5);

  return (
    <Flex gridGap="2px">
      <Flex flexGrow={1} h={{ base: "300px", lg: "500px" }} pos="relative">
        <Image src={preview.url} alt={title} layout="fill" objectFit="cover" />
        {!!images.length && <ModalGallery images={images} />}
      </Flex>
      <Flex flexGrow={1} display={{ base: "none", md: "flex" }}>
        <SimpleGrid gridGap="2px" rows={2} columns={2} w="100%">
          {previews.map((image, idx) => (
            <Box key={idx} pos="relative">
              <Image
                src={image.url}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}