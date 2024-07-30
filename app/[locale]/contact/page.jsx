import { AtSign, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import GoogleMap from "../_components/GoogleMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-5 lg:py-16">
      <section className="bg-white max-w-screen-xl mx-auto lg:flex lg:flex-row lg:justify-around lg:items-center lg:h-screen lg:max-h-[620px] ">
        <section className="relative flex items-end h-32 lg:h-full  bg-gray-900 ">
          <Image
            alt="hospital-call"
            fill
            src="/call.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white accent-white" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/healthclinicturkey-favicon-color.png"
                alt="Health Clinic Turkey Logo"
                width={300}
                height={100}
                className="h-42"
              />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {/* {t("welcomeMessage")} */}
              Welcome to Health Services 🩺
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Welcome to our health clinic, where your well-being is our
              priority.
            </p>
            <div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex" href="tel:+">
                  <MapPin className="mr-1" /> London
                </a>
              </div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex" href="tel:+">
                  <PhoneCall className="mr-1" /> 0850 480 20 48
                </a>
              </div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex" href="mailto:">
                  <AtSign className="mr-1" /> info@healthclinicturkiye.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="lg:min-w-[470px]">
          <div className="relative -mt-16 block lg:hidden">
            <Link
              className="inline-flex size-16 items-center justify-center rounded-full bg-white text-primary sm:size-20"
              href="/"
            >
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="rounded-lg bg-white shadow-lg max-w-lg p-5 mx-auto">
            <h2 className="text-xl pb-5">Contact Form</h2>
            <form action="#" className="space-y-4">
              <div>
                <label
                  class="block text-gray-600 text-sm font-bold mb-2"
                  for="name"
                >
                  Full Name<span className=" text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  class="block text-gray-600 text-sm font-bold mb-2"
                  for="email"
                >
                  Email<span className=" text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  class="block text-gray-600 text-sm font-bold mb-2"
                  for="phone"
                >
                  Phone<span className=" text-red-600">*</span>
                </label>

                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <fieldset>
                <legend className="block text-gray-600 text-sm font-bold mb-2">
                  {/* {t("treatmentsLegend")} */}
                  Treatments
                  <span className="text-red-600">*</span>
                </legend>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="hairTransplant"
                      className="block w-full cursor-pointer rounded-lg border 
                        bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="hairTransplant"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Hair Transplant </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="dentalCare"
                      className="block w-full cursor-pointer rounded-lg border 
                        bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="dentalCare"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Dental Care </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="plasticSurgery"
                      className="block w-full cursor-pointer rounded-lg border 
                        bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="plasticSurgery"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Plastic Surgery </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div>
                <label
                  class="block text-gray-600 text-sm font-bold mb-2"
                  for="phone"
                >
                  Note
                </label>

                <textarea
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-y-scroll resize-none"
                  rows="4"
                  id="message"
                  placeholder="Enter any additional information or concerns "
                ></textarea>
              </div>
              <Button className="w-full" type="submit">
                Send Enquiry
              </Button>
            </form>
          </div>
        </main>
      </section>
      <div>
        <GoogleMap />
      </div>
    </div>

    // <section className="">
    //   <div className=" max-h-96 max-w-screen-xl px-5 grid grid-cols-1 lg:grid-cols-2 mx-auto ">
    //     <Image
    //       src="/call.jpg"
    //       alt="Health Clinic Turkey Logo"
    //       width={500}
    //       height={100}
    //     />

    //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //       <div class="mb-4">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           Username
    //         </label>
    //         <input
    //           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Please enter your name"
    //         />
    //       </div>
    //       <div class="mb-6">
    //         <label
    //           class="block text-gray-700 text-sm font-bold mb-2"
    //           for="email"
    //         >
    //           Email
    //         </label>
    //         <input
    //           class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="email"
    //           type="email"
    //           placeholder="Please enter your email"
    //         />
    //         <p class="text-red-500 text-xs italic">Please choose a password.</p>
    //       </div>
    //       <div class="flex items-center justify-between">
    //         <button
    //           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Sign In
    //         </button>
    //         <a
    //           class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </form>
    //     <p class="text-center text-gray-500 text-xs">
    //       &copy;2020 Acme Corp. All rights reserved.
    //     </p>
    //   </div>
    //   <GoogleMap />
    // </section>
  );
};

export default page;