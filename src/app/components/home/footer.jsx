import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { FooterNavLinks, FooterSocialLinks } from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-brand-2 text-white pt-20 pb-12">
      <Container>
        {/* footer top */}
        <div className="flex flex-row justify-between items-center w-full gap-10">
          {/* left footer */}
          <div className="w-3/12">
            <Image src={logo} className="w-[95px] h-[44px] invert" />
            <p className="my-10">
              We create amazing Webflow templatesfor creative people all around
              the world.
            </p>
            <button className="flex flex-row gap-2 bg-brand-1 py-2 px-4 text-sm text-white">
              <IoCallOutline />
              (973) 068 2300
            </button>
          </div>
          {/* middle footer */}
          <div className="w-3/12">
            <h3 className="text-xl mb-3 font-semibold  font-urbanist">
              Quick Links
            </h3>
            <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
              <FooterNavLinks />
            </div>
          </div>
          {/* right footer */}
          <div className="w-6/12">
            <div className="flex flex-row gap-2 text-xl text-white font-urbanist font-semibold">
              <FooterSocialLinks />
            </div>
            <p className="font-poppins font-semibold text-[28px] mt-5">
              Let's work together. <br /> Just drop me a line - info@mail.com
            </p>
          </div>
        </div>
        {/* footer bottom */}
        <div className="pt-8 border-t border-grey-500 mt-12">
          <p className="text-center text-lg font-normal ">
            © 2023 Copyright By Ideapeel Inc. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
