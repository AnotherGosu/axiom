import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  createdAt: string;
}

export default function PublicationDate({ createdAt, ...rest }: Props) {
  const publicationDate = new Date(createdAt).toLocaleDateString("ru");
  return <Text {...rest}>{publicationDate}</Text>;
}
