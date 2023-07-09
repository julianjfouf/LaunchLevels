import React from "react";
import Button from "./subcomponents/Button";

const Work = () => {
  return (
    <div
      id="work"
      className="border-t-4 border-black py-8 px-4 flex flex-col items-center z-10"
    >
      <h1 className="text-6xl text-center z-10">Recent Work</h1>
      <p className="text-xl text-center mt-4 mb-8 max-w-md z-10">
        If you are interested in what we do and what we have done so far, check
        out our work.
      </p>
      <div className="flex gap-4 z-10">
        <Button
          text="Websites"
          external={true}
          size="text-[20px]"
          link="https://www.figma.com/proto/zAnriOQgCRns6RBpH9uJce/Work-Presentation?type=design&node-id=1-2&t=RcastHoQnLVD7EwR-0&scaling=min-zoom&page-id=0%3A1"
        />
        <Button text="Videos" size="text-[20px]" link="#contact" />
      </div>
    </div>
  );
};

export default Work;
