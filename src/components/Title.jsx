import React from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
  return (
    <motion.div
      initial={{
        y: "100px",
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
      className="text-4xl text-center w-fit text-white border-b-4 mx-auto border-accent"
    >
      {text}
    </motion.div>
  );
};

export default Title;
