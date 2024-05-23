import Image from "next/image";
import { getHospitals } from "../_utils/GlobalApi";

const HospitalList = async () => {
  const data = await getHospitals();

  return (
    <div className="container mx-auto p-8 mb-10">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        Our
        <span className="text-primary pl-2">Hospitals</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 justify-center">
        {data &&
          data.map((hospital, i) => (
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
                  {hospital.attributes.departments.data.map((department, i) => (
                    <h2
                      key={i}
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
                  {hospital.attributes.locations.data.map((location, i) => (
                    <h2 key={i} className="text-primary text-sm pe-2">
                      {location.attributes.location}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HospitalList;
