import Link from 'next/link';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// The main page component for the home/about section.
export default function HomePage() {
  const portfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    about: {
      bio: "I'm a full stack developer with a deep passion for **Computer Science**, **Art**, and **Video Games**. I love building applications that blend technical excellence with creative design, always seeking to create intuitive and memorable digital experiences. I thrive on the challenge of bringing complex ideas to life through code."
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        <section id="about" className=" mx-auto w-full text-center">
          <div className="relative bg-gray-900/80 shadow-2xl p-0 md:p-0 overflow-hidden animate-fade-in ">
            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/profile.jpg"
                alt="Profile Poster"
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-row items-center justify-center h-full text-white px-6 py-10 md:py-16">
              <div className="mb-6 ">
                <div className="w-100 rounded shadow-xl overflow-hidden  bg-gray-800">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className='ml-6 md:ml-12 max-w-2xl'>
                <h2 className="text-4xl md:text-7xl font-playfair font-bold leading-tight mb-4 animate-slide-up animation-delay-300 drop-shadow-lg">
                  Hello, I'm <span className="text-cyan-400">{portfolioData.name}</span>
                </h2>
                <p className="text-2xl md:text-4xl font-inter font-light text-cyan-300 mb-8 animate-slide-up animation-delay-600 drop-shadow">
                  {portfolioData.title}
                </p>
                <p className="text-lg md:text-xl font-inter leading-relaxed max-w-2xl mb-12 animate-fade-in animation-delay-900 text-gray-200">
                  {portfolioData.about.bio}
                </p>
                <Link href="/projects" className="inline-block bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 animate-fade-in animation-delay-1200">
                  View Projects
                </Link>
                <Link href="/projects" className="inline-block ml-4 bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 animate-fade-in animation-delay-1500">
                  Creative Works
                </Link>
                <Link href="/contact" className="inline-block ml-4 bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 animate-fade-in animation-delay-1500">
                  Contact Me
                </Link>
              </div>


            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}