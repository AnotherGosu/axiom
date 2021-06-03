import Textarea from "components/common/inputs/Textarea";
import ImageUpload from "components/common/ImageUpload";
import PlanUpload from "components/common/inputs/PlanUpload";
import TextInput from "components/common/inputs/TextInput";
import { useFormContext } from "react-hook-form";

const MediaTab: React.FC = () => {
  const { control } = useFormContext();

  return (
    <>
      <Textarea
        id="description"
        label="Описание объекта"
        control={control}
        placeholder="Расскажите об ососбенностях объекта недвижимости"
        size="lg"
        h="150px"
      />
      <TextInput id="videoUrl" label="Ссылка на видео" control={control} />
      <PlanUpload control={control} />
      <ImageUpload control={control} />
    </>
  );
};

export default MediaTab;
