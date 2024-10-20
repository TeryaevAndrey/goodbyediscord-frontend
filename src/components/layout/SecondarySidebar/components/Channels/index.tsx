import { MainComponentProps } from "@/shared/types"
import { cn } from "@/shared/utils"
import { FC } from "react"

export const Channels: FC<MainComponentProps> = ({children, className}) => {
  return(
    <div className={cn('flex flex-col', className)}>
      {children}
    </div>
  )
}