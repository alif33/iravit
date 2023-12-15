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
            <h2 className="text-[#233B58] mb-8 text-[40px] font-semibold">
              Login in to <br /> your account
            </h2>
            <form action="" className="">
              <div className="flex flex-col mb-8 gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  Email Address
                </label>
                <input
                  className="shadow-md shadow-grey-500 outline-none p-5 text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@address.com"
                />
              </div>{" "}
              <div className="flex flex-col mb-3 gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  Password
                </label>
                <input
                  className="bg-grey-200 outline-none p-5  text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <p className="text-brand-1 leading-[18px] font-normal text-sm font-jakarta">
                <Link href="/reset-password">Forgot Password?</Link>
              </p>
              <input
                type="submit"
                value="Login"
                className="bg-brand-1 py-5 px-10 w-full rounded-md mt-20"
              />
            </form>
            <div className="">
              <button className=""></button>
            </div>
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
