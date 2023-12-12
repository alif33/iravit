import React from "react";

const OutlineButton = ({ text }) => {
  return (
    <button className="py-2 px-3 border border-gray-400 rounded-md">
      {text}
    </button>
  );
};

export default OutlineButton;
