import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui";
import { CurrentUser } from "@/components/shared";
import { Channels } from "./components";

export const SecondarySidebar = () => {
  return (
    <div className="min-w-[90px] w-[90px] bg-base-200 h-[100dvh] py-6 flex flex-col justify-between items-center gap-4">
      <CurrentUser />

      <Channels className="mb-auto mt-4" />

      <div className="flex flex-col gap-4">
        <Button variant="secondary" mode="square">
          EN
        </Button>
        <Button
          variant="secondary"
          mode="square"
          onClick={() =>
            document.getElementById("settings_modal")?.showModal()
          }
        >
          <FiSettings size={24} />
        </Button>
      </div>
    </div>
  );
};
