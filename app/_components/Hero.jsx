import { Button } from "@/components/ui/button";
import Image from "next/image";
import WhatsAppContact from "./WhatsAppContact";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/doctors.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full rounded-3xl object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find & Book <span className="text-primary">Top-Notch Patient Experience in Turkiye!</span> &
              <span className="text-primary pl-2">Stay at the Pinnacle!</span>
            </h2>

            <p className="mt-4 text-gray-600">
            Revolutionary facilities, expert professionals, and bespoke care redefine the pinnacle of healthcare excellence..
            </p>
            <WhatsAppContact phoneNumber="+491783739057" message="Hi there! I have a question..."/>
            <Button  className="mt-10 ml-10">Refer&Earn</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
