import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill
} from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 border-t border-t-borderColor px-8 py-10 md:grid-cols-2 lgl:grid-cols-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          ReactBD
        </h2>
        <p className="text-base tracking-wide text-darkText">
          Lorem ipsum dolor sit amet, consyect etur adipiscing elit. Quisque
          actraqum nunc no dolor sit amet augue dolor.
        </p>
        <p className="flex items-center gap-5 text-lg">
          <BsTwitter className="cursor-pointer text-white duration-500 hover:text-secondaryColor" />
          <ImFacebook className="cursor-pointer text-white duration-500 hover:text-secondaryColor" />
          <BsYoutube className="cursor-pointer text-white duration-500 hover:text-secondaryColor" />
          <BsGithub className="cursor-pointer text-white duration-500 hover:text-secondaryColor" />
        </p>
      </div>
      <div>
        <h3 className="font-titleFont mb-4 text-xl font-semibold">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <FaHome />
            </span>
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <MdEmail />
            </span>
            reactjsbd@gmail.com
          </p>
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <BsFillPhoneFill />
            </span>
            +00 24187626
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont mb-4 text-xl font-semibold">
          Blog Contains
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <FaHome />
            </span>
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <MdEmail />
            </span>
            reactjsbd@gmail.com
          </p>
          <p className="font-base flex cursor-pointer items-start justify-start gap-6 text-darkText duration-500 hover:text-white">
            <span className="text-xl text-white">
              <BsFillPhoneFill />
            </span>
            +00 24187627
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont mb-4 text-xl font-semibold">
          Support & Downloads
        </h3>
        <p className="text-base text-darkText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          voluptates, fuga aliquam nobis placeat iusto illum fugiat consequuntur
          ad tempora.
        </p>
      </div>
    </div>
  );
};

export default Footer;
