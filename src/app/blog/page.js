import React from "react";
import Container from "../components/ui/Container";
import BlogHeader from "../components/blog/BlogHeader";
import BlogSection from "../components/blog/BlogSection";

const BlogPage = () => {
  return (
    <div className="my-28">
      <BlogHeader />
      <div className="flex  flex-col gap-24">
        <BlogSection sectionTitle={"Latest blog post"} />
        <BlogSection sectionTitle={"Features blog post"} />
      </div>
    </div>
  );
};

export default BlogPage;
