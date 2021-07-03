import {
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
        colorScheme="blackAlpha"
      >
        Все изображения
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: "15px", md: "50px" }}>
          <ModalHeader>Галерея</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={images[currentImage].url}
              width={400}
              height={300}
              layout="responsive"
              objectFit="contain"
            />
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
