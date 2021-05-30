import Head from "components/common/Head";
import Section from "components/common/Section";
import SearchBar from "components/common/SearchBar";
import SearchResults from "components/search/SearchResults";
import Options from "components/search/Options";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { getEstates } from "utils/cms";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Search: React.FC<Props> = ({ estates }) => {
  return (
    <>
      <Head title="Axiom • Поиск" />
      <Section headingTitle="Поиск жилья">
        <SearchBar />
      </Section>
      <Section headingTitle="Дополнительные опции поиска" hiddenHeading>
        <Options />
      </Section>
      <Section headingTitle="Результаты поиска" hiddenHeading>
        <SearchResults estates={estates} />
      </Section>
    </>
  );
};

export default Search;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const estates = await getEstates();

  return {
    props: { estates },
  };
};
