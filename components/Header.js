"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = "Hemant Singh";

  // The toggleMenu function is no longer needed since we are removing the mobile sidebar.
  // const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-gray-950/70 backdrop-blur-lg w-full flex justify-center items-center text-gray-100 shadow-xl sticky top-0 z-50">
      <div className="container w-full px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
          <Link
            href="#about"
            className="group relative overflow-hidden inline-block hover:text-indigo-400 transition-colors duration-300"
          >
            {name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          </Link>
        </h1>

        {/* Desktop Navigation - Hidden on mobile screens */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {["About", "Projects", "Creative Works", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="relative text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
