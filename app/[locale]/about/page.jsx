import Link from "next/link";
import { getLogo } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";
import Testimonials from "../_components/Testimonials";

const About = async () => {
  const logoData = await getLogo();
  const t = await getI18n();

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-[url(https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
          <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              {t("about")}
              </h2>

              <p className="hidden  text-white/70 md:mt-6 md:block md:text-lg md:leading-relaxed">
              {t("aboutText")}
              </p>

              <div className="mt-4 sm:mt-8">
                <Link
                  href="contact"
                  className="inline-block rounded-md bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring"
                >
                 {t("contactUs")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourVision")}</h2>
          <p className="mt-4 text-gray-600">{t("visionContent")}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourMission")}</h2>
          <p className="mt-4 text-gray-600">{t("missionContent")}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ourCulture")}</h2>
          <p className="mt-4 text-gray-600">{t("cultureContent")}</p>
        </div>

        <Testimonials />

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61559283804361"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/healthclinictr/?igsh=bXVncjZ1OW16OTln"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 15.284 2 14.94 2 12.315v-.08c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.231 2.013 9.575 2 12.2 2h.115zm-.098 1.802h-.02c-2.564 0-2.87.01-3.884.058-.94.043-1.448.2-1.785.332-.45.174-.772.384-1.11.722a3.098 3.098 0 00-.722 1.11c-.133.336-.289.845-.332 1.785-.047 1.013-.058 1.32-.058 3.884v.04c0 2.564.01 2.87.058 3.884.043.94.2 1.448.332 1.785.174.45.384.772.722 1.11.337.337.66.548 1.11.722.336.133.845.289 1.785.332 1.013.047 1.32.058 3.884.058h.04c2.564 0 2.87-.01 3.884-.058.94-.043 1.448-.2 1.785-.332.45-.174.772-.384 1.11-.722.337-.337.548-.66.722-1.11.133-.336.289-.845.332-1.785.047-1.013.058-1.32.058-3.884v-.04c0-2.564-.01-2.87-.058-3.884-.043-.94-.2-1.448-.332-1.785a3.098 3.098 0 00-.722-1.11 3.098 3.098 0 00-1.11-.722c-.336-.133-.845-.289-1.785-.332-1.013-.047-1.32-.058-3.884-.058h-.02zm0 1.802a5.43 5.43 0 015.435 5.435 5.43 5.43 0 01-5.435 5.435 5.43 5.43 0 01-5.435-5.435 5.43 5.43 0 015.435-5.435zm0 1.802a3.634 3.634 0 00-3.633 3.633 3.634 3.634 0 003.633 3.633 3.634 3.634 0 003.633-3.633 3.634 3.634 0 00-3.633-3.633zm4.474-2.8a1.064 1.064 0 11-2.128 0 1.064 1.064 0 012.128 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/health-clinic-turkey-307348233/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2.5 9.208h5v11.292h-5V9.208zm7.994 0h4.785v1.581h.065c.67-1.258 2.31-2.583 4.755-2.583 5.082 0 6.017 3.342 6.017 7.686v8.608h-5V17.58c0-1.457-.026-3.33-2.023-3.33-2.024 0-2.335 1.581-2.335 3.219v3.029h-5v-11.29h4.73v1.538z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
