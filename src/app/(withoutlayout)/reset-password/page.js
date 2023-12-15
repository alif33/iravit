"use client";
import Container from "@/app/components/ui/Container";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "../../../assets/logo.png";
import resetPasswordImage from "../../../assets/reset-password.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const ResetPassword = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Password Set");
  };
  return (
    <div className="">
      <Container>
        <div className="py-5 mb-2">
          <Link href="/">
            <Image src={logoImage} alt="logo" width={100} />
          </Link>
        </div>
        <div className="flex justify-between  flex-row gap-10">
          {/* login left */}
          <div className="w-4/12 ">
            <h2 className="text-[#233B58] mb-8 leading-tight text-[40px] font-semibold">
              Create new <br /> password
            </h2>
            <form onSubmit={handleSignIn} className="">
              {/* Password Field */}
              <div className="flex flex-col mb-8 gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  New Password
                </label>
                <input
                  required
                  className=" bg-grey-200 duration-300 focus:shadow-md focus:shadow-grey-400 focus:bg-white outline-none p-5 text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              {/* Repeat Field */}
              <div className="flex  flex-col mb-3 gap-2">
                <label
                  htmlFor="repeatPassword"
                  className="text-sm font-jakarta text-grey-400 "
                >
                  Repeat Password
                </label>

                <input
                  required
                  className="bg-grey-200 duration-300 focus:shadow-md focus:shadow-grey-400 focus:bg-white   outline-none p-5 w-full text-base placeholder:text-[#233B58] text-[#233B58] font-jakarta font-normal leading-[18px] rounded-md"
                  type="text"
                  name="repeatPassword"
                  id="repeatPassword"
                />
              </div>

              <input
                type="submit"
                value="Set Password"
                className="bg-brand-1 cursor-pointer text-white font-semibold text-base font-jakarta py-5 px-10 w-full rounded-md mt-16"
              />
            </form>

            <button className="flex w-full  mt-2 py-5 rounded-md gap-1 text-base font-semibold font-jakarta leading-5 text-[#233B58] flex-row items-center justify-center ">
              <FcGoogle className="text-3xl" />
              Login with Google
            </button>
            <p className="text-grey-800 mt-5 font-jakarta leading-[18px] font-normal text-sm ">
              Don’t have an account?{" "}
              <Link href="/sign-up">
                <span className="text-brand-1">Signup here.</span>
              </Link>
            </p>
          </div>
          {/* login right */}
          <div className="w-8/12   flex justify-end ">
            <Image src={resetPasswordImage} alt="Login Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResetPassword;
