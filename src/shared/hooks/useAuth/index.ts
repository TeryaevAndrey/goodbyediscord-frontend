import { useGetMeQuery, useGetSessionQuery } from "@/shared/store/api";
import { setUserData } from "@/shared/store/slices";
import { useAppDispatch } from "@/shared/types";
import { useEffect } from "react";

export const useAuth = () => {
  const { data, isError } = useGetMeQuery(null);
  useGetSessionQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) return;

    dispatch(setUserData(data.user));
  }, [data, dispatch]);

  useEffect(() => {
    if (!isError) return;

    window.localStorage.removeItem("is-auth");
  }, [isError]);
};
