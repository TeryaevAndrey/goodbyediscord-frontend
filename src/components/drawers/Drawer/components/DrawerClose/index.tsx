import { Button } from "@/components/ui";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import { IoClose } from "react-icons/io5";
import { cn } from "@/shared/utils";

type Props = {
  onClick: () => void;
};

export const DrawerClose: FC<PropsWithClassName<Props>> = ({
  className,
  onClick,
}) => {
  return (
    <Button
      className={cn(className)}
      sizes="small"
      variant="transparent"
      mode="square"
      onClick={onClick}
    >
      <IoClose />
    </Button>
  );
};
