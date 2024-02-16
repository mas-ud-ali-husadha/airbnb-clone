export type RoomImage = {
  id: number;
  room_image_url: string;
  room_image_desc: string;
  room_id: number;
  created_at: string;
  updated_at: string;
};

export type Room = {
  uuid: string;
  room_title: string;
  room_name: string;
  room_desc: string;
  room_guest: string;
  room_bed: string;
  room_bedroom: string;
  room_bathroom: string;
  categories_id: null; // You might want to replace this with the actual type if available
  default_start_date: string;
  default_end_date: string;
  created_at: string;
  updated_at: string;
  room_images: RoomImage[];
};
