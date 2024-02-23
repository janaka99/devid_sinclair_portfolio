import React from "react";
import HeroBg from "../assets/hero_bg1.avif";
import Header from "./Header";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="h-screen bg-foreground text-white w-full justify-center flex flex-col items-center relative overflow-hidden">
      <img
        src={HeroBg}
        className="absolute top-0 bottom-0 opacity-10 w-full h-full object-cover"
        alt=""
      />
      <Header />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeIn",
          duration: 1,
        }}
        className="flex-grow text-center flex flex-col relative justify-center gap-8"
      >
        <h1 className="text-5xl font-light tracking-wide">Hello, I'am</h1>
        <h1 className="text-7xl font-bold text-accent ">Devid Sinclair</h1>
        <h1 className="text-4xl font-light tracking-wide">
          Designer-Developer
        </h1>
      </motion.div>
    </header>
  );
};

export default Hero;
