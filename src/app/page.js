import Cursor from "@/components/Coursor/Cousor";
import HomePage from "./(withlayout)/home/page";
import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Reviews from "./components/home/reviews";
import Social from "./components/home/social";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <HomePage />
      <Social />
      <Reviews />
      <Footer />
    </>
  );
}
