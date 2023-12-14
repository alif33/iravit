import React from "react";
import Navbar from "../components/base/navbar";
import Social from "../components/home/social";
import Footer from "../components/home/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}

      <Social />
      <Footer />
    </div>
  );
};

export default Layout;
