import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";
import Router from "next/router";
import { Magic } from "magic-sdk";
import { getUserByEmail, createUser } from "utils/cms/requests";
import type { CreateUserFormFields } from "utils/types/user";

const errorToast: UseToastOptions = {
  title: "Ошибка авторизации",
  description: "Проверьте данные и попробуйте еще раз",
  status: "error",
  duration: 3000,
  isClosable: true,
};

async function createSession(email: string) {
  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
    locale: "ru",
  });

  const didToken = await magic.auth.loginWithMagicLink({
    email,
  });

  const res = await fetch("/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${didToken}`,
    },
  });

  return res;
}

export async function signUpUser(data: CreateUserFormFields) {
  const toast = createStandaloneToast();
  try {
    const user = await getUserByEmail(data.email);
    if (user) {
      return toast({
        ...errorToast,
        description: "Данная почта уже зарегистрирована",
      });
    }

    const res = await createSession(data.email);

    if (res.ok) {
      const { issuer } = await res.json();
      await createUser({ ...data, issuer });
      Router.push("/");
    } else {
      throw new Error(await res.text());
    }
  } catch (error) {
    console.error(error);
    toast(errorToast);
  }
}

export async function signInUser(data: CreateUserFormFields) {
  const toast = createStandaloneToast();
  try {
    const user = await getUserByEmail(data.email);
    if (!user) {
      return toast({
        ...errorToast,
        description: "Данная почта не зарегистрировна",
      });
    }

    const res = await createSession(data.email);

    if (res.ok) {
      Router.push("/");
    } else {
      throw new Error(await res.text());
    }
  } catch (error) {
    console.error(error);
    toast(errorToast);
  }
}

export async function signOutUser() {
  try {
    const res = await fetch("/api/sign-out");
    const data = await res.json();

    if (res.ok) {
      Router.reload();
    } else {
      console.log(data.error);
    }
  } catch (err) {
    console.log(err);
  }
}
