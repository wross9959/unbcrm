import * as React from "react"
import { cn } from "@/lib/utils"

const AvatarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-center", className)} {...props} />
  ),
)
AvatarGroup.displayName = "AvatarGroup"

const AvatarGroupList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex -space-x-2", className)} {...props} />,
)
AvatarGroupList.displayName = "AvatarGroupList"

const AvatarGroupSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-medium", className)}
    {...props}
  >
    {children}
  </div>
))
AvatarGroupSkeleton.displayName = "AvatarGroupSkeleton"

export { AvatarGroup, AvatarGroupList, AvatarGroupSkeleton }
