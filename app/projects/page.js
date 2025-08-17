import { Header } from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { Footer } from '../../components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site built with React, Node.js, and Stripe.",
      image: "/project-1.jpg", // Replace with your own image file
      tech: ["React", "Node.js", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A clean and simple task manager with drag-and-drop functionality.",
      image: "/project-2.jpg", // Replace with your own image file
      tech: ["Vue.js", "Firebase", "CSS Grid"],
      link: "#"
    },
    {
      id: 3,
      title: "Personal Blog",
      description: "A Gatsby-powered blog to share my thoughts on technology and coding.",
      image: "/project-3.jpg", // Replace with your own image file
      tech: ["Gatsby", "GraphQL", "Markdown"],
      link: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather app that fetches data from a public API.",
      image: "/project-4.jpg", // Replace with your own image file
      tech: ["JavaScript", "HTML", "CSS"],
      link: "#"
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <section id="projects" className="p-8 max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-playfair font-extrabold text-white leading-tight mb-8 text-center animate-fade-in-down">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}