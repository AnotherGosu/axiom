import { createStandaloneToast, UseToastOptions } from "@chakra-ui/toast";
import { addEstate, editEstate, deleteEstate } from "utils/cms/estate/requests";
import Router from "next/router";
import type { AddEstateForm, EditEstateForm } from "utils/types/forms";
import { Estate } from "utils/types/estate";

const errorToast: UseToastOptions = {
  isClosable: true,
  duration: 5000,
  status: "error",
  title: "Возникла ошибка",
};

export async function handleAddEstate({
  data,
  issuer,
}: {
  data: AddEstateForm;
  issuer: string;
}) {
  const toast = createStandaloneToast();

  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Добавляем объект...",
  });

  try {
    await addEstate({ data, issuer });

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 5000,
      status: "success",
      title: "Объект успешно добавлен",
    });
    Router.push("/profile/my-estates");
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}

export async function handleEditEstate({
  data,
  existingImages,
  existingPlan,
}: {
  data: EditEstateForm;
  existingImages: Estate["images"];
  existingPlan: Estate["plan"];
}) {
  const toast = createStandaloneToast();
  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Добавляем изменения в объект...",
  });

  try {
    await editEstate({
      data,
      existingImages,
      existingPlan,
    });

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 5000,
      status: "success",
      title: "Объект успешно изменен",
    });
    Router.push("/profile/my-estates");
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}

export async function handleDeleteEstate(estateId: string) {
  const toast = createStandaloneToast();
  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: "Удаляем объект...",
  });

  try {
    await deleteEstate(estateId);

    toast.closeAll();
    toast({
      isClosable: true,
      duration: 5000,
      status: "success",
      title: "Объект успешно удален",
    });
  } catch (err) {
    console.error(err);
    toast.closeAll();
    toast(errorToast);
  }
}
