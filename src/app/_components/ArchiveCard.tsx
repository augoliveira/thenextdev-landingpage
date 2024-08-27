
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Image from "next/image"
import Link from 'next/link';
interface Props {
  title: string;
  imh: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, img, des, listItem, link }: Props) => {
  return (
    <Link href={link} target="_blank">
      <div className="w-full overflow-hidden relative h-80 rounded-lg shadow-shadowOne group flex cursor-pointer hover:shadow-xl hover:shadow-black/30 flex-col bg-gradient-to-r from-bodyColor to-[#125a0c] p-4 transition-transform duration-200 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900 xl:px-12 xl:py-10 justify-center gap-6 hover:-translate-y-2 group">
        <Image 
        src={img}
        alt={title}
        width={1920}
        height={1080}
        unoptimized
        className="w-full h-full inset-0 m-0 absolute bg-cover bg-center -z-20 object-cover group-hover:scale-110 duration-500 transition-all"
        />
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ArchiveCard;
