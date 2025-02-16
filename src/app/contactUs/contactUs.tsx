"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ContactUs() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd9bd58c-a2ca-4bde-a789-689168b3bb3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message has been sent successfully");
      setTimeout(() => {
        setResult("");
      }, 5000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
                <Image
                  src="/mapGIF.gif"
                  alt="addressGIF"
                  width={30}
                  height={30}
                />
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
                <Image
                  className="w-7 h-7"
                  src="/phoneGIF.gif"
                  alt="phoneGIF"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">+91-40-29702683</p>
                <p className="text-gray-600 font-medium">+91-40-29702525</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <Image className="w-7 h-7" src='/emailGIF.gif' alt='emailGIF' width={30} height={30} />
              </div>
              <div>
                <p className="text-gray-600 font-medium">info@anantaa.in</p>
                <p className="text-gray-600 font-medium">admin@anantaa.in</p>
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
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17.443492,78.397592+(My%20Bus)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.h3
          className="text-3xl font-bold text-gray-800 text-center my-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We’d Love to Hear From You
        </motion.h3>
        <motion.div
          className="w-full bg-white p-4 mt-12 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={onSubmit} action="/" className="space-y-4">
            {/* Name, Email, Mobile No */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="py-3 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="py-3 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                required
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Mobile No"
                pattern="^[+]?[0-9]{1,13}$"
                maxLength={14}
                className="py-3 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                required
              />
            </div>

            {/* Message */}
            <textarea
              id="description"
              name="description"
              placeholder="Message"
              className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full h-32"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-12 bg-slate-700 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition duration-300 text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>




      </div>
    </div>
  );
}
