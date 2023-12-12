import Image from "next/image";
import React from "react";
import customerImage1 from "../../../assets/customers/customer1.png";
import customerImage2 from "../../../assets/customers/customer2.png";
import customerImage3 from "../../../assets/customers/customer3.png";
import customerImage4 from "../../../assets/customers/customer4.png";
import customerImage5 from "../../../assets/customers/customer5.png";

const Customers = () => {
  return (
    <div className="mt-32 mb-20">
      <p className="font-medium text-lg text-gray-600 font-urbanist text-center  ">
        We take care of more than{" "}
        <span className="font-bold underline">1000+</span> customers
      </p>
      <div className="flex flex-row border-b border-gray-200 py-5 justify-between items-center">
        <Image src={customerImage5} />
        <Image src={customerImage4} />
        <Image src={customerImage1} />
        <Image src={customerImage2} />
        <Image src={customerImage3} />
      </div>
    </div>
  );
};

export default Customers;
