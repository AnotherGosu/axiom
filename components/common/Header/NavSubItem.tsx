import { Link, Stack, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { NavItem } from "utils/types/common";
import NextLink from "next/link";

export default function NavSubItem({ label, href }: NavItem) {
  return (
    <NextLink href={href} passHref>
      <Link
        role="group"
        display="block"
        w="100%"
        p={2}
        rounded="md"
        _hover={{ bg: "purple.50" }}
      >
        <Stack direction="row" align="center">
          <Box>
            <Text
              transition="all .3s ease"
              _groupHover={{ color: "purple.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition="all .3s ease"
            transform="translateX(-10px)"
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify="flex-end"
            align="center"
            flex={1}
          >
            <Icon color="purple.400" w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
}
