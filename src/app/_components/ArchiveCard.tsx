import Image from "next/image";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
interface Props {
  title: string;
  img: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, img, des, listItem, link }: Props) => {
  return (
    <Link href={link}>
      <div className="shadow-shadowOne group relative flex h-80 w-full cursor-pointer flex-col justify-center gap-6 overflow-hidden rounded-lg bg-gradient-to-r from-bodyColor to-[#125a0c] p-4 transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900 hover:shadow-xl hover:shadow-black/30 xl:px-12 xl:py-10">
        <Image
          src={img}
          alt={title}
          width={1920}
          height={1080}
          unoptimized
          className="absolute inset-0 -z-20 m-0 h-full w-full bg-cover bg-center object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="flex items-center justify-between">
          <RxOpenInNewWindow className="text-2xl duration-100 hover:text-textGreen group-hover:rotate-45 group-hover:text-lime-600" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white group-hover:text-textGreen">
            {title}
          </h2>
          <p className="mt-3 text-sm">{des}</p>
        </div>
        <ul className="flex flex-wrap items-center justify-between gap-2 text-xs text-textDark mdl:text-sm">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ArchiveCard;
