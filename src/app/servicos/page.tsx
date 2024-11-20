"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";

import { motion } from "framer-motion";

import ServicesDetails from "@/components/ui/ServicesDetails";
import TitleBanner from "@/components/ui/TitleBanner";

import { PageIntroduction } from "./page-introduction";

const servicesData = [
  {
    no: "01",
    title: "Portfolio making",
    startingAmt: "300.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want"
  },
  {
    no: "02",
    title: "Single page Website",
    startingAmt: "500.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want"
  },
  {
    no: "03",
    title: "Chatting App",
    startingAmt: "1500.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want"
  },
  {
    no: "04",
    title: "E-commerce website",
    startingAmt: "2000.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want"
  }
];

const Produto = () => {
  const [development, setDevelopment] = useState(true);
  const [design, setDesign] = useState(false);
  const [domain, setDomain] = useState(false);
  const [hosting, setHosting] = useState(false);
  return (
    <div>
      <PageIntroduction />
      <TitleBanner
        subtitle="Elegância, Estilo e Beleza em espelhos, vidros temperados e bancadas."
        title="Our Services"
      />
      {/* ================================================================
                            Services components start here
       ================================================================= */}

      <div className="mx-auto max-w-screen-lg pt-32">
        <div className="font-titleFont -mt-32 mb-8 grid grid-cols-1 px-4 text-lg font-semibold uppercase md:grid-cols-2 lg:mb-0 lgl:grid-cols-4 lgl:text-base xl:text-lg">
          <p
            onClick={() => {
              setDevelopment(true);
              setDesign(false);
              setDomain(false);
              setHosting(false);
            }}
            className={`${
              development
                ? "z-10 bg-secondaryColor text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-secondaryColor"
                : "border border-secondaryColor bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
            } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
          >
            <span>
              <RiCodeSSlashFill />
            </span>
            Development
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(true);
              setDomain(false);
              setHosting(false);
            }}
            className={`${
              design
                ? "z-10 bg-secondaryColor text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-secondaryColor"
                : "border border-secondaryColor bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
            } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
          >
            <span>
              <SiAntdesign />
            </span>
            Design
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(false);
              setDomain(true);
              setHosting(false);
            }}
            className={`${
              domain
                ? "z-10 bg-secondaryColor text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-secondaryColor"
                : "border border-secondaryColor bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
            } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
          >
            <span>
              <IoMdCheckmarkCircle />
            </span>
            Domain
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(false);
              setDomain(false);
              setHosting(true);
            }}
            className={`${
              hosting
                ? "z-10 bg-secondaryColor text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-secondaryColor"
                : "border border-secondaryColor bg-opacity-50 hover:bg-white hover:text-primaryColor"
            } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
          >
            <span>
              <RiBarcodeFill />
            </span>
            Hosting
          </p>
        </div>
      </div>

      {/* ===================== Development Start here ==================== */}
      {development && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4
          }}
          className="font-titleFont mx-auto flex max-w-screen-2xl flex-1 flex-wrap items-center justify-center gap-6 px-4 pb-20"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Development end here ====================== */}
      {/* ===================== Design start here ========================= */}
      {design && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4
          }}
          className="font-titleFont mx-auto flex max-w-screen-2xl flex-1 flex-wrap items-center justify-center gap-6 px-4 pb-20"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Design end here =========================== */}
      {/* ===================== Domain start here ========================= */}
      {domain && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4
          }}
          className="font-titleFont mx-auto flex max-w-screen-2xl flex-1 flex-wrap items-center justify-center gap-6 px-4 pb-20"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Domain end here =========================== */}
      {/* ===================== Hosting start here ======================== */}
      {hosting && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4
          }}
          className="font-titleFont mx-auto flex max-w-screen-2xl flex-1 flex-wrap items-center justify-center gap-6 px-4 pb-20"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Hosting end here ========================== */}
      {/* ================================================================
                            Services components end here
       ================================================================= */}
    </div>
  );
};

export default Produto;
