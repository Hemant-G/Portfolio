import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-playfair font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.tech.map(tech => (
            <span key={tech} className="bg-cyan-500 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full font-inter">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start text-cyan-400 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-inter">
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}