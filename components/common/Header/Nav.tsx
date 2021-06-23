import { Stack, StackProps } from "@chakra-ui/react";
import Link from "../Link";

interface Props extends StackProps {
  onClose?: () => void;
}

export default function Nav({ onClose, ...rest }: Props) {
  return (
    <Stack
      as="nav"
      direction="row"
      align="center"
      spacing="50px"
      fontSize="xl"
      {...rest}
    >
      {links.map(({ title, href }) => (
        <Link key={href} title={title} href={href} onClick={onClose} />
      ))}
    </Stack>
  );
}

const links = [
  { title: "Поиск", href: "/search" },
  { title: "Агентства", href: "/agencies" },
  { title: "Агенты", href: "/agents" },
  { title: "Ипотека", href: "/calculators" },
];
