import Image from "next/image";
import { getHospitals } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";
import Link from "next/link";

const HospitalList = async () => {
  const data = await getHospitals();
  const t = await getI18n();

  return (
    <div className="container mx-auto p-8 mb-10">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        {t("ourHospitals")}
        <span className="text-primary pl-2">{t("hospitals")}</span>
      </h2>
      <div className="flex flex-wrap gap-7 justify-center">
        {data &&
          data.map((hospital) => (
            <Link
              href={`/hospitals/${hospital.id}`}
              key={hospital.id}
              className="flex flex-col text-center justify-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-10 hover:scale-110 transition-all ease-in-out"
            >
              <div
                key={hospital.attributes.name}
                className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8 max-w-96"
              >
                <Image
                  src={hospital.attributes.image.data.attributes.url}
                  alt={hospital.attributes.name}
                  width={500}
                  height={200}
                  className="w-full h-48 object-top md:h-64 lg:h-80 object-cover rounded-t-lg"
                />
                <div className="mt-4 md:mt-6 lg:mt-8">
                  <div className="flex flex-wrap">
                    {hospital.attributes.departments.data.map((department) => (
                      <h2
                        key={department.id}
                        className="text-xs bg-blue-100 p-1 rounded-full px-2 text-primary mr-2"
                      >
                        {department.attributes.name}
                      </h2>
                    ))}
                  </div>
                  <h2 className="font-bold text-lg">
                    {hospital.attributes.name}
                  </h2>
                  <div className="flex flex-wrap">
                    {hospital.attributes.locations.data.map((location) => (
                      <h2
                        key={location.id}
                        className="text-primary text-sm pe-2"
                      >
                        {location.attributes.location}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HospitalList;
