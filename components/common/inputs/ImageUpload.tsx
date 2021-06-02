import {
  Box,
  Center,
  WrapItem,
  Text,
  VStack,
  Wrap,
  IconButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon } from "@chakra-ui/icons";
import { Control, useController } from "react-hook-form";

interface Props {
  control: Control<any>;
}

const ImageUpload: React.FC<Props> = ({ control }) => {
  const {
    field: { onChange },
  } = useController({ name: "images", control, defaultValue: [] });

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const previewFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        const newFiles = [...files, ...previewFiles];
        setFiles(newFiles);
        onChange(newFiles);
      },
    });

  const onDeleteButtonClick = (deletedFileName: string) => {
    setFiles(files.filter((file) => file.name !== deletedFileName));
  };

  const thumbs = files.map((file, idx) => (
    <WrapItem key={file.name + idx}>
      <VStack>
        <Box
          boxSize="150px"
          bgImage={`url("${file.preview}")`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          borderRadius="md"
          borderWidth={1}
        />
        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="delete image"
          size="sm"
          onClick={() => onDeleteButtonClick(file.name)}
        />
      </VStack>
    </WrapItem>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <FormControl
      id="images"
      as={VStack}
      spacing="10px"
      w="100%"
      maxW="800px"
      align="flex-start"
    >
      <FormLabel>Изображения</FormLabel>
      <Center
        {...getRootProps({
          w: "100%",
          h: "150px",
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
        <Box textAlign="center">
          <Text>Нажмите или перетащите изображения</Text>
          <Text>(первое изображение будет использовано для предпросмотра)</Text>
        </Box>
      </Center>
      <Wrap>{thumbs}</Wrap>
    </FormControl>
  );
};

export default ImageUpload;
