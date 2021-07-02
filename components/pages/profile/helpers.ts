import { createStandaloneToast, UseToastOptions } from "@chakra-ui/toast";
import { editUserProfile } from "utils/cms/user/requests";
import Router from "next/router";
import type { User } from "utils/types/user";

const errorToast: UseToastOptions = {
  isClosable: true,
  duration: 5000,
  status: "error",
  title: "Возникла ошибка",
};

export async function handleEditProfile(data: User) {
  const toast = createStandaloneToast();

  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Добавляем изменения...",
  });

  try {
    await editUserProfile(data);

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 5000,
      status: "success",
      title: "Профиль успешно изменен",
    });
    Router.reload();
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}
