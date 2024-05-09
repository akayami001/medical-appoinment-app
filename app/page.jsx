import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import OurServices from "./_components/OurServices";
import Gallery from "./_components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList/>
      <OurServices />
      <Gallery />
    </div>
  );
}
