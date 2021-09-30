import useToastSubmit from "utils/hooks/useToastSubmit";
import type {
  CreateEstateFormClient,
  UpdateEstateFormClient,
} from "utils/types/forms";

export async function createEstateFormSubmit(data: CreateEstateFormClient) {
  await useToastSubmit({
    loadingTitle: "Создаем объект...",
    successTitle: "Объект успешно создан",
    redirect: "/profile/my-estates",
    callback: () => {
      const { images, plan, ...fields } = data;
      const form = new FormData();

      form.append("fields", JSON.stringify(fields));
      images.forEach((image) => form.append("images", image, image.name));
      if (plan) form.append("plan", plan, plan.name);

      return fetch("/api/cms/estate", {
        method: "POST",
        body: form,
      });
    },
  });
}

export async function updateEstateFormSubmit(data: UpdateEstateFormClient) {
  await useToastSubmit({
    loadingTitle: "Обновляем объект...",
    successTitle: "Объект успешно обновлен",
    redirect: "/profile/my-estates",
    callback: () => {
      const { images, plan, ...fields } = data;
      const orderedImages = [];
      const form = new FormData();

      images.forEach((img) => {
        if (img instanceof File) {
          orderedImages.push({ name: img.name });
          form.append("images", img, img.name);
        } else {
          orderedImages.push({ id: img.id });
        }
      });
      form.append("orderedImages", JSON.stringify(orderedImages));
      if (plan instanceof File) form.append("plan", plan, plan.name);
      form.append("fields", JSON.stringify({ ...fields, orderedImages }));

      return fetch("/api/cms/estate", { method: "PATCH", body: form });
    },
  });
}

export async function deleteEstate(estateId: string) {
  await useToastSubmit({
    loadingTitle: "Удаляем объект...",
    successTitle: "Объект успешно удален",
    callback: () => {
      const form = new FormData();
      form.append("estateId", estateId);

      return fetch("/api/cms/estate", {
        method: "DELETE",
        body: form,
      });
    },
  });
}
