import { cn } from "@/lib/utils";
import React from "react";
import Searchv2 from "./Searchv2";
import Search from "../Search";

const CenterMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col transition-all duration-300 ",
          isScrolled ? "scale-0 h-0" : "h-24"
        )}
      >
        <div className="flex gap-7 text-slate-500  text-nowrap justify-center -mt-10 ">
          <span className="active">Tempat Menginap</span>
          <span>Pengalaman</span>
          <span>Pengalaman Online</span>
        </div>
        <Search />
      </div>
      <Searchv2 isScrolled={isScrolled} />
    </>
  );
};

export default CenterMenu;
