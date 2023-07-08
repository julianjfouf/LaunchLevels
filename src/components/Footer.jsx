import React from "react";
import Button from "./subcomponents/Button";

const Footer = () => {
  return (
    <div className="border-t-4 border-black w-full z-10">
      <div className="px-8 pt-4 pb-8 flex flex-col w-full z-10">
        <a href="#home" className="text-4xl text-center z-10">
          Launch Levels
        </a>
        <div className="text-xl flex gap-4 my-4 mb-8 w-full justify-center z-10">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <Button text="Work with us" size="text-[36px]" link="#contact" />
      </div>
    </div>
  );
};

export default Footer;
