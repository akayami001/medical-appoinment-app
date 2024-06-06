import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import HospitalList from "./hospitals/page";
import OurServices from "./_components/OurServices";
import Gallery from "./_components/Gallery";
import Testimonials from "./_components/Testimonials";
import BeforeAfterComponent from "./_components/BeforeAfterComponent";
import WhatsAppIcon from "./_components/WhatsAppIcon";

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
      <WhatsAppIcon/>
    </div>
  );
}
