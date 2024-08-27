import NextImage from "../ui/NextImage";
import Link from "next/link";
import React from "react";

import { ChevronRight } from "lucide-react";

import { roboto } from "@/lib/util";

interface IProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

function Card({
  image,
  title,
  description,
  linkText,
  link,
}: IProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <NextImage src={image} alt="fetaure image" />
      </div>
      <p className="text-[2.25rem] font-[700] text-lightGray text-center">
        {title}
      </p>

      <p
        className={`${roboto.className}  text-normal text-lightGrayAlt my-[1.56rem]`}
      >
        {description}
      </p>

      <Link href={link}>
        <div
          className={`${roboto.className} text-normal font-[700] text-customBlue flex gap-1`}
        >
          {linkText}
          <ChevronRight />
        </div>
      </Link>
    </div>
  );
}

export default Card;