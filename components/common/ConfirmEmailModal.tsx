import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  email: string;
}

export default function AuthModal({ email, isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Авторизация</ModalHeader>
        <ModalBody>
          <VStack spacing="20px">
            <Text>Мы выслали вам письмо по адресу</Text>
            <Text fontWeight="bold">{email}</Text>
            <Text>
              Пожалуйста, проверьте ваш почтовый ящик и перейдите по ссылке для
              окончания авторизации
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
