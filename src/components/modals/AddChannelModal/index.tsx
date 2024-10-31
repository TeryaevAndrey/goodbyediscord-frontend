import {
  Button,
  FormControl,
  Textarea,
  TextField,
  UploadAvatar,
} from "@/components/ui";
import { FormControlError } from "@/components/ui/FormControl/components";
import { CreateChannelFormData } from "@/shared/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export const AddChannelModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateChannelFormData>();
  const [searchParams, setSearchParams] = useSearchParams();

  const closeModal = () => {
    document.getElementById("add_channel_modal")?.close();
  };

  const openMembersModal = () => {
    document.getElementById("add_members_channel_modal")?.showModal();
  }

  const formHandler = handleSubmit(({ name, description }) => {
    const params: { [key: string]: string } = {
      name,
    };

    if (description) {
      params.description = description;
    }

    setSearchParams(params);

    closeModal();
    openMembersModal();
  });

  useEffect(() => {
    setValue("name", searchParams.get("name") as string);
    setValue("description", searchParams.get("description") as string);
  }, [searchParams, setValue]);

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
            <button className="btn" type="button" onClick={closeModal}>
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
