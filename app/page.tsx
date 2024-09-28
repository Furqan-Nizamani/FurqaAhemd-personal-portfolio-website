import Image from "next/image";
import Hero from "./componets/hero/page";
import About from "./componets/about/page";
import Services from "./componets/sarvices/page";
import CardHoverEffectDemo from "./componets/Projacts/page"
import Contect from "./componets/contect/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <span className="hidden xl:block">
      <About />
      <Services />
      <CardHoverEffectDemo/>
      <Contect/>
      </span>
    </main>
  );
}
