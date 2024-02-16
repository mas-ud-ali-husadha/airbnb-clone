"use client";
import React from "react";
import CenterMenu from "./CenterMenu";
import useDebounce from "@/hook/useDebounce";
import { cn } from "@/lib/utils";
import Localization from "./Localization";
import Profile from "./Profile";
import Logo from "./Logo";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    let scrollPosition = window.scrollY;
    setIsScrolled(Boolean(scrollPosition));
  };

  const debouncedHandleScroll = useDebounce(handleScroll, 300);

  React.useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
    <nav
      className={cn(
        "pt-6 flex flex-col sticky top-0 z-50 bg-white",
        isScrolled && "shadow"
      )}
    >
      <div className="container flex justify-between items-center ">
        <Logo />
        <div className="flex gap-3 items-center">
          <button className="text-sm transition-colors hover:bg-slate-100 py-2 px-3 rounded-2xl">
            Jadikan Rumah Anda Airbnb
          </button>
          <Localization />
          <Profile />
        </div>
      </div>
      <CenterMenu isScrolled={isScrolled} />
      <div className="mt-3 border-t">{children}</div>
    </nav>
  );
};

export default Navbar;
