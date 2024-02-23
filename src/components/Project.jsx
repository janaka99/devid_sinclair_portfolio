import React from "react";
import { MdLink } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Project = ({ item }) => {
  return (
    <motion.div
      initial={{
        y: 100,
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
      className="h-full w-full overflow-hidden relative group"
    >
      <img
        src={item.link}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="absolute top-full left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center group-hover:top-0 transition-all duration-300 gap-4">
        <a
          href="/"
          className="p-4 bg-primary rounded-full text-white cursor-pointer overflow-hidden"
        >
          <AiFillGithub
            size={25}
            className="hover:scale-125 transition-all duration-300"
          />
        </a>
        <a
          href="/"
          className="p-4 bg-primary rounded-full text-white cursor-pointer overflow-hidden"
        >
          <MdLink
            size={25}
            className="hover:scale-125 transition-all duration-300"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
