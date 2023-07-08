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
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="The #1 website design + development, content creation + video editing, and social media marketing and advertising agency in Tracy, California."
        ></meta>
        <meta
          name="keywords"
          content="The #1 website design + development, content creation + video editing, and social media marketing and advertising agency in Tracy, California."
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
          className="absolute top-0 left-0 h-full w-full z-0 opacity-[0.03] object-cover"
        />
      </main>
    </>
  );
}
