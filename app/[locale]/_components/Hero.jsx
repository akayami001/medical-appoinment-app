import Image from "next/image";
import WhatsAppContact from "./WhatsAppContact";
import { getI18n } from "@/locales/server";

const Hero = async () => {
  const t = await getI18n();

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
              {t("findBook")}
              <span className="text-primary">
                {t("topNotchExperience")}
              </span>
               &<span className="text-primary pl-2">{t("stayPinnacle")}</span>
            </h2>

            <p className="mt-4 text-gray-600">
              {t("revolutionaryFacilities")}
            </p>
            <WhatsAppContact
              phoneNumber="+908504802048"
              message="Hi there! I have a question..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
