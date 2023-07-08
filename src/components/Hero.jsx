import React from "react";
import Button from "./subcomponents/Button";
import Image from "next/image";
import picture from "../../public/images/picture1.png";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:min-h-[75vh] lg:p-0 py-8 z-10">
      <div className="flex flex-col lg:text-left lg:items-start items-center lg:mb-0 mb-4 text-center justify-center px-8 lg:w-1/2 z-10">
        <h1 className="xl:text-7xl text-6xl z-10">Interested in Improving Business?</h1>
        <p className="text-xl mt-4 mb-6 z-10 md:max-w-none max-w-md">
          The customer and their business is always our number one priority. We
          promise you that you are in good hands.
        </p>
        <Button text="Book a call" size="text-[20px]" link="#contact" />
      </div>
      <div className="lg:w-1/2 p-8 flex justify-center items-center z-10">
        <div className="border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] flex justify-center items-center bg-[#8F00FF] p-8 z-10">
          <Image src={picture} className="z-10 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
