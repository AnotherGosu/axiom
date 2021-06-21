import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import SearchBar from "components/common/SearchBar";
import Actuals from "components/pages/main/Actuals";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { getActualEstates } from "utils/cms/requests";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Main({ estates }: Props) {
  return (
    <PageLayout headTitle="Главная">
      <Section heading="Поиск жилья">
        <SearchBar />
      </Section>
      <Section heading="Актуальные предложения">
        <Actuals estates={estates} />
      </Section>
    </PageLayout>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const estates = await getActualEstates();

  return {
    props: { estates },
    revalidate: 10,
  };
};
