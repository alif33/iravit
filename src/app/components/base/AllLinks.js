import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const AllLinks = () => {
  return (
    <>
      <Link className="text-lg text-[04091E] font-medium font-urbanist" href="">
        Blog
      </Link>
      <Link href="">Pricing</Link>
      <Link href="">Contact</Link>
      <Link href="">FAQ</Link>
      <div className="flex md:ml-5 flex-row gap-5 text-lg text-[04091E] font-medium font-urbanist items-center">
        <Link href="">
          <button className="py-2 px-3 border border-gray-400 rounded-md">
            Sign in
          </button>
        </Link>
        <Link href="">
          <Button
            color={"text-white"}
            bgColor={"bg-brand-1"}
            btnPadding={"py-3 px-6"}
            text="Get Started Free"
          />
        </Link>
      </div>
    </>
  );
};

export default AllLinks;
