import React from "react";
import Button from "./subcomponents/Button";
import icon1 from "../../public/icons/Twitter Squared.png";
import icon2 from "../../public/icons/Instagram (1).png";
import icon3 from "../../public/icons/Facebook (1).png";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="border-t-4 border-black py-8 flex lg:flex-row flex-col-reverse z-10"
    >
      <div className="lg:w-1/2 px-8 z-10">
        <form className="bg-[#FFCC9D] flex flex-col w-full rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] p-8 z-10">
          <input
            placeholder="Name"
            type="name"
            className="p-4 z-10 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
            required
          />
          <input
            placeholder="Email"
            type="email"
            className="p-4 z-10 my-4 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
            required
          />
          <textarea
            placeholder="Message"
            className="p-4 z-10 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
            rows={5}
            required
          />
          <div className="flex mt-4 z-10">
            <Button text="Send" size="text-[20px]" link="/" />
          </div>
        </form>
      </div>
      <div className="flex flex-col lg:items-end lg:mb-0 mb-8 items-center text-center lg:text-right px-8 lg:w-1/2 z-10">
        <h1 className="text-6xl z-10">Contact</h1>
        <p className="my-4 text-xl max-w-xl z-10">
          Send us an email to express your interest in working with us and we
          will get in touch with you as soon as we receive your message.
        </p>
        <div className="flex gap-2 z-10">
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
    </div>
  );
};

export default Contact;
