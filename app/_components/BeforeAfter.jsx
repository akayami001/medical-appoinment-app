"use client";

import Image from "next/image";
import React, { useState } from "react";

const BeforeAfter = ({ name, imageBefore, imageAfter }) => {
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
			className="relative w-full p-3 justify-center items-center hover:-translate-y-5 transition-all ease-in-out"
			onMouseUp={handleMouseUp}
		>
			<div className="relative text-center w-full items-center justify-center p-3 mb-3">
				<h1 className="relative text-center text-primary items-center justify-center p-3 mb-2 text-sm md:text-xl lg:text-2xl">
					{name}
				</h1>
			</div>
			<div
				className="relative w-full max-w-[366px] aspect-[77/55] m-auto overflow-hidden select-none justify-center items-center p-1"
				onMouseMove={handleMove}
				onMouseDown={handleMouseDown}
				onPointerEnter={handleMouseDown}
				onPointerLeave={handleMouseUp}
			>
				<Image
					fill
					priority
					alt="image-before"
					src={imageBefore}
					className="rounded-xl"
				/>
				<div
					className="absolute top-0 left-0 right-0 w-full max-w-[900px] aspect-[77/55] m-auto overflow-hidden"
					style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
				>
					<Image
						fill
						priority
						alt="image-after"
						src={imageAfter}
						className="rounded-xl"
					/>
				</div>
				<div
					className="absolute top-0 bottom-0 w-2 bg-black cursor-ew-resize transition"
					style={{ left: `calc(${sliderPosition}% - 1px)` }}
				>
					<div className="absolute bg-white h-2 w-3 -left-1 top-[calc(50%-5px)]" />
				</div>
			</div>
		</div>
	);
};

export default BeforeAfter;
