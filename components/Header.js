import Link from 'next/link';

export function Header() {
  const name = "Hemant Singh";

  return (
    <header className="bg-gray-950/70 backdrop-blur-lg w-full flex justify-center items-center text-gray-100 shadow-xl sticky top-0 z-50">
      <div className="container w-full p-2 flex justify-between items-center transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white ">
          <Link href="#about" className="group relative overflow-hidden inline-block hover:text-indigo-400 transition-colors duration-300">
            {name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link href="#about" className="relative text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link href="#projects" className="relative text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base group">
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link href="#creatives" className="relative text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base group">
                Creative Works
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link href="#contact" className="relative text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}