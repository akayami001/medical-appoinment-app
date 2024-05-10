import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import DoctorList from "./_components/DoctorList";
import OurServices from "./_components/OurServices";
import BeforeAfter from "./_components/BeforeAfter";

export default function Home() {
	return (
		<div>
			<Hero />
			<Categories />
			<BeforeAfter />
			<DoctorList />
			<OurServices />
		</div>
	);
}
