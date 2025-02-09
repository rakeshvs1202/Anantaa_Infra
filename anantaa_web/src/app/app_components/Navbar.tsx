"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsDown, setIsProjectsDown] = useState(false);
  const pathname = usePathname();
  
  return (
    <header className="relative w-full border-b bg-white shadow-md z-50">
      <div className="font-serif flex items-center justify-between px-4 py-2 md:px-8">

        <Link href="/">
          <Image
            src="/anantaa logo.jpg"
            alt="Logo"
            width={50}
            height={35}
            className="h-auto w-auto max-w-[120px] md:max-w-[150px]"
          />
        </Link>

        <nav className="hidden md:flex space-x-10">
          <Link href="/" className={`relative pb-1he ${pathname === "/" ? "text-blue-600" : "text-black"}`}>
            Home
            {pathname === "/" && <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600"></span>}
          </Link>
          <Link href="/aboutUs" className={`relative pb-1 ${pathname === "/aboutUs" ? "text-blue-600" : "text-black"}`}>
            About Us
            {pathname === "/aboutUs" && <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600"></span>}
          </Link>
          <div className="relative group">
            <button className={`pb-1 ${["/construction", "/irrigation"].some(path => pathname.includes(path)) ? "text-blue-600" : "text-black"}`}>
              Services
              {["/construction", "/irrigation"].some(path => pathname.includes(path)) && <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600"></span>}
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md p-2 rounded-md space-y-2">
              <Link href="/construction" className="px-4 py-2">Construction</Link>
              <Link href="/irrigation" className="px-4 py-2">Irrigation</Link>
            </div>
          </div>
          <div className="relative group">
            <button className={`pb-1 ${pathname.includes("/proj_") ? "text-blue-600" : "text-black"}`}>
              Projects
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md p-2 rounded-md space-y-2 w-44">
              <Link href="/proj_past" className="px-2 py-2">Past Projects</Link>
              <Link href="/proj_ongoing" className="px-2 py-2">Ongoing Projects</Link>
            </div>
          </div>
          <Link href="/contactUs" className={`relative pb-1 ${pathname === "/contactUs" ? "text-blue-600" : "text-black"}`}>
            Contact Us
            {pathname === "/contactUs" && <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600"></span>}
          </Link>
        </nav>


        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu size={28} />}
        </button>
      </div>


      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-100"
      >
        <div className="flex flex-col p-4">
          <Link href="/" className={`${pathname === "/" ? "text-blue-600 font-bold" : "text-black"} mb-2`}>Home</Link>
          <Link href="/aboutUs" className={`${pathname === "/aboutUs" ? "text-blue-600 font-bold" : "text-black"} mb-2`}>About Us</Link>
          <button
            className={`flex justify-between items-center w-full text-left ${["/construction", "/irrigation"].some(path => pathname.startsWith(path))
              ? "text-blue-600 font-bold" : "text-black"}`}
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services
            <ChevronDown className={`transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} />
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isServicesOpen ? "auto" : 0, opacity: isServicesOpen ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden ml-2 flex flex-col mb-2"
          >
            <Link href="/construction" className="text-black my-2">Construction</Link>
            <Link href="/irrigation" className="text-black mb-2">Irrigation</Link>
          </motion.div>
          <button className="flex justify-between items-center w-full text-left" onClick={() => setIsProjectsDown(!isProjectsDown)}>
            Projects
            <ChevronDown className={`transition-transform ${isProjectsDown ? "rotate-180" : "rotate-0"}`} />
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isProjectsDown ? "auto" : 0, opacity: isProjectsDown ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden ml-2 flex flex-col mb-2"
          >
            <Link href="/ser_const" className="text-black my-2">Past Projects</Link>
            <Link href="/ser_irri" className="text-black mb-2">Ongoing Projects</Link>
          </motion.div>

          <Link href="/contactUs" className={`${pathname === "/contactUs" ? "text-blue-600 font-bold" : "text-black"} mb-2`}>Contact Us</Link>
        </div>
      </motion.div>
    </header>
  );
}
