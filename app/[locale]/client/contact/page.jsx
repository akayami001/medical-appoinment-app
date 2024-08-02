"use client";
import { AtSign, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { createInquri } from "../../_utils/GlobalApi";
import GoogleMap from "../../_components/GoogleMap";
import { useI18n } from "@/locales/client";

const Page = () => {
  const t = useI18n();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const createdInquri = await createInquri({ data: formData });
      setSuccess("Enquiry created successfully!");
    } catch (error) {
      setError("Error creating enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 lg:py-16">
      <section className="bg-white max-w-screen-xl mx-auto lg:flex lg:flex-row lg:justify-around lg:items-center lg:h-screen lg:max-h-[620px] ">
        <section className="relative flex items-end h-32 lg:h-full bg-gray-900">
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
              {t("welcomeMessage")}
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              {t("welcomeDescription")}
            </p>
            <div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex">
                  <MapPin className="mr-1" /> London
                </a>
              </div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex" href="tel:+908504802048">
                  <PhoneCall className="mr-1" /> +90 850 480 20 48
                </a>
              </div>
              <div className="mt-4 leading-relaxed text-white/90">
                <a className="flex" href="mailto:info@healthclinicturkiye.com">
                  <AtSign className="mr-1" /> info@healthclinicturkiye.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="lg:min-w-[470px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="col-span-6">
              <label
                htmlFor="fullName"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
              {t("fullNameLabel")}
                <span className=" text-red-600">*</span>
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("placeholderName")}
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
                Email
                <span className=" text-red-600">*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("placeholderMail")}
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="phone"
                className="block text-gray-600 text-sm font-bold mb-2"
              >
              {t("phoneLabel")}
                
                <span className=" text-red-600">*</span>
              </label>

              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("placeholderPhone")}
              />
            </div>

            <div className="col-span-6">
              <fieldset>
                <legend className="block text-gray-600 text-sm font-bold mb-2">
                  {t("treatmentsLegend")}
                  <span className=" text-red-600">*</span>
                </legend>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="hairTransplant"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="hairTransplant"
                        type="radio"
                        name="treatment"
                        value="hairTransplant"
                        checked={formData.treatment === "hairTransplant"}
                        onChange={handleChange}
                        tabIndex="-1"
                      />
                      <span className="text-sm"> Hair Transplant </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="dentalCare"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="dentalCare"
                        type="radio"
                        name="treatment"
                        value="dentalCare"
                        checked={formData.treatment === "dentalCare"}
                        onChange={handleChange}
                        tabIndex="-1"
                      />
                      <span className="text-sm"> Dental Care </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="plasticSurgery"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="plasticSurgery"
                        type="radio"
                        name="treatment"
                        value="plasticSurgery"
                        checked={formData.treatment === "plasticSurgery"}
                        onChange={handleChange}
                        tabIndex="-1"
                      />
                      <span className="text-sm"> Plastic Surgery </span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="note"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                              {t("message")}

              </label>

              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-y-scroll resize-none"
                placeholder={t("placeholderMessage")}
              ></textarea>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Loading..." : t("sendEnquiryButton")}
              </Button>

              {success && (
                <p className="mt-4 text-sm text-green-600 sm:mt-0">{success}</p>
              )}
              {error && (
                <p className="mt-4 text-sm text-red-600 sm:mt-0">{error}</p>
              )}
            </div>
          </form>
        </main>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <GoogleMap />
      </section>
    </div>

    
  );
};

export default Page;
