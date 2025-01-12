import { motion } from "framer-motion";

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const animatedText = (text: string) =>
  text.split(" ").map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="inline-block whitespace-normal break-words"
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letterVariants}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.span variants={letterVariants}>&nbsp;</motion.span>
    </span>
  ));
