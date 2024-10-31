import { useEffect, useState } from "react";

export const useLoading = (isLoading: boolean, isFetching?: boolean) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isLoading, isFetching]);

  return loading;
};
