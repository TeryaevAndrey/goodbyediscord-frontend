import { useGetFriendsQuery } from "@/shared/store/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../User";
import { useLoading } from "@/shared/hooks";
import { Loader } from "@/components/ui";
import { EmptyText } from "@/components/shared";

export const Users = () => {
  const {
    data: friends,
    error: friendsError,
    isLoading,
    isFetching,
  } = useGetFriendsQuery(null);

  const loading = useLoading(isLoading, isFetching);

  useEffect(() => {
    if (!friendsError) return;

    toast.error("Не получилось получить список пользователей");
  }, [friendsError]);

  return (
    <div className="flex flex-col mt-6 overflow-y-auto h-full max-h-[calc(100dvh-220px)]">
      {loading ? (
        <Loader className="my-auto" />
      ) : (
        <>
          {friends && friends.length > 0 ? (
            friends?.map((friend) => (
              <User key={friend.id} userId={friend.id} name={friend.username} />
            ))
          ) : (
            <EmptyText className="my-auto">Список пуст</EmptyText>
          )}
        </>
      )}
    </div>
  );
};
