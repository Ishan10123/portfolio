"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">

        <div className="text-white font-semibold text-lg tracking-wide">
          {"</>"} Ishan
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

        </div>

      </div>
    </nav>
  );
}