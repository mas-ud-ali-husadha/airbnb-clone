import React from "react";

const CheckOut = () => {
  return (
    <div className="flex items-center group hover:bg-slate-200  group/item rounded-full w-44 cursor-pointer">
      <div className="flex flex-col gap-1 pl-3">
        <span className="text-xs">Check Out</span>
        <span className="text-gray-500 text-sm">Tambahkan...</span>
      </div>
      <div className="border-r w-full h-3/5 group-hover/item:invisible" ></div>
    </div>
  );
};

export default CheckOut;
