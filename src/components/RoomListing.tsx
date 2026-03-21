import type { Room } from "@/lib/types";
import { urlForImage } from "@/lib/url-for-image";
import { Users } from "lucide-react";


const RoomListing = ({room}:{room: Room}) => {
  return (
  //  Entire Card
  <div className="group p-8 md:mb-0 overflow-visible">

    {/* Specs */}
    <div className="grid grid-cols-2">
      <div className="flex gap-2">
        <p className=" text-lg align-start">Aforo: {room.capacity}</p>
      </div>
      <div className="flex justify-end gap-1">
        <p className=" text-lg align-end">S/. {room.price*room.capacity}</p>
      </div>
    </div>

    {/* Image */}
    <div className="relative h-65 flex items-center justify-center overflow-visible">
      <a href={`/room/${room.slug}`} className="block">
        <img
          src={urlForImage(room.image).url()}
          alt={room.name}
          className="max-h-full max-w-full transition-all duration-300 ease-in-out
                    group-hover:scale-110
                    group-hover:drop-shadow-[7px_7px_0_rgba(177,146,112,0.85)]
                    dark:group-hover:drop-shadow-[7px_7px_0_rgba(177,146,112,0.85)]"
        />
      </a>
    </div>

    {/* Name*/}
    <div className="relative p-4">
      <a href={`/room/${room.slug}`}>
        <h2 className="text-300 font-700 text-center">{room.name}</h2>
      </a>
    </div>
  </div>
  );
};

export default RoomListing;