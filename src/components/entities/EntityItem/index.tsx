import { cn } from "@/shared/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  control?: JSX.Element;
};
export const EntityItem: FC<Props> = ({ className, control }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-4 p-4 py-2 cursor-pointer hover:bg-base-200 ease-linear duration-200 active:bg-base-200/90",
        className
      )}
    >
      <div className="flex items-center gap-4">
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

      {control}
    </div>
  );
};
