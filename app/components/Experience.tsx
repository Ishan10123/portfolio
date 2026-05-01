const experiences = [
  {
    role: "Software Engineer",
    company: "vTech Solution Inc",
    period: "2025 – Present",
    description:
      "Building AI automation systems, RAG pipelines, and scalable backend solutions. Delivered AI-driven recruitment and proposal automation systems reducing manual effort by up to 90%.",
  },
  {
    role: "Data Science Intern",
    company: "1Stop.ai (E-Cell IIT Roorkee)",
    period: "2024",
    description:
      "Developed ML models including spam SMS classifier and performed EDA on financial datasets. Improved model accuracy and delivered insights through data visualization.",
  },
  {
    role: "Technical Advisor",
    company: "Student Activity Center, RTU",
    period: "2024 – 2025",
    description:
      "Led technical initiatives, managed workshops, and improved event workflows through automation and structured planning.",
  },
  {
    role: "Secretary",
    company: "Robotics Club, RTU",
    period: "2023 – 2025",
    description:
      "Led technical teams, organized workshops, and mentored juniors in embedded systems, sensors, and project development.",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-5xl mx-auto">

        <p className="text-sm text-purple-400 uppercase tracking-wider">
          Experience
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          My Journey
        </h2>

        <div className="mt-12 relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-800" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">

                {/* Dot */}
                <div className="absolute left-2 top-2 w-4 h-4 bg-white rounded-full border-2 border-[#0a0a0a]" />

                {/* Card */}
                <div className="border border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-lg hover:border-gray-600 transition">

                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {exp.company} • {exp.period}
                  </p>

                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}