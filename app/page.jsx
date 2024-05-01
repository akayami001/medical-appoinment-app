import Image from "next/image";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="">Home</h1>
      <CategorySearch />
    </main>
  );
}
