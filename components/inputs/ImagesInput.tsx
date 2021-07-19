import { Center, Text, VStack } from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Sortable from "components/common/Sortable";

export default function ImagesInput(props: FormControlProps) {
  return (
    <FormControl defaultValue={[]} {...props}>
      {({ ref, ...field }) => <ImagesDropZone {...field} />}
    </FormControl>
  );
}

const ImagesDropZone = ({ value: files, onChange: setFiles }) => {
  const [urls, setUrls] = useState([]);

  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: async (acceptedFiles) => {
        const previewFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            url: URL.createObjectURL(file),
          })
        );
        const newPreviews = previewFiles.map((file) => file.url);
        setUrls([...urls, ...newPreviews]);
        setFiles([...files, ...previewFiles]);
      },
    });

  const handleDelete = (deletedUrl: string) => {
    setFiles(files.filter((file) => file.url !== deletedUrl));
    setUrls(urls.filter((url) => url !== deletedUrl));
  };

  const setFormState = (items: string[]) => {
    const reorderedFiles = items.map((url) =>
      files.find((file) => file.url === url)
    );
    setFiles(reorderedFiles);
  };

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.url));
    },
    [files]
  );

  useEffect(() => {
    const defaultUrls = files.map((file) => file.url);
    setUrls(defaultUrls);
  }, []);

  return (
    <VStack spacing="10px" align="flex-start" maxW="3xl">
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
        items={urls}
        setItems={setUrls}
        setFormState={setFormState}
        handleDelete={handleDelete}
      />
    </VStack>
  );
};
