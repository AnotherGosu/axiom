import Textarea from "components/inputs/Textarea";
import ImagesInput from "components/inputs/ImagesInput";
import ImageInput from "components/inputs/ImageInput";
import TextInput from "components/inputs/TextInput";

export default function MediaTab() {
  return (
    <>
      <Textarea id="description" label="Описание объекта" maxW="3xl" />
      <TextInput id="videoUrl" label="Ссылка на видео" maxW="3xl" />
      <ImageInput id="plan" label="План объекта" />
      <ImagesInput id="images" label="Фотографии объекта" />
    </>
  );
}
