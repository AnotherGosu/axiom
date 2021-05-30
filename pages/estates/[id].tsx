import { Grid, GridItem } from "@chakra-ui/react";
import Head from "components/common/Head";
import Section from "components/common/Section";
import Header from "components/estate/Header";
import Gallery from "components/estate/Gallery";
import { ApartmentSummary, BuildingSummary } from "components/estate/Summary";
import Description from "components/estate/Description";
import { getEstate, getPaths } from "utils/cms";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const EstatePage: React.FC<Props> = ({ estate }) => {
  return (
    <>
      <Head title={`Kvarum • ${estate.title}`} />
      <Section headingTitle={estate.title}>
        <Header address={estate.address} postDate={estate.publishedAt} />
      </Section>
      <Section headingTitle="Галерея" hiddenHeading>
        <Gallery title={estate.title} images={estate.images} />
      </Section>
      <Grid
        gridTemplateColumns={{ base: "1fr", xl: "1fr max-content" }}
        gridTemplateAreas={{
          base: `"aside" "details" "building"`,
          md: `"details aside" "building aside"`,
        }}
        gridGap="50px"
      >
        <GridItem gridArea="details">
          <Section headingTitle="Описание квартиры">
            <ApartmentSummary apartment={estate.apartment} />
          </Section>
        </GridItem>
        <GridItem gridArea="building">
          <Section headingTitle="Описание дома">
            <BuildingSummary building={estate.building} />
          </Section>
        </GridItem>
        <GridItem gridArea="aside">
          {/* <Section headingTitle="Дополнительная информация" hiddenHeading>
            <Aside
              price={estate.price}
              commonSquare={estate.apartment.commonSquare}
              agent={agent}
              agencyName={agency.name}
            />
          </Section> */}
        </GridItem>
      </Grid>
      <Section headingTitle="Комментарий продавца">
        <Description description={estate.description} />
      </Section>
    </>
  );
};

export default EstatePage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params;
  const estate = await getEstate(id.toString());
  return {
    props: { estate },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPaths();
  return { paths, fallback: false };
};
