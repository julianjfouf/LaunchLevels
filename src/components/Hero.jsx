import React from "react";
import Button from "./subcomponents/Button";
import Image from "next/image";
import picture from "../../public/images/picture1.png";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:min-h-[75vh] lg:p-0 py-8 z-10">
      <div className="flex flex-col lg:text-left lg:items-start items-center lg:mb-0 mb-4 text-center justify-center px-8 lg:w-1/2 z-10">
        <h1 className="xl:text-7xl text-6xl z-10">
          Want to <span className="">level</span> up your business's reach?
        </h1>
        <p className="text-xl mt-4 mb-6 z-10 md:max-w-none max-w-md">
          We assist you with website design / development, content creation /
          video editing, and social media outreach / campaigns. If you are
          interested, book a call with us to discuss what you need.
        </p>
        <Button text="Book a call" size="text-[20px]" link="#contact" />
      </div>
      <div className="lg:w-1/2 p-8 flex justify-center items-center z-10">
        <div className="border-4 relative border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] flex justify-center items-center bg-[#8F00FF] p-8 pt-20 z-10">
          <div className="absolute top-0 right-0 left-0 p-3 pb-2 rounded-[4px] flex justify-between bg-white">
            <div className="flex gap-3">
              <div className="h-4 w-4 border-[3px] border-black rounded-full top-3 left-3"></div>
              <div className="h-4 w-4 border-[3px] border-black rounded-full top-3 left-3"></div>
              <div className="h-4 w-4 border-[3px] border-black rounded-full top-3 left-3"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 relative h-6">
                <div className="w-6 absolute bottom-1 bg-black h-1"></div>
              </div>
              <div className="relative w-6 h-6">
                <div className="w-6 absolute -translate-x-1/2 bottom-[14px] rotate-90 bg-black h-1"></div>
                <div className="w-6 absolute bottom-1 bg-black h-1"></div>
                <div className="w-6 absolute top-[-4px] bg-black h-1"></div>
                <div className="w-6 absolute translate-x-1/2 bottom-[14px] rotate-90 bg-black h-1"></div>
              </div>
              <div className="relative w-6">
                <div className="w-6 absolute rotate-45 bg-black h-1 bottom-[14px]"></div>
                <div className="w-6 absolute -rotate-45 bg-black h-1 bottom-[14px]"></div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-10 w-full h-[4px] bg-black"></div>
          <Image src={picture} className="z-10 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
