import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import DoctorList from "./_components/DoctorList";
import OurServices from "./_components/OurServices";
import Gallery from "./_components/Gallery";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <DoctorList />
      <Testimonials/>
      <OurServices />
      <Gallery />
    </div>
  );
}
