import { Heading, VStack, Box, Container } from "@chakra-ui/react";
import PageLayout from "components/layouts/WithHeaderAndFooter";
import Section from "components/common/Section";
import { rules } from "utils/constants/text";

export default function Rules() {
  return (
    <PageLayout headTitle="Правила сообщества">
      <Section heading="Правила сообщества">
        <VStack spacing={10} align="flex-start">
          {rules.map(({ title, description }) => (
            <Box as="article" key={title}>
              <Heading size="md" mb={2}>
                {title}
              </Heading>
              <Container fontSize="lg" maxW="container.lg" textAlign="justify">
                {description}
              </Container>
            </Box>
          ))}
        </VStack>
      </Section>
    </PageLayout>
  );
}
