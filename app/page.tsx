"use client";

import Image from "next/image";
import Link from "next/link";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FadeUp from "./components/ui/FadeUp";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Ishan10123",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ishankaushik/",
  },
  {
    name: "Email",
    href: "mailto:ishurbt1@gmail.com",
  },
];

const floatingTags = [
  { label: "LLM", position: "-top-6 left-10" },
  { label: "APIs", position: "top-10 -right-6" },
  { label: "RAG", position: "bottom-10 -left-6" },
  { label: "AI", position: "-bottom-6 right-10" },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Left */}

          <div>

            <FadeUp>

              <p className="mb-3 text-sm uppercase tracking-wider text-purple-400">
                Hi, I'm
              </p>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h1 className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
                Ishan Kaushik
              </h1>

            </FadeUp>

            <FadeUp delay={0.2}>

              <h2 className="mt-5 text-xl text-gray-300 md:text-2xl">
                AI Software Engineer | AI Automation | RAG Systems
              </h2>

            </FadeUp>

            <FadeUp delay={0.3}>

              <p className="mt-7 max-w-xl leading-8 text-gray-400">
                I build production-ready AI applications, AI Agents,
                Retrieval-Augmented Generation (RAG) systems, and scalable
                backend solutions that automate complex workflows and deliver
                measurable business impact.
              </p>

            </FadeUp>

            {/* CTA */}

            <FadeUp delay={0.4}>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#projects"
                  aria-label="View Projects"
                  className="rounded-lg bg-gradient-to-r from-white to-gray-300 px-6 py-3 font-medium text-black transition hover:scale-105"
                >
                  View My Projects
                </Link>

                <Link
                  href="#contact"
                  aria-label="Contact Me"
                  className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:border-white hover:bg-white/5"
                >
                  Contact Me
                </Link>

                <a
                  href="/Ishan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Resume"
                  className="rounded-lg border border-purple-500 px-6 py-3 font-medium text-purple-400 transition hover:bg-purple-500/10"
                >
                  View Resume
                </a>

              </div>

            </FadeUp>

            {/* Social */}

            <FadeUp delay={0.5}>

              <div className="mt-10 flex flex-wrap items-center gap-6">

                {socialLinks.map((social) => (

                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {social.name}
                  </a>

                ))}

              </div>

            </FadeUp>

          </div>

          {/* Right */}

          <FadeUp delay={0.3}>

            <div className="relative hidden items-center justify-center md:flex">

              <div className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />

              <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-gray-800 bg-white/5 backdrop-blur-xl">

                <Image
                  src="/myphoto.jpg"
                  alt="Ishan Kaushik"
                  width={288}
                  height={288}
                  priority
                  className="rounded-full object-cover"
                />

                {floatingTags.map((tag) => (

                  <div
                    key={tag.label}
                    className={`absolute ${tag.position} rounded-lg border border-gray-700 bg-white/10 px-3 py-2 text-xs backdrop-blur-md transition hover:scale-110`}
                  >
                    {tag.label}
                  </div>

                ))}

              </div>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Divider */}

      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent md:mx-20" />

      {/* Sections */}

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
