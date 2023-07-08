import React, { useRef, useState } from "react";
import Button from "./subcomponents/Button";
import icon1 from "../../public/icons/Twitter Squared.png";
import icon2 from "../../public/icons/Instagram (1).png";
import icon3 from "../../public/icons/Facebook (1).png";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_ym3lo8g",
        "template_56xoylw",
        {
          from_name: form.name,
          to_name: "Fernando",
          from_email: form.email,
          to_email: "contact@jssmastery.pro",
          message: form.message,
        },
        "aQ6vYj0jDyU7dLrx9"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message! We will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Message did not send. Something went wrong.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="border-t-4 border-black py-8 flex lg:flex-row flex-col-reverse z-10"
    >
      <div className="lg:w-1/2 px-8 z-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#FFCC9D] relative flex flex-col w-full rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] p-8 pt-20 z-10"
        >
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
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="p-4 z-10 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-4 z-10 my-4 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
          />
          <textarea
            placeholder="Message"
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            className="p-4 z-10 text-xl ring-none outline-none placeholder:text-xl bg-white placeholder:text-[#3F3F3F] border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,100)]"
            rows={5}
            required
          />
          <button type="submit" className="flex mt-4 z-10">
            <p
              className={`py-3 z-10 px-12 bg-[#C5FF52] flex justify-center items-center rounded-lg border-2 border-black text-[20px] hover:-translate-y-[2px] active:translate-x-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] cursor-pointer duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,100)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,100)]`}
            >
              Send
            </p>
          </button>
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
