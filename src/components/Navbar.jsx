import Image from "next/image";
import React from "react";
import icon1 from "../../public/icons/Twitter Squared.png";
import icon2 from "../../public/icons/Instagram (1).png";
import icon3 from "../../public/icons/Facebook (1).png";
import Button from "./subcomponents/Button";

const Navbar = () => {
  return (
    <div
      id="home"
      className="flex sm:flex-row flex-col sm:items-stretch items-center border-b-4 border-black z-10"
    >
      <div className="sm:border-r-4 sm:border-black flex lg:flex-row flex-col justify-between lg:justify-between items-center sm:w-1/2 px-8 sm:py-4 pt-4 z-10">
        <h1 className="text-4xl z-10">Launch Levels</h1>
        <div className="gap-2 z-10 lg:flex hidden">
          <a href="https://www.instagram.com/launchlevels/" target="_blank">
            <Image src={icon2} className="h-8 w-8 z-10" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094516539154"
            target="_blank"
          >
            <Image src={icon3} className="h-8 w-8 z-10" />
          </a>
        </div>
      </div>
      <div className="flex lg:justify-between justify-center items-center sm:w-1/2 px-8 sm:py-4 pt-2 pb-4 z-10">
        <div className="text-xl flex gap-4 z-10">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="lg:flex hidden">
          <Button text="Book" size="text-[20px]" link="#contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
