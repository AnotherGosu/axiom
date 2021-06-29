import { Center, Text, VStack, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Control, useController, useFormContext } from "react-hook-form";
import Sortable from "components/common/Sortable";

interface Props {
  label: string;
  name: string;
  control?: Control<any>;
}

export default function ImagesInput({ label, name, control }: Props) {
  const {
    field: { onChange: setFiles, value: files },
  } = useController({
    name,
    control: control ? control : useFormContext().control,
    defaultValue: [],
  });

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
    <FormControl
      id="images"
      as={VStack}
      spacing="10px"
      align="flex-start"
      maxW="3xl"
    >
      <FormLabel>{label}</FormLabel>
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
    </FormControl>
  );
}
