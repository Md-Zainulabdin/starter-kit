import Hero from "@/components/static/Hero";
import Navbar from "@/components/static/Navbar";
import { getAuth } from "@/lib/auth";

export default async function Home() {
  const auth = await getAuth();

  console.log(auth?.user);

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
