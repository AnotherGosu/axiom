import { Box, VStack } from "@chakra-ui/react";
import { Control } from "react-hook-form";
import Textarea from "components/common/inputs/Textarea";
import ImageUpload from "./ImageUpload";

interface Props {
  control: Control<any>;
}

const MediaTab: React.FC<Props> = ({ control }) => {
  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        <Textarea
          id="description"
          label="Описание объекта"
          control={control}
          placeholder="Расскажите об ососбенностях объекта недвижимости"
          size="lg"
          h="200px"
        />
        <ImageUpload control={control} />
      </VStack>
    </Box>
  );
};

export default MediaTab;
