"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {
  return (
        <>
          <Navbar />
          <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col min-h-[150px] md:justify-center">
  <h1 className="animate__animated animate__zoomInDown text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
  Welcome to StarLabs!
</h1>
<p className="text-lg sm:text-xl md:text-2xl">
  <TypeAnimation
    sequence={[
      "Where Innovation Meets Technology—Explore, Learn, and Create in the World of", 1000,
      "Where Innovation Meets Technology—Explore, Learn, and Create in the World of Science Technology and Computer Laboratories!", 1000,

    ]}
    speed={50}
    repeat={Infinity} // <-- Tambahin ini supaya teksnya berulang terus!
  />
</p>


  </div>
  <div>
    <Image
      src="/img/robot.png"
      alt="gambar"
      width={900}
      height={900}
      layout="intrinsic"
    />
  </div>
</div>

    
          <div className="flex justify-center items-center gap-5 sm:gap-10 xs:gap-5 mt-[-20px] w-full py-2 overflow-hidden relative">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="w-[200px] h-[40px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3, // Supaya gerakannya bergantian
                }}
              />
            ))}
          </div>


        </>
      );
    }
    