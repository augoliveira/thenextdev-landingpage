'use client';

import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { Data, CurrentSlideData } from "./index";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
        <OtherInfo
          data={transitionData ? transitionData : currentSlideData.data}
        />
        
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <PiWhatsappLogoBold className=" text-xl" />
        </button>
        <button
          className=" w-fit rounded-full border-[1px] border-[#24d3598f] px-6 py-3 text-[10px] font-semibold transition duration-300 
            ease-in-out hover:bg-green-500 hover:text-teal-50 "
        >
          FALE CONOSCO
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
