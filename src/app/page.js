import Image from 'next/image'
import Navbar from './components/base/navbar'
import Container from "./components/ui/Container";
import Hero from "./components/home/hero";
import Customers from "./components/home/customers";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Customers />
    </Container>
  );
}
