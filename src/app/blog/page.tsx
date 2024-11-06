import Container from "@/components/ui/Container1";
import TitleBanner from "@/components/ui/TitleBanner";
import React from "react";

const BlogPage = () => {
  return (
    <Container>
      <TitleBanner
        subtitle="Find your horizon"
        title="Get to know more about your needs"
        className="mdl:pb-0"
      />
      <div className="my-10 text-center">
        <p className="text-base text-gray-200">
          Blog content will updated soon...
        </p>
      </div>
    </Container>
  );
};

export default BlogPage;
