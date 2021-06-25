import Textarea from "components/inputs/Textarea";
import ImagesInput from "components/inputs/ImagesInput";
import ImageInput from "components/inputs/ImageInput";
import TextInput from "components/inputs/TextInput";
import { useFormContext } from "react-hook-form";

export default function MediaTab() {
  const { control } = useFormContext();

  return (
    <>
      <Textarea id="description" label="Описание объекта" maxW="3xl" />
      <TextInput id="videoUrl" label="Ссылка на видео" maxW="3xl" />
      <ImageInput label="План объекта" name="plan" />
      <ImagesInput label="Фотографии объекта" name="images" />
    </>
  );
}
