import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import SearchBar from "components/common/SearchBar";
import SearchResults from "components/pages/search/SearchResults";
import Options from "components/pages/search/Options";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { getSearchedEstates } from "utils/cms/estate/requests";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Search({ estates }: Props) {
  return (
    <PageLayout headTitle="Поиск">
      <Section heading="Поиск жилья">
        <SearchBar />
      </Section>
      <Section heading="Дополнительные опции поиска" isHiddenHeading>
        <Options />
      </Section>
      <Section heading="Результаты поиска" isHiddenHeading>
        <SearchResults estates={estates} />
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const estates = await getSearchedEstates();

  return {
    props: { estates },
  };
};
