import { ImagesCards } from "./_components/cards";
import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Summary from "./_components/summary";

export default function Home() {
  return (
    <div>
      <Hero />
      <Summary />
      <ImagesCards />
      <Contact />
    </div>
  );
}
