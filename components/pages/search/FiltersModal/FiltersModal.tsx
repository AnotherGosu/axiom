import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Filters from "./Filters";
import { ImFilter } from "react-icons/im";

export default function FiltersModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <>
      <Button
        size={size}
        variant="outline"
        w={["100%", null, "max-content"]}
        onClick={onOpen}
        leftIcon={<ImFilter />}
      >
        Ещё фильтры
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="6xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={{ base: "15px", md: "50px" }}>
          <ModalHeader>
            <Heading fontSize={["xl", "2xl", "3xl"]}>
              Фильтровать объекты
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py="25px">
            <Filters />
          </ModalBody>
          <ModalFooter
            justifyContent="space-between"
            borderTopWidth={1}
            flexDir={["column", "row"]}
            gridColumnGap="25px"
            gridRowGap="15px"
          >
            <Button w={["full", "max-content"]}>Показать 1234 варианта</Button>
            <Button w={["full", "max-content"]} variant="outline">
              Очистить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
