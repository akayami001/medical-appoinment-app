"use client";

import Image from "next/image";
import React, { useState } from "react";

const BeforeAfter = () => {
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

	const imageBefore =
		"https://www.topgear.com/sites/default/files/2023/04/1%20Bentley%20Flying%20Spur%20Speed.jpg";
	const imageAfter =
		"https://hips.hearstapps.com/hmg-prod/images/2021-bentley-flying-spur-v8-106-1611696475.jpg";

	return (
		<div className="relative m-5 w-full border p-5" onMouseUp={handleMouseUp}>
			<div className=" text-center items-center w-fulL m-3 justify-center text-2xl ">
				<h1>
					BEFORE AFTER <br />
					Image Comparison Slider
				</h1>
			</div>
			<div
				className="relative w-full max-w-[900px] aspect-[77/55] m-auto overflow-hidden select-none border "
				onMouseMove={handleMove}
				onMouseDown={handleMouseDown}
				onPointerEnter={handleMouseDown}
				onPointerLeave={handleMouseUp}
			>
				<Image fill priority alt="image-before" src={imageBefore} />
				<div
					className="absolute top-0 left-0 right-0 w-full max-w-[900px] aspect-[77/55] m-auto overflow-hidden"
					style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
				>
					<Image fill priority alt="image-after" src={imageAfter} />
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
