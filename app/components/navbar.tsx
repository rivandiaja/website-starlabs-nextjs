"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-gradient-to-r from-[#0f192c] to-[#201063] shadow-lg shadow-cyan-300/30 p-2 pr-4 pl-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-lg font-bold">
          <Image
            src="/Picture1.png"
            alt="logo"
            width={220}
            height={50}
            quality={100}
            className="h-14"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/" className="nav-link">About Us</Link>
          <Link href="/event" className="nav-link">Event</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <ThemeToggle className="theme-toggle overflow-hidden rounded-full w-10 h-10" />
        </div>

        {/* Mobile Menu & ThemeToggle */}
        <div className="md:hidden flex items-center gap-2">
        <ThemeToggle className="theme-toggle overflow-hidden rounded-full w-10 h-10" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-btn focus:outline-none relative p-1 rounded-full"
          >
            <svg
              className="w-8 h-8 text-white transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col mt-4 space-y-4 md:hidden items-center transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"
        }`}
      >
        <Link href="/" className="nav-link w-full text-center">Home</Link>
        <Link href="/" className="nav-link w-full text-center">About Us</Link>
        <Link href="/event" className="nav-link w-full text-center">Event</Link>
        <Link href="/contact" className="nav-link w-full text-center">Contact</Link>
      </div>

      {/* Tambahkan Global CSS untuk efek hover */}
      <style jsx global>{`
        .nav-link {
          position: relative;
          padding: 10px 15px;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          border-radius: 8px;
          overflow: hidden;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 300%;
          height: 300%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 10%, transparent 50%);
          transition: all 0.4s ease-in-out;
          transform: translate(-50%, -50%) scale(0);
        }

        .nav-link:hover::before {
          transform: translate(-50%, -50%) scale(1);
        }

        .nav-link:hover {
          color: cyan;
          text-shadow: 0 0 10px cyan;
        }

        /* Hover di Mobile -> Full Width */
        @media (max-width: 768px) {
          .nav-link {
            display: block;
            width: 100%;
            text-align: center;
            padding: 12px 0;
          }

          .nav-link:hover {
            background-color: rgba(0, 255, 255, 0.2);
          }
        }

        /* Tombol Toggle Tanpa Background Kotak */
        .toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .toggle-btn:hover {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Efek Hover di ThemeToggle */
        .theme-toggle {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
        }
      `}</style>
    </nav>
  );
}
