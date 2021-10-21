import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  title: string;
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ImagesPreviews({
  images,
  title,
  currentImageIndex,
  setCurrentImageIndex,
}: Props) {
  return (
    <Wrap spacing="10px" mt="10px">
      {images.map((url, idx) => (
        <WrapItem key={url}>
          <Box
            boxSize="60px"
            borderRadius="md"
            overflow="hidden"
            borderWidth={1}
            borderColor={
              idx === currentImageIndex ? "purple.500" : "purple.200"
            }
            cursor="pointer"
            _hover={{ borderColor: "purple.500" }}
            pos="relative"
            onMouseEnter={() => setCurrentImageIndex(idx)}
          >
            <Image
              src={url}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
}
