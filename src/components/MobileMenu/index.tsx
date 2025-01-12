import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 50 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      ref={menuRef}
      className="flex border-0 items-center flex-col gap-10 h-min justify-center overflow-visible p-px z-[999999999] w-60 rounded-[2rem] fixed md:hidden right-5 top-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="text-white z-10 bg-transparent rounded-[2rem] w-full"
        variants={itemVariants}
      >
        <div
          className="w-full p-5 py-8 rounded-[2rem]"
          style={{
            background:
              "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
          }}
        >
          <ul className="flex flex-col">
            {[
              { label: "About", href: "#" },
              { label: "Services", href: "#" },
              { label: "Portfolio", href: "#" },
              { label: "Studio", href: "#" },
              { label: "Foundation", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="w-full py-2.5"
                variants={itemVariants}
              >
                <a
                  className="w-full text-base py-3 text-white"
                  href={item.href}
                >
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[2rem]"
        style={{
          filter: "blur(2px)",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(75% 181.159% at 50% 50%, rgb(50, 117, 248) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="bg-black absolute z-1 flex-none inset-[2px] rounded-[2rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default MobileMenu;
