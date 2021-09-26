import useToastSubmit from "utils/hooks/useToastSubmit";
import type { ClientProfileClient } from "utils/types/forms";

export async function updateProfile(data: ClientProfileClient) {
  await useToastSubmit({
    loadingTitle: "Обновляем данные профиля...",
    successTitle: "Данные профиля успешно обновлены",
    callback: () => {
      const form = new FormData();
      form.append("fields", JSON.stringify(data));
      return fetch("/api/cms/customUser", {
        method: "PATCH",
        body: form,
      });
    },
  });
}
