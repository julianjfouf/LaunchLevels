import React from "react";

const Button = ({ text, size, link }) => {
  return (
    <a
      href={`${link}`}
      className={`py-3 z-10 px-12 bg-[#C5FF52] flex justify-center items-center rounded-lg border-2 border-black ${size} hover:-translate-y-[2px] active:translate-x-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] cursor-pointer duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,100)]`}
    >
      {text}
    </a>
  );
};

export default Button;
