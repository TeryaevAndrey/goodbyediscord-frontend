import { MainComponentProps } from "@/shared/types"
import { cn } from "@/shared/utils"
import { FC } from "react"
import styles from "./styles.module.scss";

export const DrawerHeader: FC<MainComponentProps> = ({className, children}) => {
    return(
        <div className={cn(styles.root, className)}> 
            {children}
        </div>
    )
}