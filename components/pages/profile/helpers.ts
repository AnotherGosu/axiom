import useToastSubmit from "utils/hooks/useToastSubmit";
import type { customUserProfileClient } from "utils/types/forms";

export async function updateProfile(data: customUserProfileClient) {
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
