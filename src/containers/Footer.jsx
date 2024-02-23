import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary flex flex-col gap-16">
      <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-16">
        <div className="flex flex-col gap-8 text-center sm:text-left">
          <h3 className="text-white">My Address</h3>
          <div className="flex flex-col gap-4 text-gray-400">
            <p>123 Main Street</p>
            <p>Califonia, US</p>
            <p>12345</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center sm:text-left">
          <h3 className="text-white">Services</h3>
          <div className="flex flex-col gap-4 text-gray-400">
            <p>Web Design</p>
            <p>Web Developing</p>
            <p>Ux Ui Design</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center sm:text-left">
          <h3 className="text-white">Links</h3>
          <div className="flex flex-col gap-4 text-gray-400">
            <a href="#about">About Me</a>
            <a href="#contact">Contact Me</a>
            <a href="#home">Home</a>
            <a
              className="underline"
              href="https://janaka-de-gallery.netlify.app"
            >
              My Gallery
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400">
        Copyright ©2023 All rights reserved |{" "}
        <a className="underline" href="https://janakachamith.online">
          Janaka Chamith
        </a>
      </div>
    </footer>
  );
};

export default Footer;
