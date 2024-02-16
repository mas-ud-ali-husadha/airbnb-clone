import React from "react";
import Menu from "./Menu";
import { MenuType } from "@/types/FooterTypes";

const GridList = ({ data }: { data: MenuType[] }) => {
  return (
    <div className="grid grid-cols-6 gap-6">
      {data.map((item, i) => (
        <Menu key={i} {...item} />
      ))}
    </div>
  );
};

export default GridList;
