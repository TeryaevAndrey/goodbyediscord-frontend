import { IoChevronBack } from "react-icons/io5";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";

type Props = {
  onClick: () => void;
};

export const BackButton: FC<PropsWithClassName<Props>> = ({
  className,
  onClick,
}) => {
  return (
    <button className={cn(styles.root, className)} onClick={onClick}>
      <IoChevronBack className={styles.icon} />
      <span>Назад</span>
    </button>
  );
};
