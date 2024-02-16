import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonMenu() {
  return (
    <div className="flex flex-col space-y-1 items-center">
      <Skeleton className="h-[25px] w-[25px] rounded-full" />
      <Skeleton className="h-[12px] w-[60px] rounded-sm"/>
    </div>
  )
}