

import Image from "next/image";
import Link from "next/link";
import { getHospitals } from "@/app/_utils/GlobalApi";

export async function getStaticPaths() {
  const data = await getHospitals();
  const paths = data.map((hospital) => ({
    params: { id: hospital.id.toString() },
  }));
  return { paths, fallback: false };
}

// export async function getStaticProps({ params }) {
//   const data = await getHospitals();
//   const hospital = data.find((h) => h.id === parseInt(params.id));
//   return { props: { hospital } };
// }

const HospitalDetails = ({ hospital }) => {

  

  //error page not found

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="overflow-hidden bg-[url(https://baudentalinternational.com/wp-content/uploads/2023/08/bau-dental-gallery-1-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Bau Dental
            </h2>

            <p className="hidden  text-white/70 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Our health clinic is one of the Medicinity companies. Like the
              other businesses within Medicinity, our health clinic aims to be a
              successful and high-quality solution partner in the healthcare
              tourism industry.
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
                src="/baudental2.jpg"
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Overview</h2>

              <p className="mt-4 text-gray-600">Our health clinic is one of the Medicinity companies. Like the
                other businesses within Medicinity, our clinic aims to be a
                successful and high-quality solution partner in the healthcare
                tourism industry. We offer a full range of aesthetic operations,
                dental treatments, and hair transplant procedures, all under the
                supervision of professional doctors and well-trained staff. We
                provide 24/7 support whenever you need it, both during and after
                the procedure.</p>
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
                src="/baudental3.jpg"
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl">Why Us</h2>

              <p>  Our health clinic has grown from a commitment to providing
                differentiated healthcare solutions for our customers,
                prioritizing quality, trust, and diversity. We are dedicated to
                meeting and exceeding the full spectrum of our customers&apos;
                expectations—from the comfort of their homes to their safe
                return home—by offering high-level support and continuous care.
                We advocate for everyone who chooses our services, helping them
                heal, feel better, and enhance their quality of life.</p>
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
                src="/baudental4.jpg"
                width={200}
                height={200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>

              <ul>
                <li>
                  <h6>Dental Care</h6>
                  <h6>Dental Implants</h6>
                  <h6>Fillings</h6>
                  <h6>Crowns</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
