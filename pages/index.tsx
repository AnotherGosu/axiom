import Head from "components/common/Head";
import Section from "components/common/Section";
import SearchBar from "components/common/SearchBar";
import Actuals from "components/main/Actuals";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { getEstates } from "utils/cms";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Main: React.FC<Props> = ({ estates }) => {
  return (
    <>
      <Head title="Axiom" />
      <Section headingTitle="Поиск жилья">
        <SearchBar />
      </Section>
      <Section headingTitle="Актуальные предложения">
        <Actuals estates={estates} />
      </Section>
    </>
  );
};

export default Main;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const estates = await getEstates();

  return {
    props: { estates },
    revalidate: 10,
  };
};
