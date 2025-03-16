"use client";

import Image from "next/image";


  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between gap-8">
            
            {/* Logo & Info */}
            <div className="w-full md:w-1/3">
            <Image 
  src="/Picture1.png" 
  alt="Starlabs Logo" 
  width={200} // Sesuaikan dengan ukuran yang kamu mau
  height={70} 
  className="h-16 mb-4"
/>              <h3 className="text-lg font-bold">UKM STARLABS UNUGHA</h3>
              <p>Kampus UNUGHA Cilacap</p>
              <p>Jl. Kemerdekaan Barat No.17</p>
              <p>Email: starlabs@unugha.ac.id</p>
              <p className="mt-2">Jam Operasional:</p>
              <p>Senin-Jumat: 08.00-16.00 WIB</p>
            </div>
  
            {/* Quick Links */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-3">QUICK LINK</h3>
              <ul className="space-y-2">
                <li><a href="about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="event" className="hover:text-blue-400">Kegiatan</a></li>
                <li><a href="contact" className="hover:text-blue-400">Hubungi Kami</a></li>
              </ul>
            </div>
  
            {/* Support & Social Media */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-3">SUPPORT</h3>
              <ul>
                <li><a href="https://unugha.ac.id/" className="hover:text-blue-400">Universitas Nahdlatul Ulama Al Ghazali</a></li>
              </ul>
  
              <h3 className="text-lg font-bold mt-4 mb-3">OTHER</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.youtube.com/@starlabs.unugha" className="flex items-center gap-2 hover:text-red-400">
                    <i className="fab fa-youtube text-2xl"></i> YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/starlabs.unugha_" className="flex items-center gap-2 hover:text-pink-400">
                    <i className="fab fa-instagram text-2xl"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-10 text-center border-t border-gray-700 pt-6">
            <p>© 2025 UKM STARLABS UNUGHA – Webmaster All Rights Reserved – <a href="#" className="text-blue-400 hover:underline">Privacy</a> and <a href="#" className="text-blue-400 hover:underline">Copyright</a></p>
          </div>
        </div>
      </footer>
    );
  }
  