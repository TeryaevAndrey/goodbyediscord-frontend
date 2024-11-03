import { useGetFriendsQuery } from "@/shared/store/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../User";

export const Users = () => {
  const { data: friends, error: friendsError } = useGetFriendsQuery(null);

  useEffect(() => {
    if (!friendsError) return;

    toast.error("Не получилось получить список пользователей");
  }, [friendsError]);

  return (
    <div className="flex flex-col mt-6 overflow-y-auto h-full max-h-[calc(100dvh-220px)]">
        {friends?.map((friend) => (
            <User userId={friend.id} name={friend.username} />
        ))}
    </div>
  );
};
