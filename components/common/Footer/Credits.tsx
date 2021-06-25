import { Flex, Text } from "@chakra-ui/react";
import Link from "../Link";

const Credits: React.FC = () => {
  return (
    <Flex flexWrap="wrap" gridColumnGap="50px" gridRowGap="20px">
      <Text>© 2021 Axiom</Text>
      <Link href="/">Политика конфиденциальности</Link>
      <Link href="/">Пользовательское соглашение</Link>
    </Flex>
  );
};

export default Credits;
