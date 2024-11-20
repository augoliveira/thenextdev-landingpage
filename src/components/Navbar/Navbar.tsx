/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { motion } from "framer-motion";
import { Phone, X } from "lucide-react";

import Logo from "../../../public/logo-campanha.png";
import { ModeToggle } from "../../app/_components/mode-toggle";
import { Button } from "../../components/button";
import Container from "../Container";
import Navlist2 from "./NavUtils/Navlist2";
import OpenSourceNav from "./OpenSourceNav";
import ProductNav from "./ProductNav";
import SolutionNav from "./SolutionNav";

type Props = object;

const Navbar = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const close = () => setIsOpen(false);
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [show, setShow] = useState(false);
  const handleOnclick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setShow(false);
    }
  };

  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("#010e02");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#063b14") : setNavColor("#161616");
    window.scrollY > 10 ? setNavSize("90px") : setNavSize("90px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
        className="nav fixed top-0 z-50 h-[90px] w-full bg-primaryColor px-7 sm:px-7 md:px-8 xl:px-20"
      >
        <button className="hidden"></button>
        <div className="flex items-center max-lg:flex-row-reverse max-lg:justify-between">
          <div className="flex items-center justify-between max-lg:w-full">
            <div className="lg:hidden">
              <div
                className={`text-gray flex cursor-pointer items-center gap-2 font-[500] hover:text-primary`}
              >
                <Phone color="#2dd4bf" /> (61) 98669-2775
              </div>
            </div>
            <Link href="/" onClick={close}>
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={30}
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  loading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                }}`}
                onLoad={() => setLoading(false)}
              />
            </Link>
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="cursor-pointer lg:hidden"
            >
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150 ease-in ${showNav ? "mb-0 translate-y-[1px] rotate-45" : "mb-1 rotate-0"} `}
              ></div>
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150 ease-in ${showNav ? "mb-0 hidden" : "mb-1"} `}
              ></div>
              <div
                className={`h-[2px] w-[23px] bg-white transition duration-150 ease-in ${showNav ? "mb-0 -rotate-45" : "rotate-0"}`}
              ></div>
            </button>
          </div>
          <div
            className={`top-20 z-40 flex w-full transition duration-200 ease-in max-lg:absolute ${showNav ? "max-lg:translate-x-0 max-lg:scale-100" : "max-lg:max-h-0 max-lg:-translate-y-1/4 max-lg:scale-y-50"}`}
          >
            <div className="flex overflow-y-auto max-lg:max-h-[500px] max-lg:w-[320px] max-lg:flex-col max-lg:justify-between max-lg:rounded-lg max-lg:bg-white max-sm:mx-auto max-sm:w-10/12 sm:ml-auto lg:mb-0 lg:w-full lg:items-center lg:justify-between">
              <nav className="mb-0 mt-0 px-3 text-[15.5px] max-lg:px-5 max-lg:py-10 lg:px-6">
                <ul className="flex overflow-y-auto max-lg:h-auto max-lg:flex-col max-lg:space-y-6 max-lg:text-xl max-lg:font-medium max-lg:text-neutral-700 lg:items-center lg:space-x-2">
                  <OpenSourceNav />
                  <ProductNav />
                  <SolutionNav />

                  <li
                    id="myLi"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={handleOnclick}
                      type="button"
                      className={`flex items-center p-1 transition duration-150 ease-in max-lg:w-full max-lg:justify-between max-lg:font-semibold ${show ? "lg:text-neutral-300" : ""}`}
                    >
                      <Link href="/contato">Contato</Link>
                    </button>
                  </li>
                  <li>
                    <ModeToggle />
                  </li>
                </ul>
              </nav>
              <div className="mb-3 items-center px-3 text-left max-lg:flex-col lg:mb-0 lg:flex lg:space-x-4 lg:px-0">
                <div className="relative mb-2 max-lg:mr-4 lg:mb-0 lg:flex">
                  <Link href="https://github.com/noorjsdivs" target="_blank">
                    <motion.button
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="font-titleFont h-14 w-52 rounded-md border border-textGreen text-sm tracking-wide text-textGreen duration-300 hover:bg-hoverColor"
                    >
                      (61) 9 8669-2775
                    </motion.button>
                  </Link>
                </div>
                <Button className="w-max shadow-button" onClick={handleContact}>
                  Orçamento
                  <HiArrowNarrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

function setIsOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
