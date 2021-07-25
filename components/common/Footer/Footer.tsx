import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { navItems } from "utils/constants";
import LinksList from "./LinksList";
import Logo from "./Logo";

export default function LargeWithLogoCentered() {
  return (
    <Box bg="gray.100" color="gray.700">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={8}
        py={10}
        px={[5, null, 10]}
      >
        {navItems.map((navItem) => (
          <LinksList key={navItem.label} {...navItem} />
        ))}
      </SimpleGrid>
      <Logo />
    </Box>
  );
}
