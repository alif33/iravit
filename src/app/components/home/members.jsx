import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import memberImage1 from "../../../assets/member/member1.png";
import memberImage2 from "../../../assets/member/member2.png";
import memberImage3 from "../../../assets/member/member3.png";
import MemberCard from "./memberCard";

const Members = () => {
  return (
    <div className="my-32 ">
      <Container>
        <div className="">
          <h3 className="text-brand-2 leading-tight font-semibold font-poppins text-h3">
            Our top class <br /> team members
          </h3>
          <div className="flex mt-12 flex-row gap-6 justify-between">
            <MemberCard
              image={memberImage1}
              name="Jonathon Rees"
              designation="Chief Executive"
            />
            <MemberCard
              image={memberImage2}
              name="Jonathon Rees"
              designation="Chief Executive"
            />
            <MemberCard
              image={memberImage3}
              name="Jonathon Rees"
              designation="Chief Executive"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Members;
