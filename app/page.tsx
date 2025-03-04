"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ScrollAnimation from "@/app/components/ScrollAnimation";


export default function Home() {
  return (
        <>
          <Navbar />
          <div className="mt-20 container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          
          </div><ScrollAnimation animation="animate__zoomIn">
          <div className="flex justify-center items-center py-20">
            <div className="relative w-full max-w-[1500px] h-auto md:h-[500px] bg-no-repeat bg-center bg-contain rounded-lg overflow-hidden flex justify-center items-center p-1 md:p-0">
              
              {/* Gambar dengan opacity dikurangi */}
              
              <div className="absolute inset-0 bg-[url('/starboy.png')] bg-no-repeat bg-center bg-contain opacity-30"></div>
              

              {/* Konten */}
              <div className="relative z-10 text-center max-w-[90%] sm:max-w-[80%] p-4 sm:p-6 md:p-8">
                <ScrollAnimation animation="animate__fadeInUp">
                  <h3 className="text-lg sm:text-xl md:text-5xl font-bold">Briefly About Starlabs</h3>
                </ScrollAnimation>
                <ScrollAnimation animation="animate__fadeInUp">
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-3xl">
                  UKM Starlabs di Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) merupakan salah satu Unit Kegiatan Mahasiswa yang berfokus pada pengembangan teknologi dan inovasi di kalangan mahasiswa. UKM ini berfungsi sebagai wadah bagi para mahasiswa yang memiliki minat dan bakat di bidang teknologi informasi, pemrograman, dan pengembangan aplikasi.
                </p>
                </ScrollAnimation>
              </div>
            </div>
          </div></ScrollAnimation>
          <div className="absolute w-[400px] h-[400px] bg-[url('/putih.png')] bg-cover -ml-60 md:w-[800px] md:h-[800px] animate-pulseGlow"></div>
       </>
      );
    }
    
