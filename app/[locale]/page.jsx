import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"), {
  loading: () => <p>Loading...</p>
});
const Categories = dynamic(() => import("./categories/page"), {
  loading: () => <p>Loading categories...</p>
});
const HospitalList = dynamic(() => import("./hospitals/page"), {
  loading: () => <p>Loading hospitals...</p>
});
const BeforeAfterComponent = dynamic(() => import("./_components/BeforeAfterComponent"), {
  loading: () => <p>Loading...</p>
});
const Testimonials = dynamic(() => import("./_components/Testimonials"), {
  loading: () => <p>Loading...</p>
});
const MainGallery = dynamic(() => import("./_components/MainGallery"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const OurServices = dynamic(() => import("./_components/OurServices"), {
  loading: () => <p>Loading...</p>
});

export default function Page() {

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
