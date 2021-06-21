import { CircularProgress } from "@chakra-ui/react";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import Header from "components/pages/estate/Header";
import Gallery from "components/pages/estate/Gallery";
import {
  ApartmentSummary,
  BuildingSummary,
} from "components/pages/estate/Summary";
import Description from "components/pages/estate/Description";
import { getApartmentAndBuildingProps } from "utils/helpers";
import { getEstate, getPaths } from "utils/cms/requests";
import { useRouter } from "next/router";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function EstatePage({ estate }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <CircularProgress isIndeterminate />;
  }

  const { title, address, createdAt, images, preview, description } = estate;

  const { apartment, building } = getApartmentAndBuildingProps(estate);

  return (
    <PageLayout headTitle={title}>
      <Section heading={title}>
        <Header address={address} createdAt={createdAt} />
      </Section>
      <Section heading="Галерея" isHiddenHeading>
        <Gallery title={title} images={images} preview={preview} />
      </Section>
      <Section heading="Описание квартиры">
        <ApartmentSummary {...apartment} />
      </Section>
      <Section heading="Описание дома">
        <BuildingSummary {...building} />
      </Section>
      <Section heading="Комментарий продавца">
        <Description description={description} />
      </Section>
    </PageLayout>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params;
  const estate = await getEstate(id.toString());
  return {
    props: { estate },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPaths();
  return { paths, fallback: true };
};
