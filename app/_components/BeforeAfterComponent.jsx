import BeforeAfter from "@/components/ui/beforeAfter";
import React from "react";

const BeforeAfterComponent = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        Before <span className="text-primary">After</span>
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <BeforeAfter imageBefore={"/before.png"} imageAfter={"/after.png"} />
        <BeforeAfter
          imageBefore={"/before-1.png"}
          imageAfter={"/after-1.png"}
        />
      </div>
    </div>
  );
};

export default BeforeAfterComponent;
