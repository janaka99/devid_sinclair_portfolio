import React from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-foreground w-full overflow-hidden py-20 "
    >
      <div className="max-w-7xl w-11/12 mx-auto flex flex-col gap-20">
        <Title text="Contact Me" />
        <div className="w-full gap-12">
          <div className="w-full">
            <motion.form
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
              action=""
              className="w-full flex flex-col gap-6 p-6 shadow-md bg-secondary"
            >
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-6">
                  <label htmlFor="firstname" className="text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="text-gray-400 p-2 bg-primary outline-none focus:border-b focus:border-b-accent"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <label htmlFor="lastname" className="text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="text-gray-400 p-2 bg-primary outline-none focus:border-b focus:border-b-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <label htmlFor="email" className="text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  className="text-gray-400 p-2 bg-primary outline-none focus:border-b focus:border-b-accent"
                />
              </div>
              <div className="flex flex-col gap-6">
                <label htmlFor="lastname" className="text-gray-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="text-gray-400 p-2 bg-primary outline-none focus:border-b focus:border-b-accent"
                />
              </div>
              <button className="w-fit px-8 py-2 text-white border border-accent hover:shadow-md hover:shadow-accent transition-all duration-300 cursor-pointer">
                Send
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
