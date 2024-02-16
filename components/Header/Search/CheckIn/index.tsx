import React from "react";

const CheckIn = () => {
  return (
    <div className="flex group items-center hover:bg-slate-200 group/item rounded-full w-44 cursor-pointer">
      <div className="border-r w-1 h-3/5  group-hover/item:invisible"></div>
      <div className="flex flex-col gap-1 pl-3">
        <span className="text-xs">Check In</span>
        <span className="text-gray-500 text-sm">Tambahkan...</span>
      </div>
      <div className="border-r w-full h-3/5 group-hover:invisible"></div>
    </div>
  );
};

export default CheckIn;
