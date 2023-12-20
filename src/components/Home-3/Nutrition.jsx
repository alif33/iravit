"use server";
import React from "react";
import Container from "../Container/Container";
import NutritionCard from "./NutritionCard";
import { LuApple } from "react-icons/lu";

const Nutrition = () => {
  return (
    <div className="font-urbanist mt-32 ">
      <Container>
        <div className="">
          {/* top */}
          <div className="">
            <div className="flex flex-row gap-40 items-center">
              <h1 className="text-[#141414] w-6/12  text-5xl font-semibold leading-[54px] ">
                An innovative approach to your{" "}
                <span className="text-[#2A9D8F]">nutrition</span>
              </h1>
              <p className=" w-5/12 text-base font-normal leading-6">
                We provide a variety of services and resources dedicated to
                helping you achieve balance and peace in your life.
              </p>
            </div>
          </div>
          {/* bottom */}
          <div className="py-10 bg-yellow-800">
            <NutritionCard>
              <LuApple />
            </NutritionCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nutrition;
