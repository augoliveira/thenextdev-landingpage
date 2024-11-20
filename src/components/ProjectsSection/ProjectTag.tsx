import React from "react";

type Props = {
  name: any;
  onClick: any;
  isSelected: any;
};

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} tablink rounded-[5px] border-none bg-[#18181c] from-slate-800 to-indigo-900 px-5 py-[10px] text-center text-sm font-semibold uppercase text-clr_ratting hover:bg-gradient-to-r hover:shadow-md lg:px-[30px] lg:py-4 lg:text-lg`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
