import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllLinks from "./AllLinks";
import logo from "../../../assets/logo.png";
import Container from "../ui/Container";

const Navbar = ({ children }) => {
  return (
    <Container>
      <div className="flex flex-row justify-between w-full  items-center py-2 ">
        {/* Navbar Left */}
        <div className="flex-1">
          <Link href="/">
            <Image src={logo} width={100} height={20} />
          </Link>
        </div>
        {/* Navbar Right */}
          <div className="flex-1 gap-5 flex flex-row items-center justify-end">
        <AllLinks />
          </div>
      </div>
    </Container>
  );
};
export default Navbar;
