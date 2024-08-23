
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Link from 'next/link';
interface Props {
  title: string;
  des: string;
  icon: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, icon, listItem, link }: Props) => {
  return (
    <Link href={link} target="_blank">
      <div className="w-full h-80 rounded-lg shadow-shadowOne group flex cursor-pointer flex-col bg-gradient-to-r from-bodyColor to-[#66a900] p-4 transition-transform duration-200 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900 xl:px-12 xl:py-10 justify-center gap-6 hover:-translate-y-2 group">
        <div className="flex justify-between items-center">
          {<FaRegFolder className="text-4xl text-textGreen" />}
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
