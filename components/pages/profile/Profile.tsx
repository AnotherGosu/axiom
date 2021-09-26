import useSWR from "swr";
import getCustomUserProfile from "utils/cms/queries/getClientProfile";
import type { ClientProfile } from "utils/types/client";
import { useUser } from "@auth0/nextjs-auth0";
import ProfileForm from "./ProfileForm";

interface Props {
  initialData: ClientProfile;
}

const fetcher = async (key: string, sub: string) => {
  return await getCustomUserProfile(sub);
};

export default function Profile({ initialData }: Props) {
  const {
    user: { sub },
  } = useUser();

  const {
    data: userProfile,
    isValidating,
    mutate,
  } = useSWR(["customUserProfile", sub], fetcher, {
    initialData,
  });

  return (
    <ProfileForm
      defaultValues={userProfile}
      mutate={mutate}
      isValidating={isValidating}
    />
  );
}
