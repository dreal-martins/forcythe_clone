import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { animatedText, containerVariants } from "../../utils/animateText";
import { countUp } from "../../utils/countUp";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const stats = [
    { value: 50, suffix: "+", label: "Clients" },
    { value: 120, suffix: "+", label: "Projects" },
    { value: 10, suffix: "+", label: "Team Leads" },
    { value: 10, suffix: "+", label: "Glorious Years" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        countUp(0, stat.value, 2000, (value) => {
          setCounts((prev) => {
            const updatedCounts = [...prev];
            updatedCounts[index] = value;
            return updatedCounts;
          });
        });
      });
    }
  }, [isInView]);

  return (
    <section
      className="py-14 md:py-20 xl:py-28 bg-gradient-to-b from-[#0C2645] to-[#030516]"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
      ref={ref}
    >
      <div className="max-w-[52rem] mx-auto bg-[url('https://forcythe.com/images/arc.svg')] lg:bg-[url('https://forcythe.com/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <motion.div
            className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl md:text-2xl lg:text-3xl font-medium"
              variants={containerVariants}
            >
              {animatedText(" We build solutions that help")}{" "}
              <span className="text-[#60a6e7]">
                {" "}
                {animatedText("businesses")}
              </span>{" "}
              {animatedText("of all sizes to")}{" "}
              <span className="text-[#60a6e7]">{animatedText("scale")}</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-evenly sm:justify-between items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-3 text-left w-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
