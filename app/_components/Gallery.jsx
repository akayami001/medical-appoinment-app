import Image from "next/image";
import { data } from "../_mocks_/GalleryData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="mx-auto w-4/5 max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Our <span className=" text-primary">Gallery</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p>
      </div>
      <div className="mt-10">
        <Carousel
          opts={{
            align: "center",
            dragFree: false,
          }}
        >
          <CarouselContent className="-ml-1">
            {data.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className=" md:basis-2/3 lg:basis-8/10 xl:basis-9/10 px-2 py-4 flex flex-col items-center justify-center"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="rounded transition hover:shadow-lg flex flex-col items-center justify-center p-4">
                        {item.type === "image" && (
                          <Image
                            className="h-56 rounded-t-lg mx-auto transition hover:scale-105 duration-300"
                            key={item.id}
                            src={item.image}
                            alt={item.alt}
                            layout="responsive"
                            width={1900}
                            height={900}
                          />
                        )}
                        {item.type === "video" && (
                          <video
                            className="rounded-t-lg mx-auto"
                            key={item.id}
                            controls
                            width={1900}
                            height={900}
                          >
                            <source src={item.image} type="video/mp4" />
                          </video>
                        )}
                      </CardContent>
                    </Card>
                    <p className="flex flex-col text-md font-medium justify-start p-2">
                      {item.alt}
                    </p>
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
