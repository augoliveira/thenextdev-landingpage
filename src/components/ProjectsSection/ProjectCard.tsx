import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

type Props = {
  imgUrl: any;
  title: any;
  description: any;
  gitUrl: any;
  previewUrl: any;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl
}: Props) => {
  return (
    <div>
      <div className="group relative h-52 overflow-hidden rounded-t-xl transition-shadow hover:shadow-xl hover:shadow-black/30 md:h-72">
        <div className="h-56 w-full overflow-hidden">
          <Image
            alt="Projetos"
            // Importing an image will
            // automatically set the width and height
            src={imgUrl}
            fill
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover" // cover, contain, none
            }}
          />
        </div>
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            className="group/link relative -mt-12 mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="group/link relative -mt-12 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
        <div className="h-md opacity-y group-hover:opcity-100 trnsition-all durtion-300 absolute -bottom-48 z-10 mt-3 flex w-full flex-col items-center justify-center gap-5 rounded-b-xl px-4 py-6 text-white group-hover:bottom-0">
          <h5 className="bg-gradient-to-r from-blue-800 to-cyan-200 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:text-white sm:text-4xl">
            {title}
          </h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
