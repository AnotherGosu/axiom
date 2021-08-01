import useToastSubmit from "utils/hooks/useToastSubmit";
import type {
  AddEstateFormClient,
  EditEstateFormClient,
} from "utils/types/forms";

export async function addEstateFormSubmit(data: AddEstateFormClient) {
  await useToastSubmit({
    loadingTitle: "Добавляем объект...",
    successTitle: "Объект успешно добавлен",
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

export async function editEstateFormSubmit(data: EditEstateFormClient) {
  await useToastSubmit({
    loadingTitle: "Добавляем изменения в объект...",
    successTitle: "Объект успешно изменен",
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
