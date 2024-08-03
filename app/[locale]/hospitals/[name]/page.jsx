import Image from "next/image";
import Link from "next/link";
import { getHospitalsByName } from "../../_utils/GlobalApi";
import { getI18n } from "@/locales/server";

const HospitalDetails = async ({ params }) => {
  const hospital = await getHospitalsByName(params?.name);
  const { attributes } = hospital;
  const imageUrl = attributes.image.data.attributes.formats.large.url;
  const t = await getI18n();

  const getImageUrl = (imageArray) => {
    if (imageArray && imageArray.length > 0) {
      const formats = imageArray[0].attributes.formats;
      return (
        formats.medium?.url ||
        formats.large?.url ||
        formats.small?.url ||
        formats.thumbnail?.url
      );
    }
    return null;
  };

  const overviewImageUrl = getImageUrl(attributes.overviewImage.data);
  const visionImageUrl = getImageUrl(attributes.visionImage.data);
  const missionImageUrl = getImageUrl(attributes.missionImage.data);
  const servicesImageUrl = attributes.servicesImage.data.attributes.url;
  const imageWidth = 1200;
  const imageHeight = 800;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div
        className="overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              {attributes.name}
            </h2>
            <div className="mt-4 sm:mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-4">
            {overviewImageUrl && (
              <Image
                alt="Overview"
                src={overviewImageUrl}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="lg:w-1/2 p-4 lg:pl-8 lg:order-first">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("overviewTitle")}</h2>
            <p className="mt-4 text-gray-600">{attributes.overview}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-4 lg:pl-8">
            {visionImageUrl && (
              <Image
                alt="Vision"
                src={visionImageUrl}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("visionTitle")}</h2>
            <p className="mt-4 text-gray-600">{attributes.vision}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-4">
            {missionImageUrl && (
              <Image
                alt="Mission"
                src={missionImageUrl}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="lg:w-1/2 p-4 lg:pl-8 lg:order-first">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("missionTitle")}</h2>
            <p className="mt-4 text-gray-600">{attributes.mission}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-4 lg:pl-8">
            {servicesImageUrl && (
              <Image
                alt="Services"
                src={servicesImageUrl}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("servicesTitle")}</h2>
            {attributes.departments.data.map((department) => (
              <h2
                key={department.id}
                className="text-xs bg-blue-100 p-1 rounded-full px-2 text-primary m-2"
              >
                {department.attributes.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
