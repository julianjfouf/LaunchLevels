import Image from "next/image";
import noise from "../../public/Noise.png";
import { Darker_Grotesque } from "next/font/google";
import Button from "@/components/subcomponents/Button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import What from "@/components/What";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Head from "next/head";

const font = Darker_Grotesque({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Launch Levels</title>
        <meta
          name="description"
          content="Website Design in Tracy, California. Video Editing & Content Creation in Tracy, California. Social Media Marketing Agency in Tracy California."
        ></meta>
        <meta
          name="keywords"
          content="Web Design, Content Creation, Social Media Marketing Agency, Social Media Outreach, Web Development, Website Development, Website Design, Graphic Design, Advertising, Social Media Advertising, Video Editing,
                   Web Design in Tracy, Content Creation in Tracy, Social Media Marketing Agency in Tracy, Social Media Outreach in Tracy, Web Development in Tracy, Website Development in Tracy, Website Design in Tracy, Graphic Design in Tracy, Advertising in Tracy, Social Media Advertising in Tracy, Video Editing in Tracy,
                   Web Design in Tracy California, Content Creation in Tracy California, Social Media Marketing Agency in Tracy California, Social Media Outreach in Tracy California, Web Development in Tracy California, Website Development in Tracy California, Website Design in Tracy California, Graphic Design in Tracy California, Advertising in Tracy California, Social Media Advertising in Tracy California, Video Editing in Tracy California"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main
        className={`${font.className} font-black relative bg-[#F5F0DA] z-10`}
      >
        <div className="container mx-auto sm:border-l-4 sm:border-r-4 border-black z-10">
          <Navbar />
          <Hero />
          <What />
          <Work />
          <Contact />
          <About />
          <Footer />
        </div>
        <Image
          src={noise}
          className="absolute top-0 left-0 h-full w-full z-0 opacity-5 object-cover"
        />
      </main>
    </>
  );
}
