import { Button, FormControl, TextField } from "@/components/ui";
import { FormControlTitle } from "@/components/ui/FormControl/components";
import { closeModal } from "@/shared/utils";
import { ChangeEvent, FormEvent, useState } from "react";

export const AddChannelChatModal = () => {
  const [name, setName] = useState("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const closeModalHandler = () => {
    closeModal("add_channel_chat_modal");
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <dialog id="add_channel_chat_modal" className="modal">
      <form className="modal-box" onSubmit={formHandler}>
        <h3 className="font-bold text-lg">Добавление чата (голосовой)</h3>

        <div className="mt-6 flex items-center gap-4">
          <FormControl>
            <FormControlTitle>Название</FormControlTitle>
            <TextField
              placeholder="Введите название"
              value={name}
              onChange={onChangeName}
            />
          </FormControl>
        </div>

        <div className="modal-action w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Button
              variant="secondary"
              type="button"
              onClick={closeModalHandler}
            >
              Close
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </dialog>
  );
};
