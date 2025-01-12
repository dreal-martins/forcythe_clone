import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section
      className="py-14 md:py-20 xl:py-28 bg-gradient-to-b from-[#0C2645] to-[#030516]"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div className="max-w-[52rem] mx-auto bg-[url('https://forcythe.com/images/arc.svg')] lg:bg-[url('https://forcythe.com/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <motion.div
            className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-medium">
              We build solutions that help{" "}
              <span className="text-[#60a6e7]">businesses</span> of all sizes to{" "}
              <span className="text-[#60a6e7]">scale</span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="flex justify-evenly sm:justify-between items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {[
              { value: "50+", label: "Clients" },
              { value: "120+", label: "Projects" },
              { value: "10+", label: "Team Leads" },
              { value: "10+", label: "Glorious Years" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-3 text-left w-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                  {stat.value}
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
