import { EntityItem } from "@/components/entities";
import { Button, Search } from "@/components/ui";

export const UserSidebar = () => {
  return (
    <div>
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

      <div className="flex flex-col mt-6 overflow-y-auto h-full max-h-[calc(100dvh-95px)]">
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
        <EntityItem />
      </div>
    </div>
  );
};
