import PageFallback from "components/common/PageFallback";
import EstateLayout from "components/layouts/EstateLayout";
import Section from "components/common/Section";
import Header from "components/pages/estates/Header";
import Gallery from "components/pages/estates/Gallery";
import Creator from "components/pages/estates/Creator";
import Apartment from "components/pages/estates/Apartment";
import Building from "components/pages/estates/Building";
import Description from "components/pages/estates/Description";
import YouTubeEmbed from "components/pages/estates/YouTubeEmbed";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("components/pages/estates/Map"), {
  ssr: false,
});
import getEstate from "utils/cms/queries/getEstate";
import getPaths from "utils/cms/queries/getPaths";
import { useRouter } from "next/router";

import { InferGetStaticPropsType, GetStaticPropsContext } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function EstatePage({ estate }: Props) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageFallback />;
  }

  const {
    title,
    commonSquare,
    address,
    created_at,
    images,
    plan,
    description,
    videoUrl,
    location,
    ...rest
  } = estate;

  const building = {
    builtYear: rest.builtYear,
    materialType: rest.materialType,
    ceilingType: rest.ceilingType,
    ceilingHeight: rest.ceilingHeight,
    plateType: rest.plateType,
    parkingType: rest.parkingType,
    isElevator: rest.isElevator,
    isServiceElevator: rest.isServiceElevator,
  };

  const apartment = {
    rooms: rest.rooms,
    commonSquare,
    livingSquare: rest.livingSquare,
    kitchenSquare: rest.kitchenSquare,
    floor: rest.floor,
    allFloors: rest.allFloors,
    balconies: rest.balconies,
    state: rest.state,
    apartmentStatus: rest.apartmentStatus,
    roomsType: rest.roomsType,
    windowsType: rest.windowsType,
    bathType: rest.bathType,
    isKitchenFurniture: rest.isKitchenFurniture,
    isRoomsFurniture: rest.isRoomsFurniture,
    isRemodeled: rest.isRemodeled,
  };

  return (
    <EstateLayout headTitle={title}>
      <Section heading="Заголовок" isHiddenHeading>
        <Header
          title={title}
          commonSquare={commonSquare}
          address={address}
          createdAt={created_at}
        />
      </Section>
      <Section heading="Галерея" isHiddenHeading>
        <Gallery title={title} images={images} />
      </Section>
      {/* <Section heading="Создатель объявления" isHiddenHeading>
        <Creator {...creator} />
      </Section> */}
      <Section heading="Описание дома">
        <Building {...building} />
      </Section>
      <Section heading="Описание квартиры">
        <Apartment {...apartment} />
      </Section>
      <Section heading="Расположение">
        <Map location={location} />
      </Section>
      {description && (
        <Section heading="Комментарий продавца">
          <Description description={description} />
        </Section>
      )}

      {videoUrl && (
        <Section heading="Видео обзор">
          <YouTubeEmbed videoUrl={videoUrl} />
        </Section>
      )}
    </EstateLayout>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params;
  const estate = await getEstate(id.toString());

  return {
    props: { estate },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const paths = await getPaths();
  return { paths, fallback: true };
};
