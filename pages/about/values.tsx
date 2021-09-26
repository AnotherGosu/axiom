import { Heading, VStack, Box, Container } from "@chakra-ui/react";
import PageLayout from "components/layouts/WithHeaderAndFooter";
import Section from "components/common/Section";
import { values } from "utils/constants/text";

export default function Values() {
  return (
    <PageLayout headTitle="Ценности Axiom">
      <Section heading="Ценности Axiom">
        <VStack spacing={10} align="flex-start">
          {values.map(({ title, description }) => (
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
