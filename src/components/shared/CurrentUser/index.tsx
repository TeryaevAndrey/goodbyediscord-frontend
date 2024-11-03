import { user } from "@/shared/store/slices";
import { useAppSelector } from "@/shared/types";
import { FaChevronRight } from "react-icons/fa6";

export const CurrentUser = () => {
  const { userData } = useAppSelector(user);

  return (
    <div
      className="flex justify-between items-center gap-2 px-4 py-3 border-t border-base-100 cursor-pointer hover:bg-base-100 ease-linear duration-200 mt-auto"
      title="Перейти в профиль"
    >
      <div className="flex items-center gap-2">
        <div className="avatar online cursor-pointer">
          <div className="w-12 rounded-full">
            <img
              className="object-cover"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h6 className="text-lg">{userData?.username}</h6>
          <p className="opacity-50 text-sm -mt-1">#{userData?.id}</p>
        </div>
      </div>

      <FaChevronRight size={16} />
    </div>
  );
};
