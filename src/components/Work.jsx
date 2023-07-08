import React from "react";
import Button from "./subcomponents/Button";

const Work = () => {
  return (
    <div id="work" className="border-t-4 border-black py-8 px-4 flex flex-col items-center z-10">
      <h1 className="text-6xl text-center z-10">Recent Works</h1>
      <p className="text-xl text-center mt-4 mb-8 max-w-md z-10">
        If you are interested in what we do and what we have done so far, check
        out our work.
      </p>
      <div className="flex gap-4 z-10">
        <Button text="Websites" size="text-[20px]" link="#contact" />
        <Button text="Videos" size="text-[20px]" link="#contact" />
      </div>
    </div>
  );
};

export default Work;
