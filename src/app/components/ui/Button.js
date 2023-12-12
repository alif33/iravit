import React from "react";

const Button = ({ text }) => {
  return (
    <button className="py-3 px-6 border font-medium text-white text-sm bg-brand-1 rounded-md">
      {text}
    </button>
  );
};

export default Button;
