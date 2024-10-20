import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui";
import { CurrentUser } from "@/components/shared";
import { Channels } from "./components";
import { Channel } from "@/components/entities";
import { IoIosAdd } from "react-icons/io";

export const SecondarySidebar = () => {
  return (
    <div className="w-[90px] bg-base-200 h-[100dvh] py-6 flex flex-col justify-between items-center gap-4">
      <CurrentUser />

      <Channels className="mb-auto mt-4">
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>
        <Button variant="transparent" mode="square">
          <Channel />
        </Button>

        <Button
          variant="transparent"
          mode="square"
          onClick={() =>
            document.getElementById("add_channel_modal")?.showModal()
          }
        >
          <IoIosAdd className="fill-base-content" size={28} />
        </Button>
      </Channels>

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
