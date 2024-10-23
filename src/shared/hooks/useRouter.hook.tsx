import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "../data";
import { useAppSelector } from "../types";
import { user } from "../store/slices";
import { Suspense } from "react";
import { LoaderPage } from "@/components/layout";

export const useRouter = () => {
  const { isAuth } = useAppSelector(user);
  const authPaths = Object.entries(paths.auth);
  const mainPaths = Object.entries(paths.main);

  if (!isAuth) {
    return (
      <Routes>
        {authPaths.map((path, index) => {
          const Page = path[1].element;

          return (
            <Route
              key={index}
              path={path[1].path}
              element={
                <Suspense fallback={<LoaderPage />}>
                  <Page />
                </Suspense>
              }
            />
          );
        })}

        <Route path="/*" element={<Navigate to="/auth/sign-in" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {mainPaths.map((path, index) => {
        const Page = path[1].element;

        return (
          <Route
            key={index}
            path={path[1].path}
            element={
              <Suspense fallback={<LoaderPage />}>
                <Page />
              </Suspense>
            }
          />
        );
      })}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
