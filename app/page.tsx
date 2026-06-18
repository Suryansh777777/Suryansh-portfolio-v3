import { Hero } from "./sections/hero";
import { Works } from "./sections/works";
import { About } from "./sections/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <About />
      {/* Ticker · FAQ · Pricing · Contact — building next */}
    </main>
  );
}
