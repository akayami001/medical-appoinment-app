import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../_utils/GlobalApi";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

// const getCategories = async () => {
//   const res = await fetch(
//     "https://better-wealth-48913fa7ae.strapiapp.com/api/categories?populate=*",
//     {
//       // cache: "no-store",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data.data;
// };

const Categories = async () => {
  const data = await getCategories();
  console.log(data);
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        {data.map((item) => (
          <Link
            href={"/search/" + item.attributes.name}
            key={item.id}
            className="flex flex-col text-center justify-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-10 hover:scale-110 transition-all ease-in-out"
          >
            <Image
              src={item.attributes?.icon?.data.attributes?.url}
              alt="icon"
              width={300}
              height={200}
              className="bg-blue-50 h-48 w-52"
            />
            <label className="text-primary text-sm">
              {item.attributes.name}
            </label>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
