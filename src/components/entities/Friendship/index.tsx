import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Button } from "@/components/ui";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const Friendship: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <p>Test</p>

      <div className={styles.controls}>
        <Button mode="square" sizes="small" variant="success" title="Принять">
          <FaCheck />
        </Button>

        <Button mode="square" sizes="small" variant="error" title="Отклонить">
          <IoClose />
        </Button>
      </div>
    </div>
  );
};
