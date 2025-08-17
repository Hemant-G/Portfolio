import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const contact = {
    email: "john.doe@example.com",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-6">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}