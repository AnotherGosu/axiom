import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import ModalGallery from "./ModalGallery";
import { Estate } from "utils/types/estate";

interface Props {
  title: string;
  images: Estate["images"];
}

export default function Gallery({ title, images }: Props) {
  const imagesNumber = useBreakpointValue({ base: 1, lg: 3 });
  return (
    <Box pos="relative">
      <Grid
        gridGap="2px"
        gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr 1fr" }}
      >
        {images.slice(0, imagesNumber).map((img) => (
          <Image
            key={img.url}
            src={img.url}
            alt={title}
            width={450}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </Grid>
      <Box pos="absolute" bottom="10px" left="10px">
        <ModalGallery images={images} />
      </Box>
    </Box>
  );
}
