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
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gridGap="30px"
      {...rest}
    >
      {estates.map(({ preview, ...estate }) => (
        <Box
          key={estate.id}
          as="article"
          boxShadow="md"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={preview}
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