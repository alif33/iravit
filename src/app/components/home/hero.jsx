import React from "react";
import heroImage from "../../../assets/hero.png";
import Image from "next/image";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-row mt-20 items-center justify-between ">
        {/* Hero left */}
        <div className="flex flex-col flex-1">
          <div className="max-w-[464px] ">
            <h1 className="text-h1 font-poppins  text-brand-2 font-semibold leading-[80px]">
              Developing Innovative Solutions
            </h1>
            <p className="text-lg mt-6 text-greyscale-600 font-urbanist">
              {"we are a startup based on solutions."}
              <br />
              {"what you're searching for, and we'll"}
            </p>
            <div className="flex flex-row gap-5 mt-8">
              <div className="">
                <Button
                  bgColor={"bg-brand-1 text-white"}
                  btnPadding={"py-3 px-6"}
                  text="Try For Free"
                />
              </div>
              <div className="">
                <OutlineButton text="Watch Video" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right */}
        <div className="flex-1 flex justify-end">
          <Image className="w-10/12" src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
