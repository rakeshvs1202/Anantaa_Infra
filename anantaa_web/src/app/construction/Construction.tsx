"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Construction() {
  return (
    <div className={`relative min-h-screen w-full h-full pb-10 bg-gray-50 text-gray-900 ${poppins.className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 drop-shadow-md">
            Construction Services
          </h2>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            We specialize in innovative and sustainable construction solutions, delivering high-quality industrial, 
            residential, and commercial projects. Our expertise ensures excellence from planning to execution, 
            focusing on durability, design, and efficiency.
          </p>
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            Our team is dedicated to building structures that stand the test of time, combining modern technology 
            with industry best practices for a seamless construction experience.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/constructionSite.png" 
            alt="Construction Project"
            width={600}
            height={350}
            className="rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
          />
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
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
