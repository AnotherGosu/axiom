import { Control, UseFormWatch } from "react-hook-form";
import Textarea from "components/common/inputs/Textarea";
import ImageUpload from "./ImageUpload";

interface Props {
  control: Control<any>;
  watch?: UseFormWatch<any>;
}

const MediaTab: React.FC<Props> = ({ control }) => {
  return (
    <>
      <Textarea
        id="description"
        label="Описание объекта"
        control={control}
        placeholder="Расскажите об ососбенностях объекта недвижимости"
        size="lg"
        h="200px"
      />
      <ImageUpload control={control} />
    </>
  );
};

export default MediaTab;
