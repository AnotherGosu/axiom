import {
  Box,
  Center,
  Text,
  VStack,
  IconButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon } from "@chakra-ui/icons";
import { Control, useController } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: Control<any>;
}

export default function ImageInput({ label, name, control }: Props) {
  const {
    field: { onChange },
  } = useController({ name, control, defaultValue: null });

  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const acceptedImage = acceptedFiles[0];
        const previewImage = Object.assign(acceptedImage, {
          preview: URL.createObjectURL(acceptedImage),
        });
        setImage(previewImage);
        onChange(previewImage);
      },
    });

  useEffect(
    () => () => {
      if (image) URL.revokeObjectURL(image.preview);
    },
    [image]
  );

  return (
    <FormControl
      id="images"
      as={VStack}
      spacing="10px"
      w="3xs"
      align="flex-start"
    >
      <FormLabel>{label}</FormLabel>
      <Center
        {...getRootProps({
          w: "100%",
          h: "200px",
          borderWidth: 1,
          borderColor:
            isDragActive || isFileDialogActive || image
              ? "purple.500"
              : "blackAlpha.400",
          borderRadius: "md",
          borderStyle: "dashed",
          cursor: "pointer",
          textAlign: "center",
        })}
      >
        <input {...getInputProps()} />
        {!image ? (
          <Text>Нажмите или перетащите изображение</Text>
        ) : (
          <Box
            w="100%"
            h="100%"
            bgImage={`url("${image.preview}")`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
          />
        )}
      </Center>
      {image && (
        <IconButton
          alignSelf="center"
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="delete plan"
          size="sm"
          onClick={() => setImage(null)}
        />
      )}
    </FormControl>
  );
}
