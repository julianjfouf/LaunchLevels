import Image from "next/image";
import React from "react";
import picture from "../../public/images/picture5.png"

const About = () => {
  return (
    <div id="about" className="border-t-4 border-black py-8 flex lg:flex-row flex-col">
      <div className="lg:w-1/2 px-8 flex flex-col lg:mb-0 mb-8 lg:items-start items-center text-center lg:text-left">
        <h1 className="text-6xl">About</h1>
        <p className="max-w-xl text-xl mt-4">
          We are a team of young adults who grew up online and now want to do
          something productive with our time. We thought that it would be best
          for us to productive ourselves and help people out with our
          technological skills and knowledge of how the modern industry operates
          by leveraging the internet and social media effectively. We look
          forward to working with you and your team.
        </p>
      </div>
      <div className="lg:w-1/2 px-8 flex justify-center items-center">
        <div className="p-8 pt-20 flex justify-center items-center bg-[#8F00FF] rounded-lg border-4 relative border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]">
        <div className="absolute top-3 right-3 left-3 flex justify-between">
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
            <Image src={picture} />
        </div>
      </div>
    </div>
  );
};

export default About;
