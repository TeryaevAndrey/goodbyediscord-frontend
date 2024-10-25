import {
  Button,
  FormControl,
  Textarea,
  TextField,
  UploadAvatar,
} from "@/components/ui";
import { FormControlError } from "@/components/ui/FormControl/components";
import { useCreateChannelMutation } from "@/shared/store/api";
import { user } from "@/shared/store/slices";
import { CreateChannelFormData, useAppSelector } from "@/shared/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const AddChannelModal = () => {
  const [createChannel] = useCreateChannelMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateChannelFormData>();
  const {userData} = useAppSelector(user);

  const formHandler = handleSubmit(async (data) => {
    if(!userData) return toast.error("Не получилось получить ваши данные");

    await createChannel({
      ...data,
      owner_id: userData.id
    });
  });

  return (
    <dialog id="add_channel_modal" className="modal">
      <form className="modal-box" onSubmit={formHandler}>
        <h3 className="font-bold text-lg">Добавление канала</h3>

        <div className="mt-6 flex items-center gap-4">
          <UploadAvatar />

          <FormControl>
            <TextField
              {...register("name", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
              })}
              placeholder="Channel name"
            />

            {errors.name?.message && (
              <FormControlError>{errors.name?.message}</FormControlError>
            )}
          </FormControl>
        </div>

        <Textarea
          {...register("description")}
          className="mt-4"
          placeholder="Description"
        />

        <div className="modal-action">
          <div className="flex items-center gap-4 flex-wrap">
            <button className="btn" type="button">
              Close
            </button>
            <Button className="w-max" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </dialog>
  );
};
