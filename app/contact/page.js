import { Github, Linkedin, Mail } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  const contact = {
    email: "john.doe@example.com",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <section id="contact" className="p-8 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl font-inter text-gray-300 mb-8">
            Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail size={40} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github size={40} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={40} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}