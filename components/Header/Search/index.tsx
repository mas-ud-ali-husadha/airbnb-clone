import React from "react";
import Lokasi from "./Lokasi";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Peserta from "./Peserta";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="mt-8  inline-flex mx-auto border rounded-full shadow-lg relative mb-5">
      <Lokasi />
      <div className="group flex">
        <CheckIn />
        <CheckOut />
      </div>
      <Peserta />
      <div className="p-4 right-3 top-2 absolute absolute-center bg-red-400 hover:bg-red-500 cursor-pointer  rounded-full ml-auto ">
        <SearchIcon size={16} strokeWidth={3} color="#fff" />
      </div>
    </div>
  );
};

export default Search;
