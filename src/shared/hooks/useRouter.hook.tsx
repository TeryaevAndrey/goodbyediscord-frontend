import { Route, Routes } from "react-router-dom";
import { paths } from "../data";
import { useAppSelector } from "../types";
import { user } from "../store/slices";

export const useRouter = () => {
  const { isAuth } = useAppSelector(user);
  const authPaths = Object.entries(paths.auth);

  if (!isAuth) {
    return (
      <Routes>
        {authPaths.map((path, index) => {
          const Page = path[1].element;

          return <Route key={index} path={path[1].path} element={<Page />} />;
        })}
      </Routes>
    );
  }

  return <Routes></Routes>;
};
