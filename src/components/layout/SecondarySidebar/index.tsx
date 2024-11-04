import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui";
import { Channels } from "./components";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";

export const SecondarySidebar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-w-[90px] w-[90px] bg-base-200 h-[100dvh] py-6 flex flex-col justify-between items-center gap-4">
      <Button
        variant="transparent"
        mode="square"
        onClick={goToHome}
        title="Home"
      >
        <FaHome size={24} />
      </Button>

      <Channels className="mb-auto mt-4" />

      <div className="flex flex-col gap-4">
        <Button variant="secondary" mode="square" title="Friendships" onClick={() => navigate("/friendships")}>
          <FaUsers size={24} />
        </Button>

        <Button variant="secondary" mode="square" title="Change language">
          EN
        </Button>
        <Button
          variant="secondary"
          mode="square"
          onClick={() => document.getElementById("settings_modal")?.showModal()}
          title="Settings"
        >
          <FiSettings size={24} />
        </Button>
      </div>
    </div>
  );
};
