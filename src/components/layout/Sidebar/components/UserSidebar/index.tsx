import { CurrentUser } from "@/components/shared";
import { Button, Search } from "@/components/ui";
import { Users } from "./components";

export const UserSidebar = () => {
  return (
    <div className="h-full">
      <div className="mx-4 flex flex-col gap-4">
        <Button
          sizes="small"
          onClick={() =>
            document.getElementById("add_friend_modal")?.showModal()
          }
        >
          Добавить друга
        </Button>
        <Search />
      </div>

      <Users />

      <CurrentUser  />
    </div>
  );
};
