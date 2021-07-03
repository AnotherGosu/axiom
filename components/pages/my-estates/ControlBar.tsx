import { Wrap, WrapItem, Button } from "@chakra-ui/react";
import IconButtonLink from "components/common/ButtonLink";
import { AddIcon } from "@chakra-ui/icons";

export default function ControlBar() {
  return (
    <Wrap mb="20px" spacing="20px">
      <WrapItem>
        <Button variant="outline">Сортировать</Button>
      </WrapItem>
      <WrapItem>
        <IconButtonLink
          href="/profile/add-estate"
          aria-label="Добавить новый объект"
          leftIcon={<AddIcon />}
        >
          Добавить
        </IconButtonLink>
      </WrapItem>
    </Wrap>
  );
}
