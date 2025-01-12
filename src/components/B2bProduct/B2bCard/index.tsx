import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animatedText, containerVariants } from "../../../utils/animateText";
interface B2bCardProps {
  name: string;
  detail: string;
}
const B2bCard = ({ name, detail }: B2bCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center flex-col gap-10 w-fit h-min p-1 rounded-2xl text-left overflow-visible"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 text-white bg-transparent rounded-2xl"
      >
        <motion.div className="w-full bg-[#030516] p-8 sm:p-10 rounded-2xl hover:shadow-lg">
          <motion.div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
            <motion.img
              alt="Experience"
              src="https://forcythe.com/images/layers-three.svg"
              width="30"
              height="30"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <motion.h4
            variants={containerVariants}
            className="text-2xl font-medium mb-5"
          >
            {animatedText(name)}
          </motion.h4>
          <motion.div>
            <motion.p className="text-base text-gray-400">
              {animatedText(detail)}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            "radial-gradient(circle at 80% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            "radial-gradient(circle at 50% 80%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
};

export default B2bCard;
