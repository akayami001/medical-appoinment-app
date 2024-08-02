import Image from "next/image";
import { getI18n } from "@/locales/server";
import { getCategoryById } from "../../_utils/GlobalApi";

const CategoryDetail = async ({ params }) => {
  const { categoriesId } = params;
  const data = await getCategoryById(categoriesId);
  const t = await getI18n();

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    name: categoryName,
    nameText,
    obenText,
    media,
    underText,
  } = data.attributes;

  const mediaUrl = media?.data[0]?.attributes?.url;

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center items-center header-bg-color bg-curved">
        <div className="text-white p-2 sm:w-1/3">
          <h1 className="text-4xl mb-4">{categoryName}</h1>
          <p className="text-xl">{nameText}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg mt-12 sm:w-1/3 sm:w-1/1 flex">
          <div className="w-2/3 p-8">
            <h2 className="text-2xl font-bold mb-4">
              {t("getFreeConsultation")}
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("fullName")}
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("phone")}
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    🇺🇸
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="flex-1 block w-full min-w-0 border border-gray-300 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("message")}
                </label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm overflow-y-scroll resize-none"
                  rows="4"
                  id="message"
                  placeholder={t("placeholderMessage")}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white header-bg-color hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex">
            <Image
              src={"/Screenshot.png"}
              alt="Image"
              width={870}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 justify-center items-center mt-12">
        <div className="mt-8">
          <h3 className="text-3xl m-2 text-gray-900">{t("overview")}</h3>
          <p className="m-2 text-md text-gray-600">{obenText}</p>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap">
            <Image
              src={mediaUrl}
              alt={`${categoryName} media`}
              width={600}
              height={200}
              className="object-cover m-2"
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="m-4 text-md text-gray-600">{underText}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
