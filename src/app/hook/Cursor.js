"use client";
import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleMouseMove = (e) => {
    const newX = e.clientX;
    const newY = e.clientY;

    setPosX(newX);
    setPosY(newY);
  };

  useEffect(() => {
    const cursorDot = document.querySelector("#data-cursor-dot");
    const cursorOutline = document.querySelector("#data-cursor-outline");

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  }, [posX, posY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default Cursor;
