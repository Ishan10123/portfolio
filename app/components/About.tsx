import Image from "next/image";
export default function About() {
  const stats = [
    { value: "90%+", label: "Manual Effort Reduced" },
    { value: "50K+", label: "Documents Processed" },
    { value: "20–40 ms", label: "Retrieval Latency" },
    { value: "15+", label: "AI Workflows Delivered" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
          About Me
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Building AI That Solves Real Business Problems
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-gray-800 bg-white/5 backdrop-blur-xl">

                <Image
                  src="/myphoto.jpg"
                  alt="Portrait of Ishan Kaushik"
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-2xl font-semibold text-white">
              Hi, I'm Ishan Kaushik 👋
            </h3>

            <p className="mt-6 text-gray-300 leading-8 text-base">
              I'm an <span className="text-purple-400 font-medium">AI Engineer</span> passionate
              about building production-ready AI applications, intelligent
              automation systems, and scalable backend architectures that solve
              real-world business problems.
            </p>

            <p className="mt-6 text-gray-300 leading-8 text-base">
              My work focuses on <span className="text-white">Generative AI</span>,
              <span className="text-white"> AI Agents</span>,
              <span className="text-white"> Retrieval-Augmented Generation (RAG)</span>,
              <span className="text-white"> FastAPI</span>,
              <span className="text-white"> LangChain</span>,
              <span className="text-white"> Microsoft Copilot Studio</span>,
              and enterprise workflow automation. I enjoy designing secure,
              scalable systems that combine LLMs, automation, APIs, and data to
              streamline complex processes.
            </p>

            <p className="mt-6 text-gray-300 leading-8 text-base">
              Over the past year, I've worked on AI-powered proposal generation,
              intelligent document processing, resume automation, recruitment
              automation, enterprise search, RAG pipelines, and AI agent
              applications that reduce manual effort and improve operational
              efficiency.
            </p>

            {/* Tech Pills */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Python",
                "FastAPI",
                "Generative AI",
                "AI Agents",
                "LangChain",
                "LangGraph",
                "RAG",
                "LLMs",
                "Power Automate",
                "Copilot Studio",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full bg-white/5 border border-gray-700 text-sm text-gray-300 hover:border-purple-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-xl border border-gray-800 bg-white/5 backdrop-blur-lg p-5 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-xs text-gray-400">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}