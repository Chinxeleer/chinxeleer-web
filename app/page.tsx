import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative flex flex-col mt-6 px-2 md:p-0">
      <div>
        <Nav />
        <Hero />
        <h1>Blessing</h1>
      </div>
    </main>
  );
}
