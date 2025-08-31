import Link from 'next/link';

export const NavLink = ({ href, children, onClick }) => {
  return (
    <li>
      <Link href={href} onClick={onClick} className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg md:text-base group">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"></span>
      </Link>
    </li>
  );
};
