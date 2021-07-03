import { Box, Grid, GridProps } from "@chakra-ui/react";
import Image from "next/image";
import type { EstateCard as EstateCardProps } from "utils/types/estate";

interface Props extends GridProps {
  estates: EstateCardProps[];
  CardContent: React.FC<EstateCardProps>;
}

export default function EstateCardsList({
  estates,
  CardContent,
  ...rest
}: Props) {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 450px))"
      gridGap="30px"
      {...rest}
    >
      {estates.map(({ images, ...estate }) => (
        <Box
          key={estate.id}
          as="article"
          boxShadow="md"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={images[0].url}
            alt={estate.title}
            width={400}
            height={250}
            layout="responsive"
            objectFit="cover"
          />
          <CardContent {...estate} />
        </Box>
      ))}
    </Grid>
  );
}
