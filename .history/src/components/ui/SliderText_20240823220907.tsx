import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactUs from "./ContactUs";

const SliderText = ({ title, subtitle, desTitle, des }: any) => {
  return (
    <div className="flex flex-col gap-6 xl:gap-8 h-[6] justify-center">
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
            duration: 1,
          }}
          className="gradient-text mb-4 max-w-2xl animate-gradient text-4xl font-normal leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple"
        >
          {title}
          <span className="gradient-text p-4 mb-4 max-w-7xl animate-gradient text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
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
            duration: 1,
          }}
          className="text-white text-xl mdl:text-3xl w-full mdl:w-[80%] xl:w-[50%] font-normal"
        >
          <span className="text-4xl underline underline-offset-4 decoration-secondaryColor decoration-[1px]">
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
          duration: 1,
        }}
      >
        <Link href="/contact">
          <ContactUs buttonData="contact us" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SliderText;
