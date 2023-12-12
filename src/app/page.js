import Hero from "./components/home/hero";
import Customers from "./components/home/customers";
import About from "./components/home/about";
import Members from "./components/home/members";
import Packages from "./components/home/packages";
import News from "./components/home/News";

export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <About />
      <Members />
      <Packages />
      <News />
    </>
  );
}
