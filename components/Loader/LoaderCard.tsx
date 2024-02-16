import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import React from "react";

const LoaderCard = () => {
  const skeletonCards = Array.from({ length: 8 }, (_, index) => (
    <SkeletonCard key={index} />
  ));

  return <div className="grid grid-cols-4 gap-6 mt-6">{skeletonCards}</div>;
};
export default LoaderCard;
