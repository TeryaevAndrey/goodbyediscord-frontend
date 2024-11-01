import { FC } from "react";

type Props = {
  avatarUrl?: string;
  name: string;
};

export const Channel: FC<Props> = ({ avatarUrl, name }) => {
  return (
    <div className="avatar cursor-pointer">
      <div className="w-8 rounded-full">
        {avatarUrl ? (
          <img className="object-cover" src={avatarUrl} />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-orange-500">
            {name?.[0]}
          </div>
        )}
      </div>
    </div>
  );
};
