import dynamic from "next/dynamic";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import HospitalList from "./_components/HospitalList";
import OurServices from "./_components/OurServices";
import Testimonials from "./_components/Testimonials";
import BeforeAfterComponent from "./_components/BeforeAfterComponent";

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
      <MainGallery title="Doctors" />
      <OurServices />
    </div>
  );
}
