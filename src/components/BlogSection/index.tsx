import React from "react";
import BlogCard from "./BlogCard";
import CtaButton from "../CtaButton";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      title: "Will AI take over Art?",
      author: "The Reformist",
      date: "May 29th, 2024",
      imageUrl:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992357/Will_AI_take_over_cc9401fe38.jpg",
      href: "#",
    },
    {
      title: "Cryptocurrency vs Tokens",
      author: "The Reformist",
      date: "May 29th, 2024",
      imageUrl:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716992003/Cryptocurrency_vs_token_f8865950e7.jpg",
      href: "#",
    },
    {
      title: "Cryptocurrency and Crypto asset",
      author: "The Reformist",
      date: "May 29th, 2024",
      imageUrl:
        "https://res.cloudinary.com/dhahjsrtn/image/upload/v1716991585/Cryptocurrency_and_crypto_assets_da92d172fc.jpg",
      href: "#",
    },
  ];

  return (
    <div className="py-16 px-[1.25rem] md:px-[7rem]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
            Read our articles, news, and product blog
          </h2>
        </div>
        <CtaButton blog />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
