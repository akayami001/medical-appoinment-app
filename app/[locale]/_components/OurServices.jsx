import Image from "next/image";
import { getServices } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";

const OurServices = async () => {
  const data = await getServices();
  const t = await getI18n();

  return (
    <section className="mx-auto max-w-screen-xl px-10 py-8 md:px-5">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t("ourServices")}
          <span className="text-primary"> {t("services")}</span>
        </h2>

        <p className="mt-4 text-gray-600">
          {t("atHealthClinic")}
        </p>
      </div>
      <div className="mt-8 flex justify-center flex-wrap gap-5">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col text-center mx-auto">
            <Image
              className="transition ease-in-out delay-150 border rounded-full aspect-square object-cover hover:-translate-y-1  hover:border-4 hover:border-primary hover:scale-110 duration-300"
              src={item?.attributes?.image?.data?.attributes?.url}
              width={180}
              height={180}
              alt={item?.attributes?.name}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              loading="lazy"
            />
            <h2 className="text-primary text-lg pt-4">
              {item?.attributes?.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
