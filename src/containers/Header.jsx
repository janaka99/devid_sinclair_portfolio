import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { navLinks } from "../data/data";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileNavHide, setIsMobileNavHide] = useState(true);

  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="h-20 w-screen relative z-20"
    >
      <nav
        className={`max-w-7xl mx-auto h-full flex md:justify-center items-center  w-11/12 ${
          isMobile ? "justify-end" : "justify-between"
        }`}
      >
        {!isMobile && (
          <div className="gap-12 flex">
            {navLinks.map((link, i) => (
              <a
                href={link.link}
                key={i}
                className="text-base uppercase relative after:content-[''] after:w-0 after:top-full after:h-[2px] after:absolute after:bg-accent after:transition-all after:duration-300 after:left-0 hover:after:w-full before:content-[''] before:w-0 before:top-0 before:right-0 before:h-[2px] before:absolute before:transition-all before:duration-300 hover:before:w-full before:bg-accent"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        {isMobile && (
          <>
            <div
              className="text-white z-10"
              onClick={() => setIsMobileNavHide(!isMobileNavHide)}
            >
              {isMobileNavHide ? (
                <RxHamburgerMenu size={35} />
              ) : (
                <RxCross1 size={35} />
              )}
            </div>
            <div
              className={`absolute top-0 w-96 bg-secondary text-white flex flex-col items-center justify-around h-screen right-0 transition-all duration-300 ${
                isMobileNavHide ? "translate-x-96" : "translate-x-0"
              }`}
            >
              {navLinks.map((link, i) => (
                <a href={link.link} key={i} className="text-base uppercase">
                  {link.text}
                </a>
              ))}
            </div>
          </>
        )}
      </nav>
    </motion.div>
  );
};

export default Header;
