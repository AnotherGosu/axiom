import useToastSubmit from "utils/hooks/useToastSubmit";
import type { AddEstateForm, EditEstateForm } from "utils/types/forms";

export async function addEstateFormSubmit(data: AddEstateForm) {
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

export async function editEstateFormSubmit(data: EditEstateForm) {
  await useToastSubmit({
    loadingTitle: "Изменяем объект...",
    successTitle: "Объект успешно изменен",
    redirect: "/profile/my-estates",
    callback: () => {
      const { images, plan, ...fields } = data;
      const form = new FormData();

      const orderedImages = [];

      images.forEach((image) => {
        if (image instanceof File) {
          //new uplaoded image (file)
          orderedImages.push(image.name);
          form.append("images", image, image.name);
        } else {
          //old kept image (url string)
          orderedImages.push(image);
        }
      });

      if (plan instanceof File) {
        form.append("plan", plan, plan.name);
        form.append("fields", JSON.stringify({ ...fields, orderedImages }));
      } else {
        form.append(
          "fields",
          JSON.stringify({ ...fields, orderedImages, planUrl: plan })
        );
      }

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
