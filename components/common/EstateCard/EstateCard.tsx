import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import ImageLink from "./ImageLink";
import CardContent from "./CardContent";
import { EstateCard as EstateCardProps } from "utils/types/estate";

interface Props extends EstateCardProps {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export default function EstateCard({
  images,
  id,
  isLoading,
  children,
  ...rest
}: Props) {
  return (
    <Box
      as="article"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Skeleton speed={1.2} isLoaded={!isLoading}>
        <ImageLink id={id} url={images[0]} title={rest.title} />
      </Skeleton>
      <SkeletonText
        speed={1.2}
        isLoaded={!isLoading}
        p={isLoading ? "20px" : 0}
        noOfLines={4}
        spacing="4"
      >
        <CardContent id={id} images={images} {...rest}>
          {children}
        </CardContent>
      </SkeletonText>
    </Box>
  );
}
