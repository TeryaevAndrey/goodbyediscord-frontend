import { EntityItem } from "@/components/entities";
import { EmptyText } from "@/components/shared";
import { Button, Loader, TextField } from "@/components/ui";
import { useLoading } from "@/shared/hooks";
import {
  useCreateChannelMutation,
  useSearchUsersQuery,
} from "@/shared/store/api";
import { CreateChannelParams, PropsWithClassName } from "@/shared/types";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";

type Props = {
  withMiss?: boolean;
  type?: "create" | "update";
};

export const AddMembersChannelModal: FC<PropsWithClassName<Props>> = ({
  withMiss,
  type = "create",
}) => {
  const [text, setText] = useState("");
  const [textDebounce] = useDebounce(text, 1000);
  const [searchParams] = useSearchParams();
  const [
    createChannel,
    { data: createChannelData, error: createChannelError },
  ] = useCreateChannelMutation();
  const navigate = useNavigate();

  const {
    data: usersList,
    isLoading,
    isFetching,
  } = useSearchUsersQuery({
    q: textDebounce,
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const loading = useLoading(isLoading, isFetching);

  const missHandler = () => {
    document?.getElementById("add_members_channel_modal_with_miss")?.close();

    const name = searchParams.get("name");
    const description = searchParams.get("description");

    if (type === "create") {
      if (!name) return toast.error("Введите название канала!");

      const body: CreateChannelParams = {
        name,
      };

      if (description) body.description = description;

      createChannel(body);
    }
  };

  useEffect(() => {
    if (!createChannelData) return;

    toast.success("Канал успешно создан!");

    navigate(`/channel/${createChannelData.id}`);
  }, [createChannelData, navigate]);

  useEffect(() => {
    if (!createChannelError) return;

    toast.error("Ошибка");
  }, [createChannelError]);

  return (
    <dialog
      id={`add_members_channel_modal${withMiss && "_with_miss"}`}
      className="modal"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Добавление участников</h3>

        <TextField
          className="mt-6"
          placeholder="Login or id"
          value={text}
          onChange={onChangeText}
        />

        <div className="flex flex-col gap-2 mt-4">
          {loading ? (
            <Loader />
          ) : (
            <>
              {usersList && usersList.length > 0 ? (
                usersList?.map((user) => (
                  <EntityItem
                    key={user.id}
                    userId={user.id}
                    name={user.username}
                    control={
                      <Button className="w-max" sizes="small">
                        Пригласить в канал
                      </Button>
                    }
                  />
                ))
              ) : (
                <EmptyText>Список пуст</EmptyText>
              )}
            </>
          )}
        </div>

        <div className="modal-action">
          <form className="w-full" method="dialog">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
              {withMiss && (
                <button className="btn" type="button" onClick={missHandler}>
                  Miss
                </button>
              )}

              <button className="btn" type="button">
                Close
              </button>

              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
