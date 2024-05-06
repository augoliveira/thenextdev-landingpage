import React from "react";
import Image from 'next/image'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  imgUrl: any;
  title: any;
  description: any;
  gitUrl: any;
  previewUrl: any;
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: Props) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group"
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={imgUrl}
        fill
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
      />
    </div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 -mt-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 -mt-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          </div>
          <div className="absolute w-full h-md text-white z-10 flex flex-col items-center justify-center gap-5 -bottom-48 group-hover:bottom-0 opacity-y group-hover:opcity-100 trnsition-all durtion-300 rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-200 text-2xl tracking-tight font-extrabold sm:text-4xl dark:text-white">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;