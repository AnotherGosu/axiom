import PageLayout from "components/layouts/WithHeaderAndFooter";
import Section from "components/common/Section";
import ActualEstatesList from "components/pages/main/ActualEstates";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import getEstatesCards from "utils/cms/queries/getEstatesCards";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Main({ estates }: Props) {
  return (
    <PageLayout headTitle="Главная">
      <Section heading="Актуальные предложения">
        <ActualEstatesList estates={estates} />
      </Section>
    </PageLayout>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const estates = await getEstatesCards({});

  return {
    props: { estates },
    revalidate: 10,
  };
};
