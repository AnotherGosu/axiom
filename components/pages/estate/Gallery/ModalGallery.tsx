import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Estate } from "utils/types/estate";

interface Props {
  images: Estate["images"];
}

export default function ModalGallery({ images }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImage, setCurrentImage] = useState(0);

  const onNextImageClick = () => {
    const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  };

  const onPrevImageClick = () => {
    const prevImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(prevImage);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AiFillCamera />}
        pos="absolute"
        bottom="25px"
        left="25px"
        colorScheme="blackAlpha"
      >
        Смотреть все фото
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: "15px", md: "50px" }}>
          <ModalHeader>Галерея</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box pos="relative" w="100%" minH="70vh">
              <Image
                src={images[currentImage].url}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center" gridColumnGap="20px">
            <IconButton
              variant="outline"
              aria-label="Предыдущее фото"
              icon={<ArrowLeftIcon />}
              onClick={onPrevImageClick}
            />
            <IconButton
              variant="outline"
              aria-label="Следующее фото"
              icon={<ArrowRightIcon />}
              onClick={onNextImageClick}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
