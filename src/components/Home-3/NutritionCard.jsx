"use server";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NutritionCard = ({ children, title, details }) => {
  return (
    <div className="p-6 rounded-lg">
      <div className="">{children}</div>
      <h3 className="text-xl font-semibold text-[#333B47]">{title}</h3>
      <p className="">{details}</p>
      <button>
        Read More <FaArrowRightLong />
      </button>
    </div>
  );
};

export default NutritionCard;
