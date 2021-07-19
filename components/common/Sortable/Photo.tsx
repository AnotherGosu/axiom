import { Box, VStack, IconButton, Badge, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { DeleteIcon } from "@chakra-ui/icons";
import { forwardRef } from "react";

interface Props {
  handleDelete: (deletedPreview: string) => void;
  url: string;
  index: number;
  faded?: any;
  style?: any;
}

const Photo = forwardRef<HTMLDivElement, Props>(
  ({ url, handleDelete, index, style, ...props }, ref) => {
    return (
      <VStack>
        <Box
          boxSize={["125px", "150px"]}
          borderRadius="md"
          borderWidth={1}
          borderColor="purple.200"
          pos="relative"
          style={style}
          ref={ref}
          {...props}
        >
          <Image src={url} layout="fill" objectFit="contain" />
        </Box>
        <Flex w="100%">
          {index === 0 && (
            <Badge colorScheme="purple" fontSize="sm" variant="subtle">
              Главное
            </Badge>
          )}
          <Spacer />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            variant="outline"
            aria-label="delete image"
            size="xs"
            onClick={() => handleDelete(url)}
          />
        </Flex>
      </VStack>
    );
  }
);

export default Photo;
