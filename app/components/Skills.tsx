const skills = [
  {
    title: "AI / Machine Learning",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "Hugging Face",
      "Prompt Engineering",
      "NLP",
      "Agentic AI",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Webhooks",
      "JSON Processing",
      "API Integration",
    ],
  },
  {
    title: "Automation & Workflows",
    items: [
      "Power Automate",
      "n8n",
      "RPA",
      "Copilot Studio",
      "Workflow Automation",
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      "MySQL",
      "PostgreSQL",
      "ChromaDB",
      "Vector Databases",
      "SQL Server",
    ],
  },
  {
    title: "Web Scraping",
    items: [
      "Playwright",
      "Selenium",
      "BeautifulSoup",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "GitHub",
      "Bitbucket",
      "AWS",
      "CI/CD",
      "Postman",
      "JIRA",
    ],
  },
];

export default function Skills() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-7xl mx-auto">

        <p className="text-sm text-purple-400 uppercase tracking-wider">
          Skills
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Technologies I Work With
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((category, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-lg hover:border-gray-600 transition duration-300"
            >

              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">

                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-gray-700 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}