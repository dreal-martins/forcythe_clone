import { motion } from "framer-motion";

interface B2bCardProps {
  name: string;
  detail: string;
}
const B2bCard = ({ name, detail }: B2bCardProps) => {
  return (
    <div className="relative flex items-center justify-center flex-col gap-10 w-fit h-min p-1 rounded-2xl text-left overflow-visible">
      <div className="relative z-10 text-white bg-transparent rounded-2xl">
        <div className="w-full bg-[#030516] p-8 sm:p-10 rounded-2xl hover:shadow-lg">
          <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
            <img
              alt="Experience"
              src="https://forcythe.com/images/layers-three.svg"
              width="30"
              height="30"
              loading="lazy"
              decoding="async"
              className="color-transparent"
            />
          </div>
          <h4 className="text-2xl font-medium mb-5">{name}</h4>
          <div>
            <p className="text-lg text-gray-400">{detail}</p>
          </div>
        </div>
      </div>

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
