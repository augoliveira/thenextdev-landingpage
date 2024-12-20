import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

import ContactUs from "./ContactUs";

const SliderText = ({ title, subtitle, desTitle, des }: any) => {
  return (
    <div className="flex h-[560px] flex-col justify-center gap-6 xl:gap-8">
      <div>
        <motion.h4
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className="gradient-text dark:text-purple mb-4 max-w-2xl animate-gradient text-4xl font-normal leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl"
        >
          {title}
          <span className="gradient-text dark:text-purple mb-4 max-w-7xl animate-gradient p-4 text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl">
            {subtitle}
          </span>
        </motion.h4>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className="text-base font-medium text-textDark md:max-w-[650px]"
        >
          <span className="text-4xl underline decoration-secondaryColor decoration-[1px] underline-offset-4">
            {desTitle}
          </span>{" "}
          {des}
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1
        }}
      >
        <Link href="/contato">
          <ContactUs buttonData="Contato" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SliderText;
