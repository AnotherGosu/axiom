import { Flex, Text } from "@chakra-ui/react";
import Link from "../Link";

const Credits: React.FC = () => {
  return (
    <Flex flexWrap="wrap" gridColumnGap="50px" gridRowGap="20px">
      <Text>© 2021 Axiom</Text>
      <Link href="/" title="Политика конфиденциальности" />
      <Link href="/" title="Пользовательское соглашение" />
    </Flex>
  );
};

export default Credits;
