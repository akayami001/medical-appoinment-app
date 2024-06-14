'use client'
import Image from "next/image";
import Link from "next/link";

import { data as hospitalData } from '@/app/_mocks_/HospitalData.js';


const HospitalDetails = ({ id }) => {
  console.log(id)
  const hospital = hospitalData.find((h) => h.id === parseInt(id));
  console.log(hospitalData)
  if (!hospital) {
    return <div>Hospital Not Found</div>;
  }

  const { name, overview, images, whyUs, services } = hospital;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="overflow-hidden bg-[url(https://baudentalinternational.com/wp-content/uploads/2023/08/bau-dental-gallery-1-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {name}
            </h2>

            <p className="hidden  text-white/70 md:mt-6 md:block md:text-lg md:leading-relaxed">
            {overview}
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href="contact"
                className="inline-block rounded-md bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src={images[0]}
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Overview</h2>

              <p className="mt-4 text-gray-600">{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <Image
                alt=""
                src={images[1]}
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl">Why Us</h2>

              <p>{whyUs}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src={images[2]}
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>

              <ul>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
