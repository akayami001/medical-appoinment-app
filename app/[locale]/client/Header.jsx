import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../_components/HamburgerMenu";
import { getLogo } from "../_utils/GlobalApi";
import { getI18n } from "@/locales/server";
import LanguageHeader from "@/app/LanguageHeader";

const Header = async () => {
  const logoData = await getLogo();
  const t = await getI18n();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {logoData[0] && (
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image
              src={logoData[0].attributes?.logo?.data?.attributes?.url}
              alt="Health Clinic Turkey Logo"
              width={200}
              height={50}
              className="h-12"
            />
          </Link>
        )}
        <div className="flex items-center">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/about"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/gallery"
                >
                  {t("gallery")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/blog"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/client/contact"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageHeader />
          <HamburgerMenu logoData={logoData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
