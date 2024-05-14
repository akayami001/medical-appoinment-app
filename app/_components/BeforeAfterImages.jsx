import React from "react";
import BeforeAfter from "./BeforeAfter";

function BeforeAfterImages() {
	return (
		<div className="relative w-full flex-col p-1 justify-center items-center">
			<h1 className="relative w-full flex p-1 justify-center items-center font-bold text-xl md:text-4xl  hover:scale-110 transition-all ease-in-out">
				Before & After Images
			</h1>
			<div className="grid grid-cols-1 gap-y-3 gap-x-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 p-3 md:p-5 lg:p-7">
				<BeforeAfter
					name="Dental"
					imageBefore="/before.png"
					imageAfter="/after.png"
				/>
				<BeforeAfter
					name="Hair Transplant"
					imageBefore="/before-1.png"
					imageAfter="/after-1.png"
				/>
				<BeforeAfter
					name="Aesthetic"
					imageBefore="https://onlinedoctor.lloydspharmacy.com/blob/122142/39e9a148eac8b5bccabe117f726b0629/hair-transplant-costs---picture-data.jpg"
					imageAfter="https://www.shutterstock.com/image-photo/young-man-dentist-dental-care-260nw-1487158082.jpg"
				/>
				<BeforeAfter
					name="Genetic"
					imageBefore="https://www.northjersey.com/gcdn/presto/2021/11/09/PNJM/c16abe59-b6d3-47ac-8496-2f82b5fcb509-Header.jpeg"
					imageAfter="https://www.dentalhairclinicturkey.com/wp-content/uploads/2021/11/CVpoHWuAVW3-500x500.jpg"
				/>
			</div>
		</div>
	);
}

export default BeforeAfterImages;
