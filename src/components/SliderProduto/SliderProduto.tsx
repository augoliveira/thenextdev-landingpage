/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useEffect, useState } from "react";

import NextImage from "../ui/NextImage";
import { images } from "./constants";
import Description from "./Description";

const SliderProduto = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);
  return (
    <main className="mx-auto grid w-full max-w-5xl grid-cols-1 place-items-center rounded-2xl shadow-2xl md:grid-cols-2">
      <div
        className={`flex w-full items-center justify-center gap-4 p-6 transition-transform duration-500 ease-in-out md:rounded-2xl md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block h-[80vh] w-full object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <NextImage
              src={elem.src}
              alt=""
              width={400}
              height={400}
              quality={100}
              priority={true}
              className="h-full w-full object-cover md:rounded-l-3xl"
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default SliderProduto;
