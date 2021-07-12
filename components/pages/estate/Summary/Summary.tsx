import { Grid, SimpleGrid } from "@chakra-ui/react";
import Section from "components/common/Section";
import Apartment from "./Apartment";
import Building from "./Building";
import Description from "./Description";
import YouTubeEmbed from "./YouTubeEmbed";
import type { Estate } from "utils/types/estate";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Summary({
  apartment,
  building,
  description,
  videoUrl,
  location,
}: Estate) {
  return (
    <Grid
      templateColumns={["1fr", null, "repeat(auto-fit, minmax(600px, 1fr))"]}
      gridGap="50px"
    >
      <Section heading="Описание квартиры">
        <SimpleGrid columns={[1, 2]} gridRowGap="10px" gridColumnGap="30px">
          <Apartment {...apartment} />
        </SimpleGrid>
      </Section>
      <Section heading="Описание дома">
        <SimpleGrid columns={[1, 2]} gridRowGap="10px" gridColumnGap="30px">
          <Building {...building} />
        </SimpleGrid>
      </Section>
      <Section heading="Комментарий продавца">
        <Description description={description} />
      </Section>
      {videoUrl && (
        <Section heading="Видео обзор">
          <YouTubeEmbed videoUrl={videoUrl} />
        </Section>
      )}
      <Section heading="Расположение">
        <Map location={location} />
      </Section>
    </Grid>
  );
}
