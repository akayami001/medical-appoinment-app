import Image from "next/image";
import Link from "next/link";
import { getI18n } from "@/locales/server";
import { getCategories } from "../_utils/GlobalApi";

const Categories = async () => {
  const data = await getCategories();
  const t = await getI18n();

  return (
    <div className="mb-10 max-w-screen-xl mx-auto px-5">
      <h2 className="text-3xl font-bold md:text-4xl text-center py-3">
        {t("treatments")}
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((item) => {
          const iconUrl = item.attributes.icon.data[0]?.attributes?.url;

          return (
            <Link
              href={`/categories/${item.id}`}
              key={item.id}
              className="w-60 bg-blue-50 rounded-lg overflow-hidden shadow-lg py-8 hover:scale-110 transition-all ease-in-out"
            >
              <div className="w-52 h-52 relative mx-auto">
                {iconUrl && (
                  <Image
                    src={iconUrl}
                    alt={`${item.attributes.name} icon`}
                    fill
                    className="object-cover aspect-square"
                  />
                )}
              </div>

              <p className="text-primary text-sm text-center pt-11">
                {item.attributes.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
