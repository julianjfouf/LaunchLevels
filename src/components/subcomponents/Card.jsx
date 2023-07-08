import Image from "next/image";
import React from "react";

const Card = ({ number, title, points, picture }) => {
  return (
    <div className="xl:w-1/3 w-full min-h-max p-4 z-10">
      <div className="flex xl:flex-col lg:flex-row flex-col h-full justify-between p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] bg-[#FF6565] z-10">
        <div className="flex lg:flex-col sm:flex-row flex-col sm:items-start items-center z-10">
          <div className="rounded-full sm:h-16 sm:w-16 sm:max-w-none sm:max-h-none max-w-[48px] max-h-[48px] h-full w-full text-4xl flex justify-center items-center bg-[#FFF9E3] border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,100)] mb-4 sm:mr-8 z-10">
            <p className="-translate-y-1 z-10">{number}</p>
          </div>
          <div className="flex flex-col sm:items-start items-center">
            <h1 className="text-4xl z-10 sm:text-left text-center">{title}</h1>
            <ul className="list-disc pl-8 mt-4 text-xl z-10">
              {points.map((point) => (
                <li>{point}</li>
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
