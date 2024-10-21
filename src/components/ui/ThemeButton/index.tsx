import { ThemeContext } from "@/shared/contexts";
import { useContext } from "react";

export const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="dropdown w-full">
      <div tabIndex={0} role="button" className="btn w-full">
        {theme} theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full mt-1"
      >
        <li onClick={() => changeTheme("light")}>
          <a>Light theme</a>
        </li>
        <li onClick={() => changeTheme("dark")}>
          <a>Dark theme</a>
        </li>
      </ul>
    </div>
  );
};
