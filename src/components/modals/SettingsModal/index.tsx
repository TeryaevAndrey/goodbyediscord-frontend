import { Button } from "@/components/ui";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";

export const SettingsModal = () => {
  return (
    <dialog id="settings_modal" className="modal">
      <div className="modal-box min-h-[400px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Настройки</h3>

        <div className="flex flex-col gap-4 mt-8">
          <Button className="bg-base-100" variant="transparent">
            Изменить данные аккаунта
            <FaRegUserCircle className="text-base-content" size={20} />
          </Button>

          <Button className="bg-base-100" variant="transparent">
            Привязка клавиш
            <FaRegKeyboard className="text-base-content" size={20} />
          </Button>

          <div className="dropdown w-full">
            <div tabIndex={0} role="button" className="btn w-full">
              Dark theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full mt-1"
            >
              <li>
                <a>Light theme</a>
              </li>
              <li>
                <a>Dark theme</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </dialog>
  );
};
