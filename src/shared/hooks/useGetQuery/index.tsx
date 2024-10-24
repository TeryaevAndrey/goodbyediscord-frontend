import { useEffect } from "react";

export const useGetQuery = (
  queryHook: any,
  options: {
    onSuccess?: () => void;
    onError?: () => void;
  }
) => {
  const { onSuccess, onError } = options;
  const { data, error, isSuccess, isError } = queryHook();

  useEffect(() => {
    if (!isSuccess) return;

    onSuccess?.();
  }, [isSuccess, onSuccess]);

  useEffect(() => {
    if (!isError) return;

    onError?.();
  }, [isError, onError]);

  return { data, error, isSuccess, isError };
};
