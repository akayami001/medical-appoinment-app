"use client";

import Image from "next/image";
import React, { useState } from "react";

const BeforeAfter = ({ imageBefore, imageAfter }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative m-5 w-full sm:w-6/12 md:w-4/12 lg:w-3/12 border p-5"
      onMouseUp={handleMouseUp}
    >
      <div
        className="relative w-full max-w-[400px] aspect-[77/55] m-auto overflow-hidden select-none border"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onPointerEnter={handleMouseDown}
        onPointerLeave={handleMouseUp}
      >
        <Image fill priority alt="image-after" src={imageAfter} />
        <div
          className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image fill priority alt="image-before" src={imageBefore} />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transition"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="absolute bg-white h-2 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
