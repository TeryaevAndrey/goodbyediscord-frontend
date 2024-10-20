import { Textarea, TextField, UploadAvatar } from "@/components/ui";

export const AddChannelModal = () => {
  return (
    <dialog id="add_channel_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Добавление канала</h3>

        <div className="mt-6 flex items-center gap-4">
          <UploadAvatar />

          <TextField placeholder="Channel name" />
        </div>

        <Textarea className="mt-4" placeholder="Description" />

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
