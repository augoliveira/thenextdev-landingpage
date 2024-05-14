import React from "react";
import { ChevronRight } from "lucide-react";
import BlurImage from './../ui/blur-image';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ServiceCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="rounded-lg h-[526px] flex flex-col z-40 cursor-pointer bg-gray-800 overflow-hidden group border-2 border-gray-800 hover:border-emerald-500 opacity-100 hover:opacity-100 bg-gradient-to-r from-bodyColor to-[#66a900] p-4 transition-transform duration-200 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900">
      <div className="w-full h-48 overflow-hidden">
        <BlurImage 
        src={imageUrl} 
        alt="service image"
        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        width={420}
        height={404}
        />
      </div>
      <p className="text-darkBlue text-[20px] font-bold  md:max-w-[197px]">
        {title}
      </p>
      <p className="text-lightBlue text-[16px] font-bold my-[24px] md:max-w-[312px]">
        {description}
      </p>

      <div className="text-primary text-[16px] font-bold flex gap-4">
        Erfahren Sie mehr <ChevronRight />
      </div>
    </div>
  );
}

export default ServiceCard;