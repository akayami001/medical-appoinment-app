import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getGallery } from "../_utils/GlobalApi";

const Gallery = async () => {
  const data = await getGallery();
  return (
    <div className="mx-auto w-4/5 max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Our <span className=" text-primary">Gallery</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Welcome to our gallery, where you can visually explore the unique
          experiences and successful treatment processes offered by our health
          tourism agency. From our state-of-the-art facilities to the treatments
          carried out by our expert physicians, every moment is meticulously
          documented. Witness the moments of recovery and the joyful smiles of
          our patients, giving you confidence in embarking on your own health
          journey. Discover detailed images of the services where we combine
          health and comfort seamlessly.
        </p>
      </div>
      <div className="mt-10">
        <Carousel
          opts={{
            align: "center",
            dragFree: false,
          }}
        >
          <CarouselContent className=" mx-auto">
            {data.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className=" basis-full lg:basis-1/2 px-2 py-4 flex flex-col items-center justify-center"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className=" h-64 md:h-96 rounded transition hover:shadow-lg flex flex-col items-center justify-center p-4">
                        {item.attributes?.image && (
                          <Image
                            className="h-full w-full md:object-cover rounded-t-lg mx-auto transition hover:scale-105 duration-300"
                            key={item.id}
                            src={item.attributes?.image?.data.attributes?.url}
                            alt={item.attributes?.name}
                            width={500}
                            height={500}
                          />
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
                              src={item.attributes?.image?.data.attributes?.url}
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
