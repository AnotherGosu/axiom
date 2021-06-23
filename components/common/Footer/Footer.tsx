import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import Link from "../Link";
import LinksList from "./LinksList";
import Credits from "./Credits";

const links = [
  { title: "Коммерческая недвижимость", href: "/" },
  { title: "Реклама", href: "/" },
  { title: "Новости", href: "/" },
  { title: "Форум", href: "/" },
  { title: "Помощь", href: "/" },
];

const buyLinks = [
  { title: "Квартиру", href: "/" },
  { title: "Дом", href: "/" },
  { title: "Участок", href: "/" },
  { title: "Гараж", href: "/" },
  { title: "Коммерческую недвижимость", href: "/" },
];

const rentLinks = [
  { title: "Квартиру", href: "/" },
  { title: "Дом", href: "/" },
  { title: "Участок", href: "/" },
  { title: "Гараж", href: "/" },
  { title: "Коммерческую недвижиость", href: "/" },
];

const newEstatesLinks = [
  { title: "С чистовой отделкой", href: "/" },
  { title: "С отделкой под ключ", href: "/" },
  { title: "Рядом с метро", href: "/" },
  { title: "Эконом-класс", href: "/" },
  { title: "Со скидками", href: "/" },
];

const Footer: React.FC = () => {
  return (
    <Grid
      as="footer"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gridColumnGap="50px"
      gridRowGap="30px"
      p={{ base: "20px", md: "50px" }}
      bg="blackAlpha.800"
      color="whiteAlpha.700"
      flexGrow={1}
    >
      <LinksList links={buyLinks} title="Купить" />
      <LinksList links={rentLinks} title="Арендовать" />
      <LinksList links={newEstatesLinks} title="Новостройки" />
      <GridItem>
        <Flex flexWrap="wrap" gridColumnGap="50px" gridRowGap="20px">
          {links.map(({ href, title }) => (
            <Link
              key={title}
              href={href}
              title={title}
              fontSize="lg"
              fontWeight="semibold"
              color="whiteAlpha.900"
              h="max-content"
            />
          ))}
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2, lg: 4 }}>
        <Credits />
      </GridItem>
    </Grid>
  );
};

export default Footer;
