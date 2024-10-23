import { useGetMeQuery, useGetSessionQuery } from "@/shared/store/api";
import { useEffect } from "react";

export const useAuth = () => {
  const { data, isError, error } = useGetMeQuery(null);
  useGetSessionQuery(null);

  useEffect(() => {
    if (!isError) return;

    window.localStorage.removeItem("is-auth");
  }, [isError]);
};
