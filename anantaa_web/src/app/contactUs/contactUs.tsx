"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact Info Section */}
          <motion.div
            className="w-full md:w-2/3 space-y-8 bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Address */}
            <div className="flex items-start gap-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <Image src='/mapGIF.gif' alt='addressGIF' width={30} height={30}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">India</h3>
                <p className="text-gray-600">
                  K.Square, Plot No.115, 4th Floor, Madhapur, <br />
                  Kavuri Hills, Hyderabad, Telangana 500033
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <Image className= "w-7 h-7" src='/phoneGIF.gif' alt='phoneGIF' width={30} height={30}/>
              </div>
              <div>
                <p className="text-gray-600 font-medium">+91-40-29702683</p>
                <p className="text-gray-600 font-medium">+91-40-29702525</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="bg-red-100 p-3 rounded-xl">
              <Image className= "w-7 h-7" src='/emailGIF.gif' alt='emailGIF' width={30} height={30}/>
              </div>
              <div>
                <p className="text-gray-600 font-medium">info@dncinfra.com</p>
                <p className="text-gray-600 font-medium">admin@dncinfra.com</p>
              </div>
            </div>
          </motion.div>

          {/* Google Map Section */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <iframe
              className="w-full h-72 rounded-xl shadow-xl border border-gray-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6957167435796!2d78.39525827470408!3d17.433344601525376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a24142b71b%3A0x9eb3ad35d8e2b32!2sDNC%20Infrastructure%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
