import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import iconImage from "../../../assets/package-icon.png";
import serviceImage from "../../../assets/service.png";

const Services = ({ list, title, subtitle }) => {
  return (
    <div className="mb-20 mt-32">
      <Container>
        <div className="flex flex-row justify-between gap-24">
          <div className="w-4/12">
            <h3 className="text-h3 font-poppins font-semibold text-grey-900 mb-3 ">
              {title}
            </h3>
            <p className="text-lg mb-6  font-urbanist text-grey-500">
              {subtitle}
            </p>
            <div className="my-10">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="flex  mb-5 flex-row gap-2 items-center"
                >
                  <Image src={iconImage} alt="Package Card" />
                  <p className="text-[16px] font-semibold  leading-7 font-urbanist">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <Button
              text="Get In Touch"
              bgColor={"bg-brand-1"}
              color={"text-white"}
              btnPadding={"py-3 px-5"}
            />
          </div>
          <div className="w-8/12">
            <Image
              src={serviceImage}
              className="w-full h-full"
              alt="Service Image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;