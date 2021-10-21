import { Box, Center, Text, VStack, IconButton } from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon } from "@chakra-ui/icons";

export default function ImageInput(props: FormControlProps) {
  return (
    <FormControl {...props}>
      {({ ref, ...field }) => <ImageDropZone {...field} />}
    </FormControl>
  );
}

const ImageDropZone = ({ onChange, value }) => {
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const acceptedImage = acceptedFiles[0];
        const previewImage = Object.assign(acceptedImage, {
          url: URL.createObjectURL(acceptedImage),
        });
        onChange(previewImage);
      },
    });

  useEffect(
    () => () => {
      if (value) URL.revokeObjectURL(value.url);
    },
    [value]
  );

  return (
    <VStack spacing="10px" w="3xs" align="flex-start">
      <Center
        {...getRootProps({
          w: "100%",
          h: "200px",
          borderWidth: 1,
          borderColor:
            isDragActive || isFileDialogActive || value
              ? "purple.500"
              : "blackAlpha.400",
          borderRadius: "md",
          borderStyle: "dashed",
          cursor: "pointer",
          textAlign: "center",
        })}
      >
        <input {...getInputProps()} />
        {!value ? (
          <Text>Нажмите или перетащите изображение</Text>
        ) : (
          <Box
            w="100%"
            h="100%"
            bgImage={`url("${value?.url || value}")`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
          />
        )}
      </Center>
      {value && (
        <IconButton
          alignSelf="center"
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="delete plan"
          size="sm"
          onClick={() => onChange(null)}
        />
      )}
    </VStack>
  );
};
