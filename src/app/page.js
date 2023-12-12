import Image from 'next/image'
import Navbar from "./components/base/navbar";
import Hero from "./components/home/hero";
import Customers from "./components/home/customers";
import About from "./components/home/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Customers />
      <About />
    </>
  );
}
