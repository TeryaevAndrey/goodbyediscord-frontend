import { EntityItem } from "@/components/entities";
import { TextField } from "@/components/ui";

export const AddFriendModal = () => {
  return (
    <dialog id="add_friend_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Добавление друга</h3>

        <TextField className="mt-6" placeholder="Login or id" />

        <div className="flex flex-col gap-2 mt-4">
          <EntityItem />
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
