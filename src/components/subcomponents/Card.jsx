import Image from "next/image";
import React from "react";

const Card = ({ number, title, points, picture }) => {
  return (
    <div className="xl:w-1/3 w-full min-h-max p-4 z-10">
      <div className="flex xl:flex-col lg:flex-row flex-col h-full relative justify-between p-4 pt-16 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] bg-[#FF6565] z-10">
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
        <div className="flex lg:flex-col sm:flex-row flex-col sm:items-start items-center z-10">
          <div className="rounded-full sm:h-16 sm:w-16 sm:max-w-none sm:max-h-none max-w-[48px] max-h-[48px] h-full w-full text-4xl flex justify-center items-center bg-[#FFF9E3] border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,100)] mb-4 sm:mr-8 z-10">
            <p className="-translate-y-1 z-10">{number}</p>
          </div>
          <div className="flex flex-col sm:items-start items-center">
            <h1 className="text-4xl z-10 sm:text-left text-center">{title}</h1>
            <ul className="pl-8 mt-2 text-xl z-10">
              {points.map((point) => (
                <li className="flex items-center gap-4 py-2">
                  <div className="bg-white relative border-2 border-black rounded-full h-8 w-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,100)]">
                    <div className="relative flex w-full h-full justify-center items-center">
                      <div className="bg-black w-2 absolute h-[3px] translate-y-[3px] -translate-x-[3px] rotate-[45deg]"></div>
                      <div className="bg-black w-4 absolute h-[3px] translate-x-[3px] -rotate-[60deg]"></div>
                    </div>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="object-contain">
          <Image src={picture} />
        </div>
      </div>
    </div>
  );
};

export default Card;
