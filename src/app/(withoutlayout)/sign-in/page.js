import Container from "@/app/components/ui/Container";
import Image from "next/image";
import React from "react";
import loginImage from "../../../assets/login.png";
import logoImage from "../../../assets/logo.png";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="">
      <Container>
        <div className="py-5">
          <Link href="/">
            <Image src={logoImage} alt="logo" width={100} />
          </Link>
        </div>
        <div className="flex justify-between  flex-row gap-10">
          {/* login left */}
          <div className="w-4/12 ">
            <h2 className="text-[#233B58] mb-10 text-[40px] font-semibold">
              Login in to <br /> your account
            </h2>
            <form action="" className="">
              <div className="flex flex-col mb-10 gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  Email Address
                </label>
                <input
                  className="shadow-md shadow-grey-500 outline-none p-5 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@address.com"
                />
              </div>{" "}
              <div className="flex flex-col mb-5 gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  Password
                </label>
                <input
                  className="bg-grey-200 outline-none p-5 rounded-md"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </form>
          </div>
          {/* login right */}
          <div className="w-8/12   flex justify-end ">
            <Image src={loginImage} alt="Login Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
