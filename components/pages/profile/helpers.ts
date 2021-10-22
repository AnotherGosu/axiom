import useToastSubmit from "utils/hooks/useToastSubmit";

export async function editUserSubmit(data) {
  await useToastSubmit({
    loadingTitle: "Изменяем данные профиля...",
    successTitle: "Данные профиля успешно изменены",
    callback: () => {
      const form = new FormData();
      form.append("fields", JSON.stringify(data));
      return fetch("/api/cms/user", {
        method: "PATCH",
        body: form,
      });
    },
  });
}
