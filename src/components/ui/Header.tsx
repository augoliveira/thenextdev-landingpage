/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { MdClose } from "react-icons/md";

import { reactBdLogo } from "@/assets";
import { motion } from "framer-motion";

import NextImage from "../ui/NextImage";
import NextLink from "./NextLink";
import SideNav from "./SideNav";

const navigation = [
  { title: "Home", link: "/" },
  { title: "Quem Somos", link: "/quem-somos" },
  { title: "Serviços", link: "/servicos" },
  { title: "Faq", link: "/faq" },
  { title: "Blog", link: "/blog" },
  { title: "Contato", link: "/contato" }
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const pathname = usePathname();

  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("#010e02");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#063b14") : setNavColor("#1616161f");
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
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
        className="nav fixed left-0 top-0 z-50 h-[90px] w-full bg-primaryColor px-4"
      >
        <div className="h-[90px] w-full">
          <header className="mx-auto flex h-full max-w-screen-2xl items-center justify-between overflow-hidden text-white">
            {/* ================= Header logo start here ================= */}
            <NextLink href="/">
              <div>
                <NextImage
                  priority
                  className="w-36"
                  src={reactBdLogo}
                  alt="reactBdLogo"
                />
              </div>
            </NextLink>
            {/* ================= Header logo end here =================== */}
            {/* ================= Header Nav Link start here =================== */}
            <div className="relative">
              <div className="hidden items-center gap-6 text-4xl text-[14px] font-semibold uppercase tracking-tight lgl:flex xl:gap-12">
                {navigation?.map((item) => (
                  <NextLink
                    key={item?.title}
                    href={item?.link}
                    className="group relative overflow-hidden px-3 py-1 text-slate-300 hover:cursor-pointer"
                  >
                    {item?.title}
                    <span
                      className={`transition-hover absolute bottom-0 left-0 h-[2px] w-full translate-y-[1px] duration-100 group-hover:bg-secondaryColor ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                    <span
                      className={`transition-translate absolute bottom-0 left-0 h-[10px] w-[2px] -translate-x-[1px] duration-100 group-hover:bg-secondaryColor ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                  </NextLink>
                ))}
              </div>
              {/* ================== Header Small Icon start here ================== */}

              <div
                onCanPlay={() => setToggleNav(!toggleNav)}
                className="group relative flex h-11 w-11 flex-col items-center justify-center gap-[6px] overflow-hidden border-b-[1px] border-t-[1px] border-b-secondaryColor border-t-secondaryColor text-2xl text-white hover:cursor-pointer lgl:hidden"
              >
                {toggleNav ? (
                  <AiOutlineClose onClick={() => setToggleNav(!toggleNav)} />
                ) : (
                  <CgMenuRight onClick={() => setToggleNav(!toggleNav)} />
                )}
                <span className="absolute right-0 inline-block h-full w-[1px] translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
                <span className="absolute left-0 inline-block h-full w-[1px] -translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
              </div>

              {/* ================== Header Small Icon end here ==================== */}
            </div>
            {/* ================= Header Nav Link end here ====================== */}
            {/* ================= Header Emergency start here =================== */}

            <div
              onClick={() => setShowSideNav(!showSideNav)}
              className="menuBtn group relative hidden h-11 w-11 flex-col items-center justify-center gap-[6px] overflow-hidden border-b-[1px] border-t-[1px] border-b-gray-500 border-t-gray-500 text-xl hover:cursor-pointer lgl:flex"
            >
              {!showSideNav ? (
                <>
                  <span className="inline-flex h-[1px] w-5 bg-white"></span>
                  <span className="inline-flex h-[1px] w-5 bg-white"></span>
                  <span className="inline-flex h-[1px] w-5 bg-white"></span>
                </>
              ) : (
                <MdClose className="text-xl text-red-500" />
              )}

              <span className="absolute right-0 inline-block h-full w-[1px] translate-y-8 bg-gray-500 transition-transform duration-300 group-hover:translate-y-0"></span>
              <span className="absolute left-0 inline-block h-full w-[1px] -translate-y-8 bg-gray-500 transition-transform duration-300 group-hover:translate-y-0"></span>
            </div>

            {/* ================= Header Emergency end here ===================== */}
          </header>
          {showSideNav && (
            <div className="absolute right-0 translate-x-[100%]">
              <SideNav />
            </div>
          )}
        </div>
      </nav>
      {/* ================= Navlink small screen start here ============= */}
      {toggleNav && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn easeOut"
          }}
          className="fixed top-0 z-50 mt-20 inline-block w-full bg-black px-4 py-6 text-white/80 lgl:hidden"
        >
          <ul className="font-titleFont flex w-full flex-col gap-2 text-sm uppercase">
            <NextLink href="/">
              <li
                onClick={() => setToggleNav(false)}
                className="transition-hover w-full border-b-[1px] border-b-borderColor px-3 py-1 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor"
              >
                Home
              </li>
            </NextLink>
            <NextLink href="/about">
              <li
                onClick={() => setToggleNav(false)}
                className="transition-hover border-b-[1px] border-b-borderColor px-3 py-2 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor"
              >
                About Us
              </li>
            </NextLink>
            <NextLink onClick={() => setToggleNav(false)} href="/services">
              <li className="transition-hover flex items-center gap-1 border-b-[1px] border-b-borderColor px-3 py-2 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor">
                Services
              </li>
            </NextLink>
            <NextLink href="/faq">
              <li className="transition-hover border-b-[1px] border-b-borderColor px-3 py-2 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor">
                FAQ
              </li>
            </NextLink>
            <NextLink href="/blog">
              <li className="transition-hover border-b-[1px] border-b-borderColor px-3 py-2 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor">
                Blog
              </li>
            </NextLink>
            <NextLink onClick={() => setToggleNav(false)} href="/contact">
              <li className="transition-hover border-b-[1px] border-b-borderColor px-3 py-2 duration-500 hover:cursor-pointer hover:border-b-secondaryColor hover:text-secondaryColor">
                Contact
              </li>
            </NextLink>
          </ul>
        </motion.div>
      )}
      {/* ================= Navlink small screen end here =============== */}
    </>
  );
};

export default Header;
