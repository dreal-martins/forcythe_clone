import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="py-16 px-[1.25rem] md:px-[7rem] bg-slate-900">
      <div className="lg:grid lg:grid-cols-3 my-10">
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              placeholder="Your Email Address"
              type="text"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                name="agreement"
              />
            </div>
            <label htmlFor="agreement" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <img
              alt="Forcythe logo"
              fetchPriority="high"
              width="130"
              height="9"
              decoding="async"
              className="mb-5 md:mb-8"
              src="https://forcythe.com/images/forcythe%20logo.svg"
            />
            <p className="text-base text-zinc-400 font-normal leading-relaxed">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {[
                {
                  href: "#",
                  src: "https://forcythe.com/images/facebook.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/instagram.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/x.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/linkedin.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/youtube.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/Icon.svg",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href={item.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    src={item.src}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "About", href: "#" },
                { label: "Services", href: "#" },
                { label: "Portfolio", href: "#" },
                { label: "Studio", href: "#" },
                { label: "Foundation", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
              ].map((item, index) => (
                <li key={index} className="text-blue-300">
                  <a href={item.href}>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              {[
                {
                  href: "#",
                  src: "https://forcythe.com/images/facebook.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/instagram.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/x.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/linkedin.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/youtube.svg",
                },
                {
                  href: "#",
                  src: "https://forcythe.com/images/Icon.svg",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href={item.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt="social"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    src={item.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright border-t-[1px] border-accent">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
