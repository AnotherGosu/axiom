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
  control: Control<any>;
}

const PlanUpload: React.FC<Props> = ({ control }) => {
  const {
    field: { onChange },
  } = useController({ name: "plan", control, defaultValue: null });

  const [plan, setPlan] = useState(null);
  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const acceptedPlan = acceptedFiles[0];
        const previewPlan = Object.assign(acceptedPlan, {
          preview: URL.createObjectURL(acceptedPlan),
        });
        setPlan(previewPlan);
        onChange(previewPlan);
      },
    });

  useEffect(
    () => () => {
      if (plan) URL.revokeObjectURL(plan.preview);
    },
    [plan]
  );

  return (
    <FormControl
      id="images"
      as={VStack}
      spacing="10px"
      w="3xs"
      align="flex-start"
    >
      <FormLabel>План объекта</FormLabel>
      <Center
        {...getRootProps({
          w: "100%",
          h: "200px",
          borderWidth: 1,
          borderColor:
            isDragActive || isFileDialogActive || plan
              ? "purple.500"
              : "blackAlpha.400",
          borderRadius: "md",
          borderStyle: "dashed",
          cursor: "pointer",
          textAlign: "center",
        })}
      >
        <input {...getInputProps()} />
        {!plan ? (
          <Text>Нажмите или перетащите изображение</Text>
        ) : (
          <Box
            w="100%"
            h="100%"
            bgImage={`url("${plan.preview}")`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
          />
        )}
      </Center>
      {plan && (
        <IconButton
          alignSelf="center"
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="delete plan"
          size="sm"
          onClick={() => setPlan(null)}
        />
      )}
    </FormControl>
  );
};

export default PlanUpload;
