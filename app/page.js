import Link from 'next/link';
import Image from 'next/image';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
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
      github: "https://github.com/Hemant-G/Markdown",
      linkedin: "www.linkedin.com/in/hemant-s01",
    },
    projects: [
      {
        id: 1,
        title: "LANStream",
        description: "A fast, local network streaming server and application for sharing media across devices in a Local Area Network.",
        image: "/lanstream_thumbnail.png",
        tech: ["Python", "Flask", "React", "DASH"],
        link: "/projects/lanstream",
        slug: "lanstream"
      },
      {
        id: 2,
        title: "Markdown Notes",
        description: "A simple, clean markdown note-taking web application.",
        image: "/Markdown_Notes_thumbnail.png",
        tech: ["Node.js", "Express", "React", "MongoDB"],
        link: "https://markdown-frontend-one.vercel.app"
      },
    ]
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-950/30">
        {/* About Section */}
        <section id="about" className="mx-auto w-full text-center">
          <div className="relative bg-gray-950/20 shadow-2xl  animate-fade-in">
            {/* Video Background */}
            <div className="relative h-180 mb-70">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
              >
                <source src="/video_bg.mp4" type="video/mp4" />
                              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent" />
            </div>

            {/* Overlay content */}
            <div className="absolute inset-0 top-70 flex h-150 flex-col md:flex-row items-center justify-center md:justify-between w-3/4 mx-auto text-gray-100 px-6 py-30">
              {/* Profile Image */}
              <div className="mb-6 ">
                <div className="w-90 rounded-xl shadow-xl overflow-hidden bg-gray-800">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* About text */}
              <div className="ml-6 md:ml-12 max-w-4xl text-left">
                <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
                  Hello, I'm <span className="text-indigo-400">{portfolioData.name}</span>
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed font-ibm-plex-sans max-w-3xl mb-8 text-slate-300">
                  I am a 3rd-year <span className="font-bold text-indigo-300">Computer Science & Engineering</span> student with a focus on <span className="font-bold text-indigo-300">Web Development</span> and <span className="font-bold text-indigo-300">Cybersecurity</span>. My interests also include <span className="font-bold text-indigo-300">Art</span> and <span className="font-bold text-indigo-300">Video Games</span>.
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


        <hr className="w-1/2 border-gray-700 my-6" />

        {/* Projects Section */}
        <section id="projects" className="p-8 w-3/4 mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-indigo-300 leading-tight mb-8 text-center animate-fade-in-down">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <hr className="w-1/2 border-gray-700 my-16" />

        {/* Contact Section */}
        <section id="contact" className="p-8 w-3/4 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl  font-bold mb-6 text-indigo-300">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl font-ibm-plex-sans  text-slate-300 mb-8">
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