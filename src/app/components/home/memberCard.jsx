import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const MemberCard = ({ image, name, designation }) => {
  return (
    <div className="w-full">
      <Image className="h-96 w-full" src={image} />
      <div className="text-white py-4 px-5 flex flex-row justify-between bg-brand-1">
        {/* Content */}
        <div className="">
          <h4 className="text-lg font-medium font-urbanist">{name}</h4>
          <p className="text-xs font-normal italic">{designation}</p>
        </div>
        {/* Icons */}
        <div className="flex items-center flex-row gap-3">
          <button className="flex bg-[#FFFFFF33] p-2 text-lg rounded-full flex-row">
            <FaFacebookF />
          </button>
          <button className="flex bg-[#FFFFFF33] p-2 text-lg rounded-full flex-row">
            <FaYoutube markerMid="" className=" text-white " />
          </button>
          <button className="flex bg-[#FFFFFF33] p-2 text-lg rounded-full flex-row">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
