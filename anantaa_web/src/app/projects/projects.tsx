"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = {
  past: [
    { id: 1, title: "Bridge Construction", img: "/bridgeConProject.jpg", desc: "A major bridge project spanning 5 km." },
    { id: 2, title: "Irrigation Dam", img: "/irrigationProject.jpg", desc: "A large-scale dam project for water management." },
    { id: 3, title: "Railway Ancillary Project", img: "/railwayAncillaryProject.jpg", desc: "Supporting infrastructure for railway expansion." },
    { id: 4, title: "Check Dam", img: "/checkDamProject.jpg", desc: "A check dam to improve water retention in arid regions." }
  ],
  ongoing: [
    { id: 5, title: "Building Construction", img: "/buildingConProject.jpg", desc: "Modern high-rise development in the city center." },
    { id: 6, title: "Highway Expansion", img: "/highwayExpansionProject.jpg", desc: "Improving road infrastructure for better connectivity." },
    { id: 7, title: "Urban Drainage System", img: "/drainageSystemProject.jpg", desc: "Enhancing drainage systems to prevent urban flooding." },
    { id: 8, title: "Retaining Wall", img: "/retainingWallProject.jpg", desc: "Stabilizing land using reinforced retaining walls." }
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("past");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("past")}
          className={`px-6 py-2 text-lg font-bold ${activeTab === "past" ? "bg-red-600 text-white" : "text-gray-600"}`}
        >
          SUBSTANTIALLY/COMPLETED PROJECTS
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-6 py-2 text-lg font-bold ${activeTab === "ongoing" ? "bg-red-600 text-white" : "text-gray-600"}`}
        >
          ONGOING PROJECTS
        </button>
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects[activeTab].map((project) => (
          <motion.div
          key={project.id}
          className="relative overflow-hidden rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
        >
          {!selectedProject || selectedProject !== project.id ? (
            <div className="relative w-full">
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="w-full rounded-lg object-cover"
              />
        
              {/* ✅ Fixed Hover Overlay (No Grey Section) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg"
              >
                <h2 className="text-white text-lg font-bold">{project.title}</h2>
              </motion.div>
            </div>
          ) : (
            <motion.div
              className="flex flex-col md:flex-row items-center bg-white shadow-lg p-4 rounded-lg w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {/* Image on the Left */}
              <div className="w-full md:w-1/3">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
        
              {/* Description on the Right */}
              <div className="w-full md:w-2/3 pl-4 text-center md:text-left">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-700 mt-2">{project.desc}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        ))}
      </div>
    </div>
  );
}
