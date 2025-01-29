import Image from "next/image";
import { TActor } from "@/lib/loader";

export type TSlide = Pick<
  TActor,
  "name" | "image" | "awards" | "birth_year" | "death_year" | "known_for"
>;

export default function Slide({
  awards,
  birth_year,
  death_year,
  image,
  known_for,
  name,
}: TSlide) {
  return (
    <div className="group relative isolate mx-auto flex aspect-[5/3] max-w-lg flex-col items-center justify-center overflow-hidden transition ease-in-out">
      <Image
        src={image}
        alt={`Image of ${name}`}
        width={220}
        height={282}
        placeholder="blur"
        blurDataURL={image}
        quality={100}
      />
      {/* This is a shadow layer, it is included only for cosmetic purposes*/}
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black/30 to-black/10"></div>

      {/* This is a layer that contains information about actor and will animate from bottom to viewport when user mouseover slide */}
      <div className="absolute bottom-0 left-0 isolate z-20 hidden h-fit min-h-28 w-full translate-y-full flex-col gap-2 bg-black/60 bg-clip-padding p-3 text-white opacity-0 backdrop-blur-sm backdrop-filter transition group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
        <div>{name}</div>
        <div>
          <span>{birth_year}</span>
          {death_year && <span> - {death_year}</span>}
        </div>
        <div className="line-clamp-1">
          Known For: {known_for.join(", ").toString()}
        </div>
        {awards[0] !== "None" && (
          <div className="line-clamp-1">
            Awards: {awards.join(", ").toString()}
          </div>
        )}
      </div>
    </div>
  );
}
