import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import OurServices from "./_components/OurServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <OurServices />
    </div>
  );
}
