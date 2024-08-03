import BeforeAfter from "@/components/ui/beforeAfter";
import React from "react";
import { getBeforeAfter } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";

const BeforeAfterComponent = async () => {
  const data = await getBeforeAfter();
  const t = await getI18n();

  return (
    <div className="">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        {t("beforeAfter")}
      </h2>
      <div className="flex flex-wrap sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {data &&
          data.map((beforeAfter) => (
            <>
              {console.log(beforeAfter)}
              {console.log(beforeAfter.attributes.imagebefore.data.attributes.url)}
              <BeforeAfter
                key={beforeAfter.id}
                imageBefore={beforeAfter.attributes.imagebefore.data.attributes.url}
                imageAfter={beforeAfter.attributes.imageafter.data.attributes.url}
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default BeforeAfterComponent;
