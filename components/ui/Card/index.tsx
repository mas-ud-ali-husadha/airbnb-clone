import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import { Room, RoomImage } from "@/types/ListDataTypes";
import moment from "moment";

type CardType = {
  data: Room;
};

const Card = ({ data }: CardType) => {
  return (
    <div className="flex flex-col gap-1 text-sm relative cursor-pointer">
      <Carousel
        className="w-full max-w-xs group relative"
        dots
        opts={{
          duration: 10,
        }}
      >
        <CarouselContent>
          {data.room_images.map((item: RoomImage, index: number) => (
            <CarouselItem key={index}>
              <Image
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
                className="rounded-xl"
                width={300}
                height={300}
                src={item.room_image_url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious showOnHover className="left-3" />
        <CarouselNext showOnHover className="right-3" />
        <CarouselDots dataLength={data.room_images.length} />
        <div className="py-0.5 px-2 font-medium text-sm shadow absolute left-3 bg-white rounded-full top-3">
          Pilihan tamu
        </div>
      </Carousel>
      <div className="flex justify-between items-center mt-2">
        <div className="font-bold ">{data.room_title}</div>
        <span className="flex gap-1 items-center">
          <Star size={14} fill="black" />
          4,88
        </span>
      </div>
      <div className="text-gray-600">Berjarak 2 kilometer</div>
      <div className="text-gray-600">{moment(data.default_start_date).format('DD')} - {moment(data.default_end_date).format('DD MMM')}</div>
      <div className="font-bold">
        Rp. 300.000 <span className="font-normal">malam</span>
      </div>
      <Heart
        fill="#3d3d3b"
        size={24}
        strokeWidth={2}
        className="absolute right-4 top-4 opacity-50"
        color="#f4f4f4"
      />
    </div>
  );
};

export default Card;
