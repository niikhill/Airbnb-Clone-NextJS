import React from "react";
import Image from "next/image";
function LiveAnyWhereCard({ title, img }) {
  console.log(title);
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default LiveAnyWhereCard;
