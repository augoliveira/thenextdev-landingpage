"use client";

import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import ContactUs from "./ContactUs";

const ServicesDetails = ({
  no,
  title,
  startingAmt,
  detailsOne,
  detailsTwo,
  detailsThree,
  detailsFour,
  detailsFive
}: any) => {
  const servicesDetailsData = [
    { id: 1001, title: detailsOne },
    { id: 1002, title: detailsTwo },
    { id: 1003, title: detailsThree },
    { id: 1004, title: detailsFour },
    { id: 1005, title: detailsFive }
  ];

  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  const handleOrder = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <>
      <div className="hover:shadow-customShadowOne transition-hover flex w-80 flex-col gap-8 border border-borderColor border-opacity-40 px-4 py-6 duration-500 hover:border-transparent hover:shadow-gray-600">
        <div>
          <p className="font-titleFont group relative h-auto w-full px-3 text-base text-borderColor">
            {no}
            <span className="absolute bottom-0 left-0 h-[.5px] w-full bg-borderColor"></span>
            <span className="absolute bottom-0 left-0 h-[10px] w-[1px] bg-borderColor"></span>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold uppercase">{title}</h3>
          <p className="mt-1 text-sm text-secondaryColor underline decoration-[1px] underline-offset-4">
            Starting from:
          </p>
          <h2 className="font-bodyFont mt-1 text-4xl font-semibold">
            USD {startingAmt}
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {servicesDetailsData.map((item) => (
              <li
                key={item.id}
                className="transition-hover flex items-center gap-4 text-base text-darkText duration-300 hover:cursor-pointer hover:text-white"
              >
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                {item.title}.
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleOrder} className="w-44">
          <ContactUs buttonData="Order Now" />
        </div>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-secondaryColor/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium uppercase tracking-wide text-white"
              >
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores eaque pariatur magni quam dicta facere qui doloribus
                quaerat obcaecati, repudiandae beatae explicabo, cum vitae
                blanditiis id omnis necessitatibus iste voluptatibus.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-secondaryColor/50 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-secondaryColor/10 focus:outline-none data-[hover]:bg-secondaryColor data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ServicesDetails;
