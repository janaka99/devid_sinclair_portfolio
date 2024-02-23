import React from "react";
import { motion } from "framer-motion";

const Service = ({ service }) => {
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
      className="cursor-pointer bg-secondary rounded-md "
    >
      <div className=" flex flex-col p-12 gap-8">
        <div className="w-16 h-16 mx-auto bg-accent text-white rounded-full justify-center items-center p-4">
          <img
            src={service.link}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl text-white text-center font-semibold">
          {service.title}
        </h3>
        <p className="text-gray-400 text-justify">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default Service;
