import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../_utils/GlobalApi";

const Categories = async () => {
  const data = await getCategories();

  return (
    <div className="mb-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold md:text-4xl text-center py-3">
        Our <span className=" text-primary">Treatments</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((item) => (
          <Link
            href={"/search/" + item.attributes.name}
            key={item.id}
            className="flex flex-col text-center justify-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-10 hover:scale-110 transition-all ease-in-out"
          >
            <Image
              src={item.attributes?.icon?.data?.attributes?.url}
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
