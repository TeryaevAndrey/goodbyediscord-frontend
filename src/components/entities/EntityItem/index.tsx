export const EntityItem = () => {
  return (
    <div className="w-full flex items-center gap-4 p-4 py-2 cursor-pointer hover:bg-base-200 ease-linear duration-200">
      <div className="avatar online cursor-pointer">
        <div className="w-10 rounded-full">
          <img
            className="object-cover"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <p className="text-base">Mishka</p>
    </div>
  );
};
