import Link from 'next/link';

export function Header() {
  const name = "John Doe";

  return (
    <header className="bg-gray-900 text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-playfair">
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">
            {name}
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-8 font-inter">
            <li>
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}