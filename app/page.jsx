import Hero from "./_components/Hero";
import HospitalList from "./hospitals/page";
import OurServices from "./_components/OurServices";
import Gallery from "./_components/Gallery";
import Testimonials from "./_components/Testimonials";
import BeforeAfterComponent from "./_components/BeforeAfterComponent";
import Categories from "./categories/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <HospitalList />
      <BeforeAfterComponent />
      <Testimonials />
      <Gallery />
      <OurServices />
    </div>
  );
}
