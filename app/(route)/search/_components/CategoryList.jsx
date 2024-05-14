"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { data } from "../../../_mocks_/CategoryData.js";
import Image from "next/image";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const CategoryList = () => {
  const params = usePathname();
  const category = params.split("/")[2];

  return (
    <div className="h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {data.length > 0 ? (
              data.map((item) => (
                <CommandItem
                  key={item.id}
                  className="p-2 flex gap-2 items-center rounded-md cursor-pointer w-full"
                >
                  <Link href={`/search/${item?.name}`}>
                    <div
                      className={`p-2 flex gap-2 text-[14px] items-center text-primary rounded-md cursor-pointer   w-full ${
                        category == item.name && "bg-blue-100"
                      }`}
                    >
                      <Image
                        src={item.url}
                        alt="icon"
                        width={25}
                        height={25}
                        className="bg-blue-50"
                      />
                      <label>{item.name}</label>
                    </div>
                  </Link>
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>Your customized empty state or loader</CommandEmpty>
            )}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
