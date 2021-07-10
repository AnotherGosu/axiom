import PageFallback from "components/common/PageFallback";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import Header from "components/pages/estate/Header";
import Gallery from "components/pages/estate/Gallery";
import Summary from "components/pages/estate/Summary";
import { getEstate, getPaths } from "utils/cms/estate/requests";
import { useRouter } from "next/router";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function EstatePage({ estate }: Props) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageFallback />;
  }

  const { title, address, createdAt, images, ...rest } = estate;

  return (
    <PageLayout headTitle={title}>
      <Section heading={title}>
        <Header address={address} createdAt={createdAt} />
      </Section>
      <Section heading="Галерея" isHiddenHeading>
        <Gallery title={title} images={images} />
      </Section>
      <Summary {...rest} />
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
