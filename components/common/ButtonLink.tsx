import { Button, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props extends ButtonProps {
  href: string;
}

export default function IconButtonLink({ children, href, ...rest }: Props) {
  const { push, prefetch } = useRouter();

  useEffect(() => {
    prefetch(href);
  }, []);

  return (
    <Button onClick={() => push(href)} {...rest}>
      {children}
    </Button>
  );
}
