"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import BenefitList from "@/app/components/BenefitList";


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
                "",
                1000,
                "Where Innovation Meets Technology—Explore, Learn, and Create in the World of",
                1000,
                "Where Innovation Meets Technology—Explore, Learn, and Create in the World of Science Technology and Computer Laboratories!",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
        <div>
          <Image
            src="/robot.png"
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
      <ScrollAnimation animation="animate__zoomIn">
        <div className="flex justify-center items-center py-20">
          <div className="relative w-full max-w-[1500px] h-auto md:h-[500px] bg-no-repeat bg-center bg-contain rounded-lg overflow-hidden flex justify-center items-center p-1 md:p-0">
            {/* Gambar dengan opacity dikurangi */}

            <div className="absolute inset-0 bg-[url('/starboy.png')] bg-no-repeat bg-center bg-contain opacity-30"></div>

            {/* Konten */}
            <div className="relative z-10 text-center max-w-[90%] sm:max-w-[80%] p-4 sm:p-6 md:p-8">
              <ScrollAnimation animation="animate__fadeInUp">
                <h3 className="text-lg sm:text-xl md:text-5xl font-bold">
                  Briefly About Starlabs
                </h3>
              </ScrollAnimation>
              <ScrollAnimation animation="animate__fadeInUp">
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-3xl">
                  UKM Starlabs di Universitas Nahdlatul Ulama Al Ghazali
                  (UNUGHA) merupakan salah satu Unit Kegiatan Mahasiswa yang
                  berfokus pada pengembangan teknologi dan inovasi di kalangan
                  mahasiswa. UKM ini berfungsi sebagai wadah bagi para mahasiswa
                  yang memiliki minat dan bakat di bidang teknologi informasi,
                  pemrograman, dan pengembangan aplikasi.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ScrollAnimation>
        <BenefitList />

      <div className="chat-container max-w-6xl mx-auto p-6 space-y-4 overflow-anchor-none">
      <div className="line max-w-6xl mx-auto p-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-white/10 via-white to-white/10 shadow-md shadow-white">
      </div>
      </div>
      {/* Pertanyaan */}
            <div className="chat-question flex justify-start animate__animated animate__fadeInLeftBig animate__delay-1s">
              <div className="relative chat-bubble bg-gradient-to-r from-blue-900 to-gray-900 shadow-md rounded-tl-md rounded-br-lg p-4 text-white mb-4 max-w-lg">
                <p className=" text-white">Kenapa Starlabs?</p>
                <div className="absolute -left-2 bottom-0 w-4 h-4 bg-blue-900 clip-chat-left"></div>
              </div>
            </div>
          {/* Jawaban 1 */}
            <div className="chat-answer flex justify-end">
              <div className="relative chat-bubble bg-gradient-to-r from-blue-900 to-gray-900 shadow-md rounded-tr-md rounded-bl-lg p-4 text-white max-w-lg">
                <p className=" text-white">
                  StarLabs adalah komunitas teknologi inovatif yang berfokus
                  pada AI, IoT, robotika, dan pengembangan perangkat lunak.
                </p>
                <div className="absolute -right-2 bottom-0 w-4 h-4 bg-[#111929] clip-chat-right"></div>
              </div>
            </div>

          {/* Jawaban 2 */}
            <div className="chat-answer2 flex justify-end">
              <div className="relative chat-bubble bg-gradient-to-r from-blue-900 to-gray-900 shadow-md rounded-tr-md rounded-bl-lg p-4 text-white max-w-lg">
                <p className="text-white">
                  Di sini, kamu bisa belajar dari praktisi industri, mengikuti
                  proyek nyata, dan berkompetisi di bidang IT. Dengan komunitas
                  solid, akses ke sumber daya, serta jaringan alumni luas,
                  StarLabs jadi wadah terbaik untuk berkembang dan
                  berkolaborasi!
                </p>
                <div className="absolute -right-2 bottom-0 w-4 h-4 bg-[#111929] clip-chat-right"></div>
              </div>
            </div>
        </div>
        <div className="line max-w-6xl mx-auto p-6">
          <div className="h-[2px] w-full bg-gradient-to-r from-white/10 via-white to-white/10 shadow-md shadow-white"></div>
        </div>

        <div className="container mx-auto text-center p-4 rounded-3xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">STARLABS</h1>
            <p className="text-white text-lg">
              memiliki empat Divisi Pembelajaran yang membantu anggota
              meningkatkan keterampilan, mengembangkan relasi, dan mendapatkan
              pengalaman terhadap dunia IT
            </p>
          </div>

          {/* Divisi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Divisi Jaringan */}
            <div className="division bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/jaringan.png"
                alt="Divisi Jaringan"
                width={96}
                height={96}
                className="mb-4 rounded-full object-cover"
              />
              <h2 className="text-white text-xl font-semibold">
                Divisi <br /> Jaringan
              </h2>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Lihat Kelas
              </button>
            </div>

            {/* Divisi Pemrograman */}
            <div className="division bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/pemrograman.png"
                alt="Divisi Pemrograman"
                width={96}
                height={96}
                className="mb-4 rounded-full object-cover"
              />
              <h2 className="text-white text-xl font-semibold">
                Divisi <br /> Pemrograman
              </h2>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Lihat Kelas
              </button>
            </div>

            {/* Divisi Office */}
            <div className="division bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/office.png"
                alt="Divisi Office"
                width={96}
                height={96}
                className="mb-4 rounded-full object-cover"
              />
              <h2 className="text-white text-xl font-semibold">
                Divisi <br /> Office
              </h2>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Lihat Kelas
              </button>
            </div>

            {/* Divisi Multimedia */}
            <div className="division bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/multimedia.png"
                alt="Divisi Multimedia"
                width={96}
                height={96}
                className="mb-4 rounded-full object-cover"
              />
              <h2 className="text-white text-xl font-semibold">
                Divisi <br /> Multimedia
              </h2>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Lihat Kelas
              </button>
            </div>
          </div>
        </div>
        <div className="text-white text-xl font-bold flex flex-col items-center justify-center text-center">
  <h1>What You Waiting For?</h1>
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Join Now
  </button>
</div>
    </>
  );
}
