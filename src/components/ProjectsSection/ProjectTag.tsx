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
      className={`${buttonStyles} tablink bg-[#18181c] hover:shadow-md hover:bg-gradient-to-r from-slate-800 to-indigo-900 text-clr_ratting rounded-[5px] lg:text-lg text-sm uppercase font-semibold border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;