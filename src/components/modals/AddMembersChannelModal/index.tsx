import { EntityItem } from "@/components/entities";
import { EmptyText } from "@/components/shared";
import { Loader, TextField } from "@/components/ui";
import { useLoading } from "@/shared/hooks";
import { useSearchUsersQuery } from "@/shared/store/api";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "use-debounce";

export const AddMembersChannelModal = () => {
  const [text, setText] = useState("");
  const [textDebounce] = useDebounce(text, 1000);

  const { data: usersList, isLoading, isFetching } = useSearchUsersQuery({
    q: textDebounce,
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const loading = useLoading(isLoading, isFetching);

  console.log(loading);

  return (
    <dialog id="add_members_channel_modal" className="modal">
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
                usersList?.map((user) => <EntityItem key={user.id} />)
              ) : (
                <EmptyText>Список пуст</EmptyText>
              )}
            </>
          )}
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
