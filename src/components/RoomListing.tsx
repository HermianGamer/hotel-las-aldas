import type { Room } from "@/lib/types";
import { urlForImage } from "@/lib/url-for-image";

const RoomListing = ({room}:{room: Room}) => {
  return (
  //  Entire Card
  <div className="group p-4 mb-4 overflow-visible bg-primary text-background">

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
    <div className="relative max-h-85 flex items-center justify-center overflow-visible">
      <a href={`/room/${room.slug}`} className="block">
        <img
          src={urlForImage(room.image).width(800).quality(75).auto('format').url()}
          srcSet={[400, 800, 1200]
            .map(w => `${urlForImage(room.image).width(w).quality(75).auto('format').url()} ${w}w`)
            .join(', ')}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          alt={room.name}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full transition-all duration-300 ease-in-out
                    group-hover:scale-105"
        />
      </a>
    </div>

    {/* Name*/}
    <div className="relative p-0">
      <a href={`/room/${room.slug}`}>
        <h2 className="text-300 font-700 text-center">{room.name}</h2>
      </a>
    </div>
  </div>
  );
};

export default RoomListing;