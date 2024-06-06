import dynamic from "next/dynamic";
import Hero from "./_components/Hero";
import HospitalList from "./hospitals/page";
import OurServices from "./_components/OurServices";
import Testimonials from "./_components/Testimonials";
import BeforeAfterComponent from "./_components/BeforeAfterComponent";
import Categories from "./categories/page";

const MainGallery = dynamic(() => import("./_components/MainGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <HospitalList />
      <BeforeAfterComponent />
      <Testimonials />
      <MainGallery title="Gallery" />
      <MainGallery title="Our Doctors" />
      <OurServices />
    </div>
  );
}
