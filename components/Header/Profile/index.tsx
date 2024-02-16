import { CircleUserRound, Menu } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <div className="cursor-pointer items-center border rounded-full p-2 flex gap-6 hover:shadow-md ml-2">
      <Menu size={20} color="#000000" strokeWidth={1.25} absoluteStrokeWidth />
      <CircleUserRound size={34} strokeWidth={1.25} absoluteStrokeWidth />
    </div>
  );
};

export default Profile;
