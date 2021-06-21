import { Heading, LinkOverlay } from "@chakra-ui/react";
import NLink from "next/link";

interface Props {
  id: string;
  title: string;
  commonSquare: number;
}

export default function LinkTitle({ id, title, commonSquare }: Props) {
  return (
    <Heading as="h3" fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>
      <NLink href={`/estates/${id}`} passHref>
        <LinkOverlay>
          {`${title}, ${commonSquare} м`}
          <sup>2</sup>
        </LinkOverlay>
      </NLink>
    </Heading>
  );
}
