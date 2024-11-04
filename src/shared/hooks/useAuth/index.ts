import { useGetMeQuery } from "@/shared/store/api";
import { setIsAuth, setUserData } from "@/shared/store/slices";
import { useAppDispatch } from "@/shared/types";
import Cookies from "js-cookie";
import { useEffect } from "react";

const token = Cookies.get("access");

export const useAuth = () => {
  const { data, isError } = useGetMeQuery(null, {
    skip: !token,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) return;

    dispatch(setIsAuth(true));
    dispatch(setUserData(data.user));
  }, [data, dispatch]);

  useEffect(() => {
    if (!isError) return;

    dispatch(setIsAuth(false));
    dispatch(setUserData(undefined));
    Cookies.remove("access");
    Cookies.remove("refresh");
  }, [isError, dispatch]);
};
