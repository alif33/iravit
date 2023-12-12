import Image from 'next/image'
import Navbar from './components/base/navbar'
import Container from "./components/ui/Container";
import Hero from "./components/home/hero";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
}
