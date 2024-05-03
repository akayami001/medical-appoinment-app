import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import data from "./_mocks_/DoctorsData"

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList data={data}/>
     
    </div>
  );
}
