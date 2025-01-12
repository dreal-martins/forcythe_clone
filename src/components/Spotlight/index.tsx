import { useState } from "react";
import CtaButton from "../CtaButton";

const Spotlight = () => {
  const steps = ["Idea", "Design", "Develop", "Launch"];
  const [activeStep, setActiveStep] = useState(0);

  const stepData = [
    {
      title: "Your vision is unique.",
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
      image: "https://forcythe.com/images/camera-man.svg",
    },
    {
      title: "Crafting the blueprint for success",
      description:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      image: "https://forcythe.com/images/plan-design.svg",
    },
    {
      title: "Turning blueprints into reality.",
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
      image: "https://forcythe.com/images/plan-develop.svg",
    },
    {
      title: "Your launchpad to the market.",
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
      image: "https://forcythe.com/images/plan-launch.svg",
    },
  ];

  return (
    <div className="py-16 px-[1.25rem] md:px-[7rem]">
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] md:w-[70%] pb-10 md:pb-0">
        From <span className="text-[#60a6e7] capitalize">Spark</span> to
        <span className="text-[#60a6e7] capitalize"> Spotlight</span>: we take
        you every step of the way to success.
      </p>

      <div className="flex flex-col md:flex-row lg:items-end">
        <div className="basis-1/2 flex mb-8 md:mb-0">
          <div className="md:pr-10">
            <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-200 text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            <div>
              <p className="text-[1.8rem] sm:text-[2rem] font-medium leading-8 sm:leading-8 mb-12">
                {stepData[activeStep].title}
              </p>
            </div>

            <div>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-7">
                {stepData[activeStep].description}
              </p>
            </div>

            <CtaButton />
          </div>
        </div>

        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          <img
            alt="plan-img"
            src={stepData[activeStep].image}
            className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] transition-opacity duration-500 opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
