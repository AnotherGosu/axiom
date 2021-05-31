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
  const { images, ...rest } = data;

  const uploadedAssets = await Promise.all(
    images.map((image) => uploadAsset(image))
  );
  const assets = uploadedAssets.map((asset) => ({ id: asset.id }));

  const CREATE_ESTATE = gql`
    mutation createEstate(
      $assets: [AssetWhereUniqueInput!]
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
      $isReward: Boolean
    ) {
      createEstate(
        data: {
          images: { connect: $assets }
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
          isReward: $isReward
        }
      ) {
        id
      }
    }
  `;

  return client.request(
    CREATE_ESTATE,
    { ...rest, assets },
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
        isReward
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
        isReward
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
