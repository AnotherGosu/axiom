import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import NLink from "next/link";

interface Props {
  id: string;
  title: string;
  url: string;
}

export default function ImageLink({ id, url, title }: Props) {
  return (
    <LinkBox>
      <NLink href={`/estates/${id}`} passHref>
        <LinkOverlay>
          <Image
            src={url}
            alt={title}
            width={400}
            height={250}
            layout="responsive"
            objectFit="cover"
          />
        </LinkOverlay>
      </NLink>
    </LinkBox>
  );
}
