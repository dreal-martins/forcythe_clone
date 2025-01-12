import CtaButton from "../CtaButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animatedText, containerVariants } from "../../utils/animateText";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <main
      className="md:min-h-[80vh] bg-[url('/src/assets/images/header-background.svg')] object-cover bg-no-repeat bg-top px-[1rem] md:px-[7rem] mt-[6.3rem] md:mt-[6.8rem]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]"
        variants={containerVariants}
      >
        <motion.div className="max-w-[56rem]">
          <motion.div className="min-h-[180px]">
            <motion.h1
              className="text-[3.3rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 tracking-wide whitespace-normal break-words"
              variants={containerVariants}
            >
              {animatedText("We build")}
              <span className="text-blue-400"> {animatedText("products")}</span>
              {animatedText("that shape a better future")}
            </motion.h1>

            <motion.p
              className="text-zinc-400 text-base md:text-lg mb-8 leading-7 md:w-[76%] whitespace-normal break-words"
              variants={containerVariants}
            >
              {animatedText(
                "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation."
              )}
            </motion.p>

            <CtaButton />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center whitespace-normal break-words"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {animatedText(`Success in`)}
        <span className="text-[#60a6e7] capitalize">
          {animatedText(`Motion`)}
        </span>{" "}
        {animatedText(`– Our clients’ journey`)}
      </motion.p>
    </main>
  );
};

export default Hero;
