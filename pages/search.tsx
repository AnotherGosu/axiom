import { Box } from "@chakra-ui/react";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import SearchForm from "components/pages/search/SearchForm";
import SearchResults from "components/pages/search/SearchResults";
import { useRef } from "react";
import ScrollIntoView from "utils/hooks/scrollIntoView";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { getSearchedEstates } from "utils/cms/estate/requests";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Search({ estates }: Props) {
  const searchResultsRef = useRef(null);
  const scrollToSearchResult = () => ScrollIntoView({ ref: searchResultsRef });

  return (
    <PageLayout headTitle="Поиск">
      <Section heading="Поиск жилья">
        <SearchForm scrollToSearchResult={scrollToSearchResult} />
      </Section>
      <Section heading="Результаты поиска" isHiddenHeading>
        <Box ref={searchResultsRef}>
          <SearchResults initialEstates={estates} />
        </Box>
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  const estates = await getSearchedEstates({
    query,
  });

  return {
    props: { estates },
  };
};
