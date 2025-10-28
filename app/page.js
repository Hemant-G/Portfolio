import Link from 'next/link';
import Image from 'next/image';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { CreativesCard } from '../components/CreativesCard';
import { Github, Linkedin, Mail } from 'lucide-react';

// The main page component for the single-page application.
export default function HomePage() {
  const portfolioData = {
    name: "Hemant Singh",
    title: "Computer Science & Engineering Student",
    about: {
      bio: "I'm a 3rd-year Computer Science and Engineering student passionate about Software Engineering and Cybersecurity. Beyond code, my interests include Art and Video Games."
    },
    contact: {
      email: "hs2hemantsingh@gmail.com",
      github: "https://github.com/Hemant-G",
      linkedin: "https://www.linkedin.com/in/hemant-s01/",
    },
    projects: [
      {
        id: 1,
        title: "LANStream",
        description: "A fast, local network streaming server and application for sharing media across devices in a Local Area Network.",
        image: "/lanstream_thumbnail.png",
        tech: ["Python", "Flask", "React", "DASH"],
        link: "/projects/LANStream",
        slug: "LANStream"
      },
      {
        id: 2,
        title: "Markdown Notes",
        description: "A simple, clean markdown note-taking web application.",
        image: "/Markdown_Notes_thumbnail.png",
        tech: ["Node.js", "Express", "React", "MongoDB"],
        link: "https://markdown-frontend-one.vercel.app"
      },
    ],
    creative_works: [
      {
        id: 1,
        title: "Short Film: 'Escapism'",
        description: "A short film depicting some ways we use to escape from reality.",
        image: "/ESCAPISM.png",
        link: "https://youtu.be/ePza2gnHBqU?si=SVZ9G_CqAKc4Ag6j",
      },
      {
        id: 2,
        title: "Gaming Channel",
        description: "A YouTube channel where gameplay and edits of various video games.",
        image: "/ElusionPlays.png",
        link: "https://youtube.com/@elusionplays?si=yV-vrJ7KGLPkY9L3"
      },
    ]
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-950/30">
        {/* About Section */}
        <section id="about" className="relative mx-auto w-full text-center py-20 md:py-32 md:mb-80">
          <div className="absolute md:h-200 inset-0 z-[-1]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover block"
            >
              <source src="/bg_video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          </div>

          {/* Overlay content */}
          <div className="relative md:top-50 z-10 w-full max-w-7xl mx-auto text-gray-100 px-6 sm:px-8 md:px-12">
            <div className="flex flex-col md:flex-row items-center md:items-start text-left">
              <div className="w-full">
                <h2 className="text-5xl md:text-7xl lg:text-8xl mx-auto font-bold leading-tight mb-4 drop-shadow-lg">
                  Hello, I'm <span className="text-indigo-400">{portfolioData.name}</span>
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-ibm-plex-sans max-w-3xl mb-8 text-slate-300">
                  I am a 3rd-year undergrad student who's passionate about <span className="font-bold text-indigo-300">Software Engineering</span> and <span className="font-bold text-indigo-300">Cybersecurity</span>. My interests also include <span className="font-bold text-indigo-300">Art</span> and <span className="font-bold text-indigo-300">Video Games</span>.
                </p>

                {/* Resume Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-300 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-900 hover:text-gray-100 transition duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-8 w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-indigo-300 leading-tight mb-8 text-center animate-fade-in-down">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Hobbies and Creative Works Section */}
        <section id="creatives" className="p-8 w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-indigo-300 leading-tight mb-8 text-center animate-fade-in-down">
            Hobbies & Creative Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.creative_works.map(project => (
              <CreativesCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-8 w-full max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-300">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl font-ibm-plex-sans text-slate-300 mb-8">
            Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={40} />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={40} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={40} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}