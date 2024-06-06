import Image from "next/image";
import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
        <Link className="block text-teal-600" href="./">
          <span className="sr-only">Home</span>
          <Image
            src="/healthclinicturkey-high-resolution-logo-transparent.png"
            alt="Health Clinic Turkey Logo"
            width={300}
            height={100}
            className="h-42"
          />
        </Link>

        <div className="flex items-center">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/about"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-primary"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
