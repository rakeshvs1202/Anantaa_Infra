"use client";

import Link from "next/link";
import { Mail, Phone, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-start px-6 md:px-12 lg:px-20">
        {/* Address Section */}
        <div className="flex items-start space-x-3 text-gray-300 max-w-md">
          <Building2 size={24} />
          <p className="leading-relaxed">
          D.No: 3-11-833, Road no. 9, Kakatiya Hills, Madhapur, Hyderabad, Telangana 500033
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-3 text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone size={20} />
            <span>040 3233 00089</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={20} />
            <Link href="mailto:info@anantaa.in" className="text-blue-400 hover:underline">
              info@anantaa.in
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="border-t border-gray-700 w-full pt-2 text-gray-400 text-sm text-center mt-6">
        © 2025 | All Rights Reserved
      </p>
    </footer>
  );
}
