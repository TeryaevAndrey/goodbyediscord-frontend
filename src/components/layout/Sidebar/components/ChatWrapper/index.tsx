import { PropsWithClassName } from "@/shared/types"
import { cn } from "@/shared/utils"
import { FC, PropsWithChildren } from "react"
import styles from "./styles.module.scss"

export const ChatWrapper: FC<PropsWithClassName<PropsWithChildren>> = ({className, children}) => {
    return(
        <div className={cn(styles.root, className)}>
            {children}
        </div>
    )
}