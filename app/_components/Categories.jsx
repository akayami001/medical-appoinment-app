import { data } from "../_mocks_/CategoryData";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        {data.map((item) => (
          <Link
            href={"/search/" + item.name}
            key={item.id}
            className="flex flex-col text-center justify-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-10 hover:scale-110 transition-all ease-in-out"
          >
            <Image
              src={item.url}
              alt="icon"
              width={70}
              height={70}
              className="bg-blue-50"
            />
            <label className="text-blue-600 text-sm"> {item.name}</label>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
