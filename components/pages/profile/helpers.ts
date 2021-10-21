import useToastSubmit from "utils/hooks/useToastSubmit";

export async function edtClientProfileSubmit(data) {
  await useToastSubmit({
    loadingTitle: "Изменяем данные профиля...",
    successTitle: "Данные профиля успешно изменены",
    callback: () => {
      const form = new FormData();
      form.append("fields", JSON.stringify(data));
      return fetch("/api/cms/client", {
        method: "PATCH",
        body: form,
      });
    },
  });
}
