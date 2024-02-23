import React from "react";
import AboutMe from "../assets/about_me.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="py-20 w-screen bg-foreground">
      <div className="max-w-7xl mx-auto w-11/12 flex flex-col gap-12">
        <div className="w-full gap-12 grid grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="w-[300px] min-h-[330px] lg:h-full mx-auto">
            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{
                once: false,
              }}
              className="h-full w-full overflow-hidden"
            >
              <img
                src={AboutMe}
                alt=""
                className="h-full w-full object-center object-cover hover:scale-110 transition-all duration-300"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{
              once: false,
            }}
            className="h-full flex flex-col gap-8"
          >
            <div className="text-4xl md:text-left text-white">About Me</div>
            <div className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, necessitatibus cupiditate quod possimus maxime ut
              recusandae sequi nihil mollitia commodi, maiores nesciunt
              voluptatum? Et incidunt possimus nesciunt enim saepe qui. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Provident
              dolore facilis ex iusto explicabo doloribus rerum libero obcaecati
              neque repudiandae optio, aliquid nobis fuga tenetur laudantium nam
              dolorum animi. Vero debitis distinctio, quibusdam corrupti iste,
              at recusandae omnis deserunt eligendi exercitationem iure quasi
              laudantium nisi sunt optio, soluta mollitia numquam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Sit, ducimus?
            </div>
            <div className="flex items-center justify-center md:justify-start gap-12 w-ful">
              <div className="hover:scale-110 transition-all duration-200">
                <FaFacebook size={35} className="text-blue-500" />
              </div>
              <div className="hover:scale-110 transition-all duration-200">
                <FaInstagram size={35} className="text-[#ff0065]" />
              </div>
              <div className="hover:scale-110 transition-all duration-200">
                <FaLinkedin size={35} className="text-blue-900" />
              </div>
              <div className="hover:scale-110 transition-all duration-200">
                <FaGithub size={35} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
