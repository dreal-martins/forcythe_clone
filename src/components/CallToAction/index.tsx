import CtaButton from "../CtaButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animatedText, containerVariants } from "../../utils/animateText";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      className="py-16 text-center bg-[#071626] bg-opacity-0"
      ref={ref}
      style={{
        background:
          "linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[45rem] mx-auto"
        variants={containerVariants}
      >
        <motion.h2
          variants={containerVariants}
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6"
        >
          <span className="text-blue-400">
            {animatedText("Ready to Scale?")}{" "}
          </span>
          <br />
          {animatedText(" Join successful brands that chose us as their")}

          <span className="text-blue-400">
            {animatedText("growth accelerator")}
          </span>
        </motion.h2>
        <div className="w-fit mx-auto mb-5">
          <CtaButton />
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
