import { Box, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import ImagesPreviews from "./ImagesPreviews";
import { useState } from "react";

interface Props {
  title: string;
  images: Array<{ id: string; url: string }>;
}

export default function Gallery({ title, images }: Props) {
  const [currentImageIndex, setCurrentImageindex] = useState(0);

  const onNextImageClick = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageindex(nextIndex);
  };

  const onPrevImageClick = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageindex(prevIndex);
  };

  return (
    <Box>
      <Box overflow="hidden" pos="relative" borderRadius="md" borderWidth={1}>
        <IconButton
          aria-label="Предыдущее фото"
          icon={<ArrowLeftIcon />}
          onClick={onPrevImageClick}
          size="sm"
          pos="absolute"
          top="50%"
          left="10px"
          zIndex={10}
        />
        <Image
          src={images[currentImageIndex].url}
          alt={title}
          width={700}
          height={400}
          layout="responsive"
          objectFit="cover"
        />
        <IconButton
          aria-label="Следующее фото"
          icon={<ArrowRightIcon />}
          onClick={onNextImageClick}
          size="sm"
          pos="absolute"
          top="50%"
          right="10px"
          zIndex={10}
        />
      </Box>
      <ImagesPreviews
        images={images}
        title={title}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageindex}
      />
    </Box>
  );
}
