import Image from "next/image";
import React from "react";
import bannerImage1 from "../../../assets/blog-details/banner.png";
import Container from "@/app/components/ui/Container";
import authorImage from "../../../assets/blog-details/auth.png";
import BlogHeader from "@/app/components/blog/BlogHeader";
import BlogTitle from "@/app/components/ui/BlogTitle";

const BlogDetails = ({
  params,
  searchParams,
  title,
  subtitle,
  auth,
  date,
  authImage,
  image,
  content,
}) => {
  console.log(params);
  return (
    <div>
      <Container>
        {/* top */}
        <Image src={bannerImage1} height={500} width="100%" />
        <div className="my-8">
          <h2 className="text-h2 pt-6 font-poppins text-grey-900 font-semibold leading-tight">
            Facebook Marketing To Boost Your Money in 2023
          </h2>
          <p className="font-normal text-xl leading-8 font-urbanist text-secondary-1">
            Our commenting feature is a firm favorite among our customers,
            eliminating the need for endless email threads and multiple
            messaging apps, and ensuring that teams, collaborators and clients…
          </p>
          <div className="flex py-5  border-b border-b-grey-300 flex-row gap-3">
            <Image
              src={authorImage}
              className="w-20 h-20 rounded-full"
              alt="Author Image"
            />
            <div className="">
              <h4 className="font-semibold font-poppins text-3xl text-secondary-1 leading-normal">
                AJOY SARKER
              </h4>
              <p className="text-lg font-urbanist leading-8 text-grey-400">
                May 14, 2023
              </p>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="">
          {/* content -1  */}
          <div className="my-10">
            <h3 className="text-3xl mb-4 font-poppins text-secondary-1 font-semibold">
              Top new features
            </h3>
            <div className="flex flex-col gap-5">
              <p className="text-lg text-grey-500 font-medium font-urbanist leading-8">
                Whether your team is spread around a conference table or around
                the world, a productive brainstorm can feel like a win, eng the
                players and producing valuable content.
              </p>
              <p className="text-lg text-grey-500 font-medium font-urbanist leading-8">
                Unfortunately, there are plenty of things that can derail
                brainstorming sessions, including unbalanced conversation
                dominated byrts or quick thinkers, awkward silences that make
                the whole meeting painful, and anchoring effects, where
                participast idea or two that up during the meeting, stifling new
                ideas and preventing the team from moving on.
              </p>
              <p className="text-lg text-grey-500 font-medium font-urbanist leading-8">
                No matter what field you are in, brainstorming is a fundamental
                activity that can move ideas forward and produce better rReady
                for better brainstorming? We’ve compiled the top five tips you
                can use today to make brainstorming more fun.
              </p>
            </div>
          </div>
          {/* Content - 2 */}
          <div className="my-10">
            <h3 className="text-3xl mb-4 font-poppins text-secondary-1 font-semibold">
              Top new features
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-grey-500 font-medium font-urbanist leading-8">
                It’s easy to simply gather your group, state your problem, and
                ask for ideas. But is this the most efficient way to generate
                fresh, productive ideas? There are specialised methods for
                brainstorming that take idea generation seriously, and you may
                want to give some a try. They include:
              </p>
              <ul class="list-disc ml-10 text-base text-grey-500 font-medium font-urbanist leading-8 flex flex-col gap-4">
                <li>
                  Brainwriting: Everyone writes down three ideas and passes
                  their ideas to the person on their left (or right), who builds
                  off those ideas before passing them on again. This way, ideas
                  can cross-pollinate, morph and build on top of each other from
                  different perspectives. After all, two heads are better than
                  one.
                </li>
                <li>
                  Rapid ideation: Everyone writes down as many ideas as they can
                  in a set amount of time before anything is discussed or
                  critiqued. This is a fun way to get all the good (and bad)
                  ideas out fast and bring a sense of fun urgency to the
                  session.
                </li>
                <li>
                  Figure storming: The group picks a well-known figure who is
                  not in the room and asks how they would approach the problem.
                  For example, “How would Barack Obama (or Harry Potter, or
                  anyone else) approach this problem?” - prepare for some funny
                  answers here, this method is a good ice-breaker for everyone
                  involved.
                </li>
                <li>
                  Change of scenery: Sometimes the conference room is not the
                  best place for brainstorming. Try moving outside, heading for
                  lunch, or
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
