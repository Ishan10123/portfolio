const experiences = [
  {
    role: "Software Engineer",
    company: "vTech Solution Inc",
    period: "Jun 2025 - Present",
    description:
      "Building production-ready AI applications, AI agents, RAG pipelines, workflow automation, Salesforce applications, and scalable backend services using Python and FastAPI. Delivered proposal generation, resume processing, recruitment automation, and enterprise AI workflows that reduced manual effort by up to 90%.",
    skills: [
      "Python",
      "FastAPI",
      "AI Agents",
      "RAG",
      "LLMs",
      "Salesforce",
      "Power Automate",
    ],
  },

  {
    role: "Data Science Intern",
    company: "1Stop.ai (E-Cell IIT Roorkee)",
    period: "2024",
    description:
      "Built machine learning models, performed exploratory data analysis, and developed NLP-based spam SMS classification. Applied feature engineering, model evaluation, and data visualization to generate actionable business insights.",
    skills: [
      "Python",
      "Machine Learning",
      "NLP",
      "Scikit-learn",
      "Pandas",
    ],
  },

  {
    role: "Technical Head",
    company: "Student Activity Center (SAC), RTU Kota",
    period: "2023 - 2025",
    description:
      "Led the technical team for university events, managed workshops, coordinated hackathons and exhibitions, and mentored students in software development, robotics, and emerging technologies.",
    skills: [
      "Leadership",
      "Project Management",
      "Workshops",
      "Mentoring",
    ],
  },

  {
    role: "Secretary",
    company: "Robotics Club, RTU Kota",
    period: "2022 - 2025",
    description:
      "Organized robotics workshops, technical events, and collaborative projects while mentoring juniors in embedded systems, sensors, automation, and engineering fundamentals.",
    skills: [
      "Robotics",
      "Embedded Systems",
      "Sensors",
      "Leadership",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.25em] text-sm text-purple-400">
          Experience
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Professional Journey
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl">
          My journey spans AI Engineering, backend development, data science,
          leadership, and building intelligent systems that solve real-world
          business challenges.
        </p>

        <div className="relative mt-14">

          <div className="absolute left-4 top-0 h-full w-px bg-gray-800" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (

              <div
                key={index}
                className="relative pl-14"
              >

                <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                  {index + 1}
                </div>

                <div className="rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-lg p-7 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    <div>

                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-purple-400 font-medium">
                        {exp.company}
                      </p>

                    </div>

                    <span className="text-sm text-gray-400">
                      {exp.period}
                    </span>

                  </div>

                  <p className="mt-5 leading-8 text-gray-300">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {exp.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full border border-gray-700 bg-white/5 px-3 py-1 text-xs text-gray-300 hover:border-purple-500 transition"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
