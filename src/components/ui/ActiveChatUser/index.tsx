export const ActiveChatUser = () => {
  return (
    <button className="px-6 pl-10 py-1 flex items-center gap-2 bg-base-200/50 hover:bg-base-200 ease-linear duration-200 cursor-pointer active:bg-base-200/90 relative">
      <div className="avatar online cursor-pointer">
        <div className="w-6 rounded-full">
          <img
            className="object-cover"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <div className="bg-base-content/50 h-full w-[1px] absolute left-6 top-0 bottom-0"></div>

      <span className="text-base">User1</span>
    </button>
  );
};
