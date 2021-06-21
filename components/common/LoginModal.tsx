import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Magic } from "magic-sdk";

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inputRef = useRef(null);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
        locale: "ru",
      });
      const didToken = await magic.auth.loginWithMagicLink({
        email,
        showUI: false,
      });

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
      });

      if (res.status === 200) {
        onClose();
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      toast({
        title: "Ошибка авторизации",
        description: "Проверьте данные и попробуйте еще раз",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={onOpen}>Войти</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        initialFocusRef={inputRef}
        closeOnEsc={!isLoading}
        closeOnOverlayClick={!isLoading}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Авторизация</ModalHeader>
          <ModalCloseButton isDisabled={isLoading} />
          <ModalBody>
            <FormControl id="email">
              <FormLabel>Электронная почта</FormLabel>
              <Input
                ref={inputRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={!email}
            >
              Войти
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
