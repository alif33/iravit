import News from "@/app/components/home/News";
import About from "@/app/components/home/about";
import Customers from "@/app/components/home/customers";
import Hero from "@/app/components/home/hero";
import Members from "@/app/components/home/members";
import Packages from "@/app/components/home/packages";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Customers />
      <About />
      <Members />
      <Packages />
      <News />
    </div>
  );
};

export default HomePage;
