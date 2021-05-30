import { Box, List, ListItem } from "@chakra-ui/react";
import Link from "../Link";

interface Props {
  title: string;
  links: Array<{ title: string; href: string }>;
}

const AccordionList: React.FC<Props> = ({ title, links }) => {
  return (
    <Box>
      <Link
        href="/"
        title={title}
        fontSize="lg"
        fontWeight="semibold"
        color="whiteAlpha.900"
      />
      <List spacing="10px" mt="20px">
        {links.map(({ title, href }) => (
          <ListItem key={title}>
            <Link href={href} title={title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AccordionList;
