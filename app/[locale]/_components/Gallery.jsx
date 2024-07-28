import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getI18n } from "@/locales/server";

const Gallery = async ({ data, titleKey, descriptionKey, locale }) => {
  const t = await getI18n(locale);

  return (
    <div className="mx-auto w-4/5 max-w-screen-xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t("our")} <span className="text-primary">{t(titleKey)}</span>
        </h2>
        <p className="mt-4 text-gray-600">
          {descriptionKey ? t(descriptionKey) : t("defaultDescription")}
        </p>
      </div>
      <div className="mt-10">
        <Carousel
          opts={{
            align: "center",
            dragFree: false,
          }}
        >
          <CarouselContent className="mx-auto">
            {data &&
              data.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className={`basis-full ${
                      titleKey === "doctors" ? "lg:basis-1/3" : "lg:basis-1/2"
                    } px-2 py-4 flex flex-col items-center justify-center`}
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="h-64 relative md:h-96 rounded transition hover:shadow-lg flex flex-col items-center justify-center p-4">
                          <Image
                            className={`h-full ${
                              titleKey === "doctors" ? "w-72" : "w-full"
                            } md:object-cover rounded-t-lg mx-auto transition hover:scale-105 duration-300`}
                            key={item.id}
                            src={item.attributes?.image?.data?.attributes?.url}
                            alt={item.attributes?.name}
                            width={500}
                            height={500}
                          />
                          {titleKey === "doctors" && (
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                              <h3 className="text-lg font-semibold">
                                {item.attributes?.name}
                              </h3>
                              <p className="text-sm">
                                {item.attributes?.fields}
                              </p>
                            </div>
                          )}

                          {item.attributes?.video && (
                            <video
                              className="rounded-t-lg mx-auto"
                              key={item.id}
                              controls
                              width={1900}
                              height={900}
                            >
                              <source
                                src={
                                  item.attributes?.image?.data?.attributes?.url
                                }
                                type="video/mp4"
                              />
                            </video>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
