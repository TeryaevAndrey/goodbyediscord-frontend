import { cn } from "@/shared/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  avatarUrl?: string;
  userId: number;
  name: string;
  control?: JSX.Element;
};
export const EntityItem: FC<Props> = ({
  className,
  control,
  avatarUrl,
  userId,
  name,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-4 p-4 py-2 cursor-pointer hover:bg-base-200 ease-linear duration-200 active:bg-base-200/90",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="avatar online cursor-pointer">
          <div className="w-10 rounded-full">
            {avatarUrl ? (
              <img className="object-cover" src={avatarUrl} />
            ) : (
              <div className="w-full h-full bg-blue-500 flex justify-center items-center">
                {name?.[0]}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-base">{name}</p>
          {userId && <span className="text-xs opacity-50">#{userId}</span>}
        </div>
      </div>

      {control}
    </div>
  );
};
