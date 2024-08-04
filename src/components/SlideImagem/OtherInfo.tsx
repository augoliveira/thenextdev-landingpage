'use client';

import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className=" gradient-text mb-4 max-w-2xl animate-gradient text-4xl font-bold md:text-5xl xl:text-2xl dark:text-purple">
      <AnimatedText
        className=" spacing overflow-hidden text-[#D5D5D6]"
        data={data?.location}
      />
      <AnimatedText
        className="gradient-text mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-xl xl:text-6xl dark:text-purple"
        data={data?.title}
      />
      <AnimatedText
        className="text-base md:max-w-[650px] text-textDark font-medium"
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
