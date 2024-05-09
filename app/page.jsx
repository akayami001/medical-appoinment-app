import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import DoctorList from "./_components/DoctorList";
import OurServices from "./_components/OurServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <DoctorList />
      <OurServices />
    </div>
  );
}
