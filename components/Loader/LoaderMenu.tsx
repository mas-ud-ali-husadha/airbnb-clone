import { SkeletonMenu } from "@/components/Skeleton/SkeletonMenu";
import { Skeleton } from "@/components/ui/skeleton";
import { Filter } from "lucide-react";
import React from "react";

const LoaderMenu = () => {
  const skeletonMenu = Array.from({ length: 11 }, (_, index) => (
    <SkeletonMenu key={index} />
  ));

  return (
    <div className="flex gap-5 items-center pt-3 container">
      <div className="flex gap-6 ">{skeletonMenu}</div>
      <div className="flex gap-4 items-center flex-auto mb-2 text-black">
        <div className=" py-4 chips ">
          <Skeleton className="w-[50px] h-4" />
        </div>
        <div className=" py-4 chips flex-auto">
          <Skeleton className="w-full h-4 flex-auto" />
        </div>
      </div>
    </div>
  );
};
export default LoaderMenu;
