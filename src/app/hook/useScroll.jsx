// UseScroll.js
import React from "react";
import Cursor from "./Cursor"; // Adjust the path as needed

const UseScroll = ({ children }) => {
  return (
    <>
      <Cursor />

      <div className="cursor-dot" id="data-cursor-dot"></div>
      <div className="cursor-outline" id="data-cursor-outline"></div>

      {children}
    </>
  );
};

export default UseScroll;
