import { createContext, FC, PropsWithChildren, useState } from "react";
import { Themes } from "../types";

const storageTheme = localStorage.getItem("theme") as Themes;

export type ContextTypes = {
  theme: Themes;
  changeTheme: (value: Themes) => void;
};

const ThemeContext = createContext({
  theme: storageTheme || "dark",
  changeTheme: (value: Themes) => console.log(value),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(storageTheme || "dark");

  const changeTheme = (value: Themes) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
