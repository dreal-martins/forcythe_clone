import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { animatedText, containerVariants } from "../../utils/animateText";

const logos = [
  {
    src: "http://res.cloudinary.com/dfruoqaze/image/upload/v1736724065/coa3gtqumpcnkaea6fqo.svg",
    name: "Starks",
    description:
      "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
    profilePhotoUrl: "https://forcythe.com/images/john.svg",
    nameAndRole: "John, Management",
    width: "10rem",
    height: "4rem",
  },
  {
    src: "https://forcythe.com/images/ExecutivePros%20Logo.svg",
    name: "ExecutivePros",
    description:
      "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    nameAndRole: "Testimony, Co-founder",
    profilePhotoUrl: "https://forcythe.com/images/executive-pro-ceo.svg",
    width: "8rem",
    height: "4rem",
  },
  {
    src: "https://forcythe.com/images/stacai.svg",
    name: "Stac AI",
    description:
      "Stac AI Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
    profilePhotoUrl: "https://forcythe.com/images/edwin.svg",
    nameAndRole: "Edwin, Former CTO",
    width: "6rem",
    height: "4rem",
  },
  {
    src: "https://forcythe.com/images/iwaria.svg",
    name: "Iwaria",
    description:
      "Iwaria The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    profilePhotoUrl: "https://forcythe.com/images/iwaria-founder.svg",
    nameAndRole: "Iwaria, Founder",
    width: "5rem",
    height: "4rem",
  },
  {
    src: "https://forcythe.com/images/Beaupreneur.svg",
    name: "Beaupreneur",
    description:
      "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
    profilePhotoUrl: "https://forcythe.com/images/christina.svg",
    nameAndRole: "Christiana, Founder",
    width: "8rem",
    height: "4rem",
  },
];

const Testimonies = () => {
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(0);
  const ref = useRef(null);

  const handleLogoClick = (index: number) => {
    setSelectedLogoIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const logoDetails = logos[selectedLogoIndex];
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div ref={ref} className="py-16 px-[1.25rem] md:px-[7rem]">
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] pb-10 max-w-3xl mx-auto text-center"
      >
        {animatedText("Discover the")}
        <span className="text-[#60a6e7]">
          {" "}
          {animatedText("transformative stories")}
        </span>{" "}
        {animatedText("of startups that scaled new heights with us")}
      </motion.h1>

      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-x-scroll md:overflow-hidden flex">
          <div className="w-full rounded-full border-[1px] border-[#06438C] grid grid-cols-5 min-w-[750px]">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className={`h-full gap-1 w-full flex items-center justify-center transition-all duration-300  overflow-hidden ${
                  index === selectedLogoIndex ? "bg-sky-950" : "bg-transparent"
                } ${
                  index === 0
                    ? "rounded-l-full"
                    : index === logos.length - 1
                    ? "rounded-r-full"
                    : ""
                }`}
                onClick={() => handleLogoClick(index)}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center cursor-pointer">
                  <img
                    alt={logo.name}
                    src={logo.src}
                    className="object-contain"
                    style={{ width: logo.width, height: logo.height }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {logoDetails && (
          <motion.div
            className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-sky-950"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="sm:basis-[58%] pr-3">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-base font-bold mb-4">{logoDetails.name}</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-base leading-7 mb-3">
                  {logoDetails.description}
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-[15px] font-semibold mb-4">
                  {logoDetails.nameAndRole}
                </p>
              </motion.div>
            </div>

            <motion.div
              key={selectedLogoIndex}
              className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative mt-3 sm:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
              <img
                alt="ceo"
                src={`${logoDetails.profilePhotoUrl}?t=${selectedLogoIndex}`}
                className="rounded-xl relative object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Testimonies;
