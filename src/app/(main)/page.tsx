import Hero from "@/components/static/Hero";
import Navbar from "@/components/static/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section className="mx-auto w-full">
        <Hero />
      </section>
    </div>
  );
}
