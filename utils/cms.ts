import { GraphQLClient, gql } from "graphql-request";
import { CreateEstateFormFields, RawEstate } from "./types";
import { structureEstate } from "./helpers";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export async function uploadAsset(file) {
  const form = new FormData();
  form.append("fileUpload", file);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}`,
    },
    body: form,
  });

  return res.json();
}

export async function createEstate(data: CreateEstateFormFields) {
  const { images, plan, ...rest } = data;

  const uploadedImages = await Promise.all(
    images.map((image) => uploadAsset(image))
  );
  const imagesAssets = uploadedImages.map((img) => ({ id: img.id }));

  let planAsset = null;
  if (plan) {
    const uploadedPlan = await uploadAsset(plan);
    planAsset = { id: uploadedPlan.id };
  }

  const CREATE_ESTATE = gql`
    mutation createEstate(
      $images: [AssetWhereUniqueInput!]
      $plan: AssetWhereUniqueInput
      $videoUrl: String
      $description: String
      $address: String
      $location: LocationInput
      $price: Float
      $dealType: String
      $rentType: String
      $estateType: String
      $apartmentType: String
      $agentName: String
      $agentPhone: String
      $agencyServicePrice: Float
      $rooms: String
      $commonSquare: Float
      $livingSquare: Float
      $kitchenSquare: Float
      $floor: Int
      $allFloors: Int
      $balconies: Int
      $loggias: Int
      $roomsType: String
      $windowsType: String
      $state: String
      $plateType: String
      $bathType: String
      $isRemodeled: Boolean
      $isRoomsFurniture: Boolean
      $isKitchenFurniture: Boolean
      $builtYear: Int
      $buildingType: String
      $materialType: String
      $parkingType: String
      $isElevator: Boolean
      $isServiceElevator: Boolean
      $isRestrictedArea: Boolean
      $isBargaining: Boolean
      $isMortgage: Boolean
    ) {
      createEstate(
        data: {
          images: { connect: $images }
          plan: { connect: $plan }
          videoUrl: $videoUrl
          description: $description
          address: $address
          location: $location
          price: $price
          dealType: $dealType
          rentType: $rentType
          estateType: $estateType
          apartmentType: $apartmentType
          agentName: $agentName
          agentPhone: $agentPhone
          agencyServicePrice: $agencyServicePrice
          rooms: $rooms
          commonSquare: $commonSquare
          livingSquare: $livingSquare
          kitchenSquare: $kitchenSquare
          floor: $floor
          allFloors: $allFloors
          balconies: $balconies
          loggias: $loggias
          roomsType: $roomsType
          windowsType: $windowsType
          state: $state
          plateType: $plateType
          bathType: $bathType
          isRemodeled: $isRemodeled
          isRoomsFurniture: $isRoomsFurniture
          isKitchenFurniture: $isKitchenFurniture
          builtYear: $builtYear
          buildingType: $buildingType
          materialType: $materialType
          parkingType: $parkingType
          isElevator: $isElevator
          isServiceElevator: $isServiceElevator
          isRestrictedArea: $isRestrictedArea
          isBargaining: $isBargaining
          isMortgage: $isMortgage
        }
      ) {
        id
      }
    }
  `;

  return client.request(
    CREATE_ESTATE,
    { ...rest, images: imagesAssets, plan: planAsset },
    { authorization: `Bearer ${process.env.NEXT_PUBLIC_MUTATION_TOKEN}` }
  );
}

export async function getEstates() {
  const GET_ESTATES = gql`
    {
      estates {
        id
        createdAt
        images {
          url
        }
        plan {
          id
        }
        videoUrl
        description
        address
        location {
          latitude
          longitude
        }
        price
        dealType
        rentType
        estateType
        apartmentType
        agentName
        agentPhone
        agencyServicePrice
        rooms
        commonSquare
        livingSquare
        kitchenSquare
        floor
        allFloors
        balconies
        loggias
        roomsType
        windowsType
        state
        plateType
        bathType
        isRemodeled
        isRoomsFurniture
        isKitchenFurniture
        builtYear
        buildingType
        materialType
        parkingType
        isElevator
        isServiceElevator
        isRestrictedArea
        isBargaining
        isMortgage
      }
    }
  `;

  const { estates }: { estates: RawEstate[] } = await client.request(
    GET_ESTATES
  );

  return estates.map((estate) => structureEstate(estate));
}

export async function getEstate(id: string) {
  const GET_ESTATE = gql`
    query getEstate($id: ID!) {
      estate(where: { id: $id }) {
        id
        createdAt
        images {
          url
        }
        plan {
          id
        }
        videoUrl
        description
        address
        location {
          latitude
          longitude
        }
        price
        dealType
        rentType
        estateType
        apartmentType
        agentName
        agentPhone
        agencyServicePrice
        rooms
        commonSquare
        livingSquare
        kitchenSquare
        floor
        allFloors
        balconies
        loggias
        roomsType
        windowsType
        state
        plateType
        bathType
        isRemodeled
        isRoomsFurniture
        isKitchenFurniture
        builtYear
        buildingType
        materialType
        parkingType
        isElevator
        isServiceElevator
        isRestrictedArea
        isBargaining
        isMortgage
      }
    }
  `;

  const { estate }: { estate: RawEstate } = await client.request(GET_ESTATE, {
    id,
  });

  return structureEstate(estate);
}

export async function getPaths() {
  const GET_PATHS = gql`
    {
      estates {
        id
      }
    }
  `;

  const { estates } = await client.request(GET_PATHS);
  return estates.map(({ id }) => ({ params: { id } }));
}
