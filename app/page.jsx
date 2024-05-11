import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import HospitalList from "./_components/HospitalList";
import OurServices from "./_components/OurServices";
import Gallery from "./_components/Gallery";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <HospitalList />
      <Testimonials/>
      <OurServices />
      <Gallery />
    </div>
  );
}
