import React from "react";
import Dashboard from "./../ui/Dashboard";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header";
// import { AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="w-[500px] h-screen px-10 absolute top-0 right-0 bg-gradient-to-r from-bodyColor to-[#66a900] text-white flex flex-col justify-center gap-4">
      <PageHeaderHeading className="hidden md:block">
      Box e Vidro com problema? Resolvemos!
        </PageHeaderHeading>
        <p className="text-gray-400">
      A <span className="p-2 text-4xl font-extrabold tracking-tight text-slate-400 sm:text-2xl xl:max-w-[43.5rem]">Glazing design:</span> 
      Especialistas em manutenção e reparo de box e esquadrias de vidro em geral!
      </p>
      <div>
      <Dashboard />
    </div>
      {/* <span
        onClick={() => setToggleNav(false)}
        className="text-white text-lg absolute top-10 right-10 animate-spin hover:animate-none hover:cursor-pointer"
      >
        <AiOutlineClose />
      </span> */}
    </div>
  );
};

export default SideNav;
