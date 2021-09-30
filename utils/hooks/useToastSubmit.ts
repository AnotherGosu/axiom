import { createStandaloneToast } from "@chakra-ui/toast";
import Router from "next/router";

export default async function useToastSubmit({
  loadingTitle,
  successTitle,
  callback,
  redirect,
}: {
  loadingTitle: string;
  successTitle: string;
  callback: () => Promise<Response>;
  redirect?: string;
}) {
  const toast = createStandaloneToast();
  toast({
    isClosable: false,
    duration: null,
    status: "info",
    title: loadingTitle,
  });

  const res = await callback();
  toast.closeAll();

  if (res.ok) {
    toast({
      isClosable: true,
      duration: 5000,
      status: "success",
      title: successTitle,
    });
    redirect && Router.push(redirect);
  } else {
    toast({
      isClosable: true,
      duration: 5000,
      status: "error",
      title: "Возникла ошибка",
    });
  }
}
