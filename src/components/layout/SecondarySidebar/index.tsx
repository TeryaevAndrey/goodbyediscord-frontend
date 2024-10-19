import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui";
import { CurrentUser } from "@/components/shared";

export const SecondarySidebar = () => {
  return (
    <div className="w-[90px] bg-base-200 h-[100dvh] py-6 flex flex-col justify-between items-center gap-4">
      <CurrentUser />

      <div className="flex flex-col gap-4">
        <Button variant="secondary" mode="square">
          EN
        </Button>
        <Button variant="secondary" mode="square">
          <FiSettings size={24} />
        </Button>
      </div>
    </div>
  );
};
