import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import { icons } from "lucide-react";
import { CategoriesType } from "@/types/MenuTypes";

type IconKeys = keyof typeof icons;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("http://127.0.0.1:8000/api/getcategories", {
    next: {
      revalidate: 3000,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }

  const json = await res?.json();
  if (json.status == "success") {
    return json.data;
  } else {
    return console.error(json.message);
  }
}

const Menu = async () => {
  const listMenu: CategoriesType[] = await getData();

  return (
    <div className="flex gap-5 items-center pt-3 container">
      <Carousel
        className=" w-[70%]"
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="gap-6">
          {listMenu.map((item: CategoriesType, index: number) => {
            const LucideIcon = icons[item.icon as IconKeys];
            return (
              <CarouselItem key={index} className="basis-auto cursor-pointer">
                <div
                  className={`flex flex-col items-center gap-2 justify-center pb-2  ${
                    index == 0
                      ? "active border-b-2 border-black"
                      : "text-slate-600 hover:border-b-2 hover:border-slate-200  hover:text-black"
                  }`}
                >
                  <LucideIcon size={24} strokeWidth={1.5} />
                  <span className="text-xs">{item.name ?? ""}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-auto gap-4 mb-2 text-black">
        <div className="chips">
          <icons.Filter size={16} strokeWidth={1.5} />
          Filter
        </div>
        <div className="chips flex-auto">
          Tampilkan total sebelum pajak
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Menu;
