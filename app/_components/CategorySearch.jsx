import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { data } from "../_mocks_/CategoryData";
import Image from "next/image";

const CategorySearch = () => {
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search your Doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  ">
        {data.map((item) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
