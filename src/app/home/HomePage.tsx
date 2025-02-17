"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
    { title: "Bridge Construction", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713016/Anantaa_Images/ewcf4ztb96znhcfr16r4.jpg", desc: "A major bridge project spanning 5 km." },
    { title: "Irrigation Dam", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713018/Anantaa_Images/ldggwl8hl5vkhwrtsejz.jpg", desc: "A large-scale dam project for water management." },
    { title: "Railway Ancillary Project", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713020/Anantaa_Images/g7xlb8kelsfu9fpb8mgc.jpg", desc: "Supporting infrastructure for railway expansion." },
    { title: "Check Dam", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713017/Anantaa_Images/s0lqdwzio01lzryxea1n.jpg", desc: "A check dam to improve water retention in arid regions." },
    { title: "Building Construction", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713017/Anantaa_Images/e58yjybcanhlnaoikqzd.jpg", desc: "Modern high-rise development in the city center." },
    { title: "Highway Expansion", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713017/Anantaa_Images/rdnpbmrq8f57hf2g9l8f.jpg", desc: "Improving road infrastructure for better connectivity." },
    { title: "Urban Drainage System", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713018/Anantaa_Images/ruficr03wu7xqsofdh0s.jpg", desc: "Enhancing drainage systems to prevent urban flooding." },
    { title: "Retaining Wall", img: "https://res.cloudinary.com/dzmtzssaq/image/upload/v1739713020/Anantaa_Images/sz27smpcugkhquywki8m.jpg", desc: "Stabilizing land using reinforced retaining walls." }
];
const videos = [
    {
        src: "https://res.cloudinary.com/dzmtzssaq/video/upload/v1739713037/Anantaa_Images/qpajiscx8rkk2uf2911s.mp4",
        title: "Building a Sustainable Future",
        subtitle: "Innovating infrastructure for tomorrow.",
    },
    {
        src: "https://res.cloudinary.com/dzmtzssaq/video/upload/v1739713025/Anantaa_Images/sgiqqt91ikgz5nogtvwy.mp4",
        title: "Empowering Agriculture with Innovation",
        subtitle: "Advancing sustainable farming solutions.",
    },
];

const HomePage = () => {
    const [index, setIndex] = useState(0);
    const controls = useAnimation();
    const [itemsPerSlide, setItemsPerSlide] = useState(3)
    const maxIndex = Math.ceil(services.length / itemsPerSlide) - 1;
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ Correct useRef syntax

    const nextSlide = () => {
        setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const updateItemsPerSlide = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 2 : 3);
        };
    
        if (typeof window !== "undefined") { 
            updateItemsPerSlide();
            window.addEventListener("resize", updateItemsPerSlide);
        }
    
        return () => {
            window.removeEventListener("resize", updateItemsPerSlide);
        };
    }, []);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = videos[currentVideoIndex].src;
            videoRef.current.load(); // ✅ Ensure video reloads before playing
            videoRef.current.play().catch((error) => console.error("Video play error:", error));
        }
    }, [currentVideoIndex]);

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <div className="relative w-full h-96 mt-3 overflow-hidden">
                {/* Video Background */}
                <video
                    ref={videoRef}  // ✅ Attach ref correctly
                    autoPlay
                    muted
                    onEnded={nextVideo}
                    className="absolute w-full h-full object-cover"
                >
                    <source src={videos[currentVideoIndex].src} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                    {/* Animated Text */}
                    <motion.h1
                        key={videos[currentVideoIndex].title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        {videos[currentVideoIndex].title}
                    </motion.h1>

                    <motion.p
                        key={videos[currentVideoIndex].subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-lg md:text-xl"
                    >
                        {videos[currentVideoIndex].subtitle}
                    </motion.p>
                </div>
            </div>
            <div className="bg-white text-gray-900">
                <div className="relative bg-blue-50 py-16 px-4 md:px-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Shaping a Resilient Future</h2>
                        <h4 className="text-xl font-semibold text-gray-600 mt-3">Leading sustainable innovation for transformative infrastructure and thriving communities.</h4>
                        <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
                            At Anantaa Infrastructure Pvt Ltd, we set new industry standards through innovation, expertise, and sustainability.
                        </p>
                    </div>
                    <div className="relative flex items-center justify-center overflow-hidden">
                        <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md">
                            <ChevronLeft size={24} />
                        </button>
                        <motion.div
                            animate={controls}
                            className="flex gap-6 overflow-hidden"
                        >
                            {services.slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide).map((service, i) => (
                                <div key={i} className="w-80 shadow-lg bg-white rounded-xl overflow-hidden p-4 text-center">
                                    <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                                    <h3 className="text-lg font-semibold text-gray-900 mt-4">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
