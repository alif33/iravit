import React from "react";

const Button = ({ text, bgColor, color, btnPadding }) => {
  return (
    <button
      className={`${btnPadding}  font-medium ${color} text-sm ${bgColor} rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
