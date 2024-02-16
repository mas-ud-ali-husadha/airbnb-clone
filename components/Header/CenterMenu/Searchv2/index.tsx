import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

const Searchv2 = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div
      className={cn(
        "py-3 px-4 relative border rounded-full shadow -mt-12 font-normal text-sm w-fit mx-auto gap-4",
        isScrolled ? "flex" : "hidden"
      )}
    >
      <span>Ke mana saja</span>
      <span className="px-4 border-x">Minggu mana pun</span>
      <span className="text-gray-600 flex gap-3 pr-9">Tambahkan tamu</span>
      <div className="p-2 absolute right-0 top-1.5 bg-red-500 hover:bg-red-600 cursor-pointer  rounded-full ml-auto mr-2">
        <SearchIcon size={15} strokeWidth={3} color="#fff" />
      </div>
    </div>
  );
};

export default Searchv2;
