import { Center, Text, VStack, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Control, useController } from "react-hook-form";
import Sortable from "../Sortable";

interface Props {
  control: Control<any>;
}

const ImageUpload: React.FC<Props> = ({ control }) => {
  const {
    field: { onChange: setFiles, value: files },
  } = useController({ name: "images", control, defaultValue: [] });

  const [previews, setPreviews] = useState([]);
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: async (acceptedFiles) => {
        const previewFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        const newPreviews = previewFiles.map((file) => file.preview);
        setPreviews([...previews, ...newPreviews]);
        setFiles([...files, ...previewFiles]);
      },
    });

  const handleDelete = (deletedPreview: string) => {
    console.log;
    setFiles(files.filter((file) => file.preview !== deletedPreview));
    setPreviews(previews.filter((preview) => preview !== deletedPreview));
  };

  const setFormState = (items: string[]) => {
    const reorderedFiles = items.map((url) =>
      files.find((file) => file.preview === url)
    );
    setFiles(reorderedFiles);
  };

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <FormControl id="images" as={VStack} spacing="10px" align="flex-start">
      <FormLabel>Фотографии объекта</FormLabel>
      <Center
        {...getRootProps({
          w: "100%",
          h: "100px",
          borderWidth: 1,
          borderColor:
            isDragActive || isFileDialogActive
              ? "purple.500"
              : "blackAlpha.400",
          borderRadius: "md",
          borderStyle: "dashed",
          cursor: "pointer",
        })}
      >
        <input {...getInputProps()} />
        <Text textAlign="center">Нажмите или перетащите изображения</Text>
      </Center>
      <Sortable
        items={previews}
        setItems={setPreviews}
        setFormState={setFormState}
        handleDelete={handleDelete}
      />
    </FormControl>
  );
};

export default ImageUpload;
