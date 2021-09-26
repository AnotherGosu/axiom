import { gql } from "graphql-request";
import { fetcher } from "./fetcher";
import deleteAssets from "./deleteAssets";

export default async function deleteEstate(estateId: string) {
  const {
    deleteEstate: { images = [], plan },
  } = await fetcher.request(DELETE_ESTATE, { estateId });

  const imagesIds = images.map((img) => img.id);
  const deleteAssetsIds = plan ? [...imagesIds, plan.id] : [...imagesIds];

  await deleteAssets(deleteAssetsIds);
}

const DELETE_ESTATE = gql`
  mutation DeleteEstate($estateId: ID!) {
    deleteEstate(where: { id: $estateId }) {
      images {
        id
      }
      plan {
        id
      }
    }
  }
`;
