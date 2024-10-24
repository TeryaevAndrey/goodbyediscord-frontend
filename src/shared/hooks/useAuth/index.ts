import { useGetMeQuery } from "@/shared/store/api";

export const useAuth = () => {
  const {data} = useGetMeQuery(null);

  console.log(data);
};
