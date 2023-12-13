import React from "react";

const Button = ({ text, bgColor, color, btnPadding, children }) => {
  return (
    <button
      className={`${btnPadding} ${children && "flex flex-row gap-2 items-center"}  font-medium ${color} text-sm ${bgColor} rounded-md`}
    >
      {text} {children}
    </button>
  );
};

export default Button;
