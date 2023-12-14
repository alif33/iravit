import HomePage from "./(withlayout)/home/page";
import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Social from "./components/home/social";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Social />
      <Footer />
    </>
  );
}
