"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google"; // Importing Poppins font
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function AboutUs() {
  return (
    <div className={`overflow-visible relative min-h-screen bg-white text-gray-800 ${poppins.className}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-3/5 mr-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-sm">
              Building Excellence for a Better Tomorrow
            </h3>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At <strong className="text-blue-700">Anantaa Infrastructure Pvt Ltd</strong>, we redefine industry
              standards with cutting-edge technology, unmatched expertise, and a commitment to sustainability.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Join us on this transformative journey as we shape the future with innovation, progress, and
              community welfare.
            </p>
          </motion.div>

          <motion.div
            className="md:w-2/5 mt-10 md:mt-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/constructionImg.jpg"
              alt="Construction site"
              width={500}
              height={300}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-12">
          {/* Vision */}
          <motion.div
            className="md:w-1/2 p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl shadow-md transition duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-blue-900">Vision</h2>
            <p className="mt-3 text-gray-700 text-lg flex items-start">
              <FaQuoteLeft className="text-blue-500 text-3xl pr-2" />
              To pioneer revolutionary infrastructure development through innovation, trust, and sustainable practices.
              <FaQuoteRight className="text-blue-500 text-3xl pl-2" />
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="md:w-1/2 p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl shadow-md transition duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-orange-700">Mission</h2>
            <p className="mt-3 text-gray-700 text-lg flex items-start">
              <FaQuoteLeft className="text-orange-500 text-3xl pr-2" />
              To be a leading value partner in creating and managing sustainable infrastructure, enhancing communities,
              and delivering excellence.
              <FaQuoteRight className="text-orange-500 text-3xl pl-2" />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
