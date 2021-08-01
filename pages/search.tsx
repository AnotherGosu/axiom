import { Box } from "@chakra-ui/react";
import PageLayout from "components/layouts/WithHeaderAndFooter";
import Section from "components/common/Section";
import SearchForm from "components/pages/search/SearchForm";
import SearchResults from "components/pages/search/SearchResults";
import { useRef } from "react";
import ScrollIntoView from "utils/hooks/scrollIntoView";
import { EstateType } from "utils/localizations";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import getSearchedEstates from "utils/cms/queries/getSearchedEstates";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Search({ estates, estateType }: Props) {
  const searchResultsRef = useRef(null);
  const scrollToSearchResult = () => ScrollIntoView({ ref: searchResultsRef });

  const searchHeading = EstateType[estateType.toString()].toLowerCase();

  return (
    <PageLayout headTitle="Поиск">
      <Section heading={`Найти ${searchHeading}`}>
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
  const { estateType } = query;

  return {
    props: { estates, estateType },
  };
};
