"use client";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FadeUp from "./components/ui/FadeUp";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24"
      >
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-start justify-center">

            <FadeUp>
              <p className="text-sm text-gray-400 mb-2">
                Hi, I'm
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Ishan Kaushik
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-400">
                AI Engineer | AI Automation & RAG Systems
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 text-gray-300 max-w-xl leading-relaxed text-sm sm:text-base">
                I build intelligent AI automation systems, RAG pipelines, and scalable backend solutions that reduce manual effort and deliver measurable business impact.
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 active:scale-95 transition"
                >
                  View My Projects →
                </a>

                <a
                  href="#contact"
                  className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:border-white hover:bg-white/5 hover:scale-105 transition"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/10 hover:scale-105 transition"
                >
                  Resume
                </a>

              </div>
            </FadeUp>

            {/* SOCIAL */}
            <FadeUp delay={0.5}>
              <div className="mt-8 flex items-center gap-6 text-gray-400 text-sm">

                <a
                  href="https://github.com/Ishan10123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ishankaushik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:ishurbt1@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>

              </div>
            </FadeUp>

          </div>

          {/* RIGHT */}
          <FadeUp delay={0.3}>
            <div className="hidden md:flex items-center justify-center relative">

              {/* Glow */}
              <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />

              {/* Avatar */}
              <div className="relative w-80 h-80 rounded-full border border-gray-800 bg-white/5 backdrop-blur-xl flex items-center justify-center">

                <img
                  src="/myphoto.jpg"
                  alt="Ishan Kaushik"
                  className="w-72 h-72 rounded-full object-cover"
                />

                {/* TAGS */}
                {[
                  { label: "LLM", pos: "-top-6 left-10" },
                  { label: "APIs", pos: "top-10 -right-6" },
                  { label: "RAG", pos: "bottom-10 -left-6" },
                  { label: "AI", pos: "-bottom-6 right-10" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`absolute ${item.pos} text-xs bg-white/10 border border-gray-700 px-3 py-2 rounded-lg hover:scale-110 transition`}
                  >
                    {item.label}
                  </div>
                ))}

              </div>

            </div>
          </FadeUp>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-6 md:mx-20" />

      {/* SECTIONS */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

    </div>
  );
}