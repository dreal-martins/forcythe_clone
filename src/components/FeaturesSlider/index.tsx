import { motion } from "framer-motion";

interface FeaturesSliderProps {
  direction?: "left" | "right";
}

const FeaturesSlider: React.FC<FeaturesSliderProps> = ({
  direction = "left",
}) => {
  const images = [
    "https://forcythe.com/images/Project%20Images/starks.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/starks.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
  ];

  const isLeft = direction === "left";

  return (
    <div className="flex flex-col gap-2 bg-gradient-to-b from-transparent via-transparent to-[#030516]">
      <div className="relative overflow-hidden w-full h-[340px]">
        <motion.div
          className="absolute flex gap-5 whitespace-nowrap"
          animate={{ x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{ display: "flex" }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative w-auto h-[340px] flex-shrink-0"
            >
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSlider;
