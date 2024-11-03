import { Loader, TextField } from "@/components/ui";
import { useSearchUsersQuery } from "@/shared/store/api";
import { ChangeEvent, useState } from "react";
import { User } from "./components";
import { useLoading } from "@/shared/hooks";
import { EmptyText } from "@/components/shared";

export const AddFriendModal = () => {
  const [search, setSearch] = useState("");
  const {
    data: users,
    isLoading,
    isFetching,
  } = useSearchUsersQuery({ q: search });

  const loading = useLoading(isLoading, isFetching);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <dialog id="add_friend_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Добавление друга</h3>

        <TextField
          className="mt-6"
          placeholder="Search..."
          value={search}
          onChange={onChangeSearch}
        />

        <div className="flex flex-col gap-2 mt-4">
          {loading ? (
            <Loader />
          ) : (
            <>
              {users ? (
                users?.map((user) => <User id={user.id} name={user.username} />)
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
