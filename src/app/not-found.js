import Image from "next/image";
import React from "react";
import Button from "./components/ui/Button";
import pageNoteFoundImage from "../assets/page-not-found.png";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-20">
      <Image src={pageNoteFoundImage} alt="Page not found" height="auto" />

      <h1 className="font-poppins text-[200px] font-semibold text-brand-2 leading-tight">
        404
      </h1>
      <p className="text-3xl font-normal font-urbanist text-grey-500">
        page could not fround
      </p>
      <Link className="mt-14" href="/">
        <Button
          bgColor={"bg-brand-1"}
          color={"text-white"}
          btnPadding={"py-3 px-8"}
          text="Back to home "
        />
      </Link>
    </div>
  );
};

export default NotFoundPage;
