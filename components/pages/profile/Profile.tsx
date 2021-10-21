import useSWR from "swr";
import getClientProfile from "utils/cms/queries/getClientProfile";
import type { ClientProfileForm } from "utils/types/forms";
import { useUser } from "@auth0/nextjs-auth0";
import ProfileForm from "./ProfileForm";

interface Props {
  initialData: ClientProfileForm;
}

const fetcher = async (key: string, sub: string) => {
  return await getClientProfile(sub);
};

export default function Profile({ initialData }: Props) {
  const {
    user: { sub },
  } = useUser();

  const {
    data: clientProfile,
    isValidating,
    mutate,
  } = useSWR(["clientProfile", sub], fetcher, {
    initialData,
  });

  return (
    <ProfileForm
      defaultValues={clientProfile}
      mutate={mutate}
      isValidating={isValidating}
    />
  );
}
