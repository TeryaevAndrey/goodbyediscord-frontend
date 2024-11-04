import { Button, FormControl, TextField } from "@/components/ui";
import { FormControlTitle } from "@/components/ui/FormControl/components";
import { ChangeEvent, FormEvent, useState } from "react";

export const AddChannelChatModal = () => {
  const [name, setName] = useState("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const closeModal = () => {
    document.getElementById("add_channel_chat_modal")?.close();
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <dialog id="add_channel_chat_modal" className="modal">
      <form className="modal-box" onSubmit={formHandler}>
        <h3 className="font-bold text-lg">Добавление канала</h3>

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

        <div className="modal-action">
          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="secondary" type="button" onClick={closeModal}>
              Close
            </Button>
            <Button className="w-max" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </dialog>
  );
};
