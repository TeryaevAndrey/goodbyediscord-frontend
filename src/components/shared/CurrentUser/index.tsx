import { Avatar } from "@/components/ui";
import { setOpenedUser, user } from "@/shared/store/slices";
import { useAppDispatch, useAppSelector } from "@/shared/types";
import { FaChevronRight } from "react-icons/fa6";

export const CurrentUser = () => {
  const { userData } = useAppSelector(user);
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex justify-between items-center gap-2 px-4 py-3 border-t border-base-100 cursor-pointer hover:bg-base-100 ease-linear duration-200 mt-auto"
      title="Перейти в профиль"
      onClick={() => {
        document.getElementById("user_modal")?.showModal();
        dispatch(setOpenedUser(userData));
      }}
    >
      <div className="flex items-center gap-2">
        <Avatar url={undefined} letter={userData?.username[0]} />

        <div className="flex flex-col">
          <h6 className="text-lg">{userData?.username}</h6>
          <p className="opacity-50 text-sm -mt-1">#{userData?.id}</p>
        </div>
      </div>

      <FaChevronRight size={16} />
    </div>
  );
};
