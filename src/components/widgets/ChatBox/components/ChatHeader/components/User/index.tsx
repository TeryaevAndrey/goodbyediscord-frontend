export const User = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="avatar cursor-pointer">
        <div className="w-10 rounded-full">
          <img
            className="object-cover"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <p>Username</p>
    </div>
  );
};
