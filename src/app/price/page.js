import Packages from "../components/home/packages";
import Container from "../components/ui/Container";
import Services from "../components/ui/Services";

const PricingPage = () => {
  return (
    <div>
      <Packages />
      <Services
        title={"Why choose us?"}
        subtitle={
          "Consistent quality and experience across all platforms and devices."
        }
        list={[
          { name: "Simple drag & drop editor" },
          { name: "Engaging & personalized content" },
          { name: "Responsive and mobile ready" },
          { name: "Online financial exchanges for currency " },
        ]}
      />
    </div>
  );
};

export default PricingPage;
