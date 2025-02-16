"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Irrigation() {
  return (
    <div className={`relative min-h-screen w-full h-full pb-10 bg-gray-50 text-gray-900 ${poppins.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/irrigationSystem.png" // Replace with a relevant irrigation image
            alt="Modern Irrigation System"
            width={500}
            height={250}
            className="rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 drop-shadow-md">
            Smart Irrigation Solutions
          </h2>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Our advanced irrigation systems help you maximize water efficiency, reduce costs, and ensure 
            optimal plant growth. Whether for agriculture, landscaping, or commercial projects, 
            we provide tailored solutions designed for sustainability and long-term performance.
          </p>
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            Using the latest drip irrigation, sprinkler systems, and automated smart controls, 
            we make watering hassle-free while conserving resources. 
            Experience cutting-edge irrigation technology built for reliability and efficiency.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="/contactUs">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          Request a Quote
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
