import useSWR from "swr";
import getUser from "utils/cms/queries/getUser";
import type { User } from "utils/types/user";
import { useUser } from "@auth0/nextjs-auth0";
import ProfileForm from "./ProfileForm";

interface Props {
  initialData: User;
}

const fetcher = async (key: string, sub: string) => {
  return await getUser(sub);
};

export default function Profile({ initialData }: Props) {
  const {
    user: { sub },
  } = useUser();

  const { data, isValidating, mutate } = useSWR(["user", sub], fetcher, {
    initialData,
  });

  return (
    <ProfileForm
      defaultValues={data}
      mutate={mutate}
      isValidating={isValidating}
    />
  );
}
