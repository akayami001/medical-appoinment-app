import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
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

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary hover:text-primary"
                href="/contact"
              >
                <Image src="/whatsapp.png" alt="whatsapp" width={25} height={25}/>
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
