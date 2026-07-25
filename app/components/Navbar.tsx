"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}

          <Link
            href="#home"
            className="flex items-center gap-2 text-xl font-bold tracking-wide text-white transition hover:text-purple-400"
            aria-label="Go to Home"
          >
            <span className="text-purple-400">&lt;/&gt;</span>
            <span>Ishan</span>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition hover:text-purple-400"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/Ishan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:scale-105 hover:shadow-purple-500/40"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Toggle */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}

      <div
        id="mobile-menu"
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-full bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-gray-800 py-4 text-lg font-medium text-gray-300 transition hover:text-purple-400"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/Ishan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Open Resume"
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 text-center font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02]"
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
