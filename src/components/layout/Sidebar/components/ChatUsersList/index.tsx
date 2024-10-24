import { PropsWithClassName } from "@/shared/types"
import { cn } from "@/shared/utils"
import { FC, PropsWithChildren } from "react"

export const ChatUsersList: FC<PropsWithClassName<PropsWithChildren>> = ({className, children}) => {
    return(
        <div className={cn('flex flex-col', className)}>
            {children}
        </div>
    )
}