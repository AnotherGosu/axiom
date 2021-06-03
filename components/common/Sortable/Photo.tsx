import { Box, VStack, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { forwardRef } from "react";

interface Props {
  handleDelete: (deletedPreview: string) => void;
  preview: string;
  index: number;
  faded?: any;
  style?: any;
}

const Photo = forwardRef<HTMLDivElement, Props>(
  ({ preview, handleDelete, index, faded, style, ...props }, ref) => {
    return (
      <VStack>
        <Box
          opacity={faded ? "0.2" : 1}
          transformOrigin="0 0"
          boxSize="150px"
          bgImage={`url("${preview}")`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          borderRadius="md"
          borderWidth={1}
          style={style}
          ref={ref}
          {...props}
        />
        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          aria-label="delete image"
          size="sm"
          onClick={() => handleDelete(preview)}
        />
      </VStack>
    );
  }
);

export default Photo;
