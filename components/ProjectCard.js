"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ProjectCard({ project }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardContent = (
    <>
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent transition-all duration-500 group-hover:bg-gray-950/70" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-ibm-plex-sans font-bold text-gray-100 mb-2 transform transition-all duration-300 translate-y-full group-hover:translate-y-0">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-ibm-plex-sans font-semibold mb-4 transform transition-all duration-300 translate-y-full delay-100 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 translate-y-full delay-200 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 text-gray-50 text-xs md:text-sm font-medium px-2 py-1 rounded-full font-ibm-plex-sans"
              >
                {tech}
              </span>
            ))}
          </div>
          {!isMobile && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-indigo-400 font-semibold flex items-center gap-1 transition-all duration-300 transform translate-y-full delay-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 font-ibm-plex-sans"
            >
              View Project <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </>
  );

  return isMobile ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-3xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {CardContent}
    </a>
  ) : (
    <div className="group relative rounded-3xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
      {CardContent}
    </div>
  );
}
