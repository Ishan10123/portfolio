export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 relative"
    >
      {/* subtle glow background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <p className="text-sm text-purple-400 uppercase tracking-widest">
          About Me
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Get to know me
        </h2>

        {/* Content */}
        <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — IMAGE */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-xl overflow-hidden">

              {/* glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />

              <img
                src="/myphoto.jpg"
                alt="Ishan Kaushik"
                className="relative w-full h-full object-cover rounded-2xl"
              />

            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              I'm an AI Engineer with hands-on experience in building end-to-end AI-driven systems, automation workflows, and scalable data pipelines. I specialize in LLMs, RAG, and backend development using Python, FastAPI, and modern cloud technologies.
            </p>

            <p className="mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
              I focus on solving complex problems with intelligent automation and building systems that deliver measurable business outcomes.
            </p>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">

              {[
                { value: "90%+", label: "Manual Effort Reduced" },
                { value: "50K+", label: "Documents Processed" },
                { value: "20-40ms", label: "Avg Retrieval Latency" },
                { value: "15+", label: "Automation Workflows" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border border-gray-800 rounded-xl p-5 bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-1 transition duration-300"
                >
                  <p className="text-xl font-semibold text-white group-hover:text-purple-400 transition">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
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