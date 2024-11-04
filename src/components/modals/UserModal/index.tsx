import {
  Avatar,
  Button,
  FormControl,
  Textarea,
  TextField,
} from "@/components/ui";
import { FormControlTitle } from "@/components/ui/FormControl/components";
import { userModal } from "@/shared/store/slices";
import { useAppSelector } from "@/shared/types";

export const UserModal = () => {
  const { openedUser } = useAppSelector(userModal);

  return (
    <dialog id="user_modal" className="modal">
      <div className="modal-box min-h-[400px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{openedUser?.username}</h3>

        <div className="flex flex-col gap-4 mt-6">
          <Avatar className="mx-auto" sizes="extraBig" url={undefined} letter={openedUser?.username[0]}  />

          <div className="flex flex-col gap-4 w-full">
            <FormControl>
              <FormControlTitle>Имя</FormControlTitle>
              <TextField value={openedUser?.username} readOnly />
            </FormControl>

            <FormControl>
              <FormControlTitle>Обо мне</FormControlTitle>
              <Textarea value={openedUser?.description || ""} readOnly />
            </FormControl>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          <Button variant="error">Удалить из друзей</Button>
        </div>
      </div>
    </dialog>
  );
};
