import { createStandaloneToast, UseToastOptions } from "@chakra-ui/toast";
import { createEstate } from "utils/cms/requests";
import type { FormEstate } from "utils/types/estate";

const errorToast: UseToastOptions = {
  isClosable: true,
  duration: 5000,
  status: "error",
  title: "Возникла ошибка",
};

export async function addEstate(data: FormEstate, issuer: string) {
  const toast = createStandaloneToast();

  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Добавляем объект...",
  });

  try {
    const res = await createEstate(data, issuer);

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 10000,
      status: "success",
      title: "Объект успешно добавлен",
    });
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}

export async function editEstate(data: FormEstate, issuer: string) {
  const toast = createStandaloneToast();
  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Добавляем изменения в объект...",
  });

  try {
    const res = await createEstate(data, issuer);

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 10000,
      status: "success",
      title: "Объект успешно изменен",
    });
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}
