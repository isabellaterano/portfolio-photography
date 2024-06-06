import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Summary from "./_components/summary";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Summary />
      <Testimonials />
      <Contact />
    </div>
  );
}
