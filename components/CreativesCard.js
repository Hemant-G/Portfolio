import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function CreativesCard({ project }) {
  // A single content block that is a div, which can be wrapped by an anchor or a div.
  const CardContent = (
    <>
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {/* Replaced 'next/image' with a standard 'img' tag */}
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent transition-all duration-500 group-hover:bg-gray-950/70" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2 transform transition-all duration-300 translate-y-full group-hover:translate-y-0">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-semibold mb-4 transform transition-all duration-300 translate-y-full delay-100 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 translate-y-full delay-200 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="bg-indigo-800 text-gray-50 text-xs md:text-sm font-medium px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* This is the inner link, only visible on desktop */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex self-start text-indigo-400 font-semibold items-center gap-1 transition-all duration-300 transform translate-y-full delay-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
          >
            View <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile: the whole card is a link, so we remove the inner link for mobile */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-3xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl md:hidden"
      >
        {CardContent}
      </a>

      {/* Desktop: the card is a div, and the inner link is the only interactive part */}
      <div className="group relative hidden md:block rounded-3xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
        {CardContent}
      </div>
    </>
  );
}
