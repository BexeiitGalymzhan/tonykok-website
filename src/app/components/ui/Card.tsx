import React from "react";
import Image from "next/image";
import { CardProp } from "@/data/services";

function Card({ imgUrl, title, description }: CardProp) {
  return (
    <div
      className="flex flex-col h-full mb-10 relative w-full overflow-hidden 
                 bg-gray-900 hover:bg-gray-950 
                 transform transition-transform duration-300 hover:scale-105  shadow-md hover:shadow-xl"
    >
      <div className="relative w-full h-60">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="px-4 flex flex-col flex-grow">
        <h3 className="text-white mt-4 text-2xl">{title}</h3>
        <p className="text-gray-300 mt-2 flex-1">{description}</p>
      </div>
    </div>
  );
}

export default Card;
