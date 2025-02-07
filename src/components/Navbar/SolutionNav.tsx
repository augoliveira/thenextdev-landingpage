/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";

import Navlist from "./NavUtils/Navlist";
import Navlist2 from "./NavUtils/Navlist2";

type Props = unknown;

const SolutionNav = (props: Props) => {
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
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleOnclick}
        type="button"
        className={`flex items-center p-1 max-lg:w-full max-lg:justify-between max-lg:font-semibold ${show ? "lg:text-neutral-300" : ""}`}
      >
        Esquadrias de alumínio
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={`ml-1 transition-all duration-200 ease-in max-lg:scale-x-125 ${show ? "max-lg:0 opacity-40 lg:mt-2" : "mt-0 max-lg:-rotate-90"}`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative -ml-5 w-[300px] rounded-md bg-white p-6 transition duration-300 ease-in lg:absolute lg:py-4 ${show ? "opacity-100" : "top-[2000px] hidden opacity-0"}`}
      >
        <div className="mb-4 w-full pb-4 pt-4 lg:border-b-[1px]">
          <span className="text-base font-semibold text-neutral-800">
            Manuteção
          </span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <a href="" className="block py-2 hover:text-blue-600">
                Enterprise
              </a>
            </li>
            <li>
              <a href="" className="block py-2 hover:text-blue-600">
                Teams
              </a>
            </li>
            <li>
              <a href="" className="block py-2 hover:text-blue-600">
                Startups
              </a>
            </li>
            <li className="py-2">
              <Navlist2
                main="Education"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
        <div className="mb-4 w-full pb-4 pt-2 lg:border-b-[1px]">
          <span className="text-base font-semibold text-neutral-800">
            By Solution
          </span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <a href="" className="block py-2 hover:text-blue-600">
                CI/CD & Automation
              </a>
            </li>
            <li className="py-2">
              <Navlist2
                main="DevOps"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
            <li className="py-2">
              <Navlist2
                main="DevSecOps"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
        <div className="mb-4 w-full pb-0 pt-2">
          <span className="text-base font-semibold text-neutral-800">
            Case Studies
          </span>
          <ul className="mt-1 w-full text-sm text-neutral-500">
            <li>
              <a href="" className="block py-2 hover:text-blue-600">
                Customer stories
              </a>
            </li>
            <li className="py-2">
              <Navlist2
                main="Resources"
                path="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SolutionNav;
