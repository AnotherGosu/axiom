import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data?.user || null;
};

export default function useUser() {
  const { data: user } = useSWR("/api/user", fetcher);

  return user;
}
