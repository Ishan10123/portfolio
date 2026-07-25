const skills = [
  {
    title: "AI & Generative AI",
    items: [
      "LLMs",
      "Generative AI",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "MCP",
      "RAG",
      "Prompt Engineering",
      "Context Engineering",
      "OpenAI",
      "Azure OpenAI",
      "Google Gemini",
      "Hugging Face",
      "Ollama",
      "Intelligent Document Processing",
      "OCR",
      "Embeddings",
      "Hybrid Search",
      "Semantic Search",
      "Vector Search",
      "BM25",
      "Cohere Reranking",
      "NLP",
    ],
  },

  {
    title: "Programming Languages",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "Go",
      "HTML",
      "CSS",
      "C#",
    ],
  },

  {
    title: "Backend Development",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "gRPC",
      "API Integration",
      "Webhooks",
      "Pydantic",
      "JSON Processing",
      "Authentication",
      "Async Python",
    ],
  },

  {
    title: "Automation & AI Workflows",
    items: [
      "Power Automate",
      "Microsoft Copilot Studio",
      "UiPath",
      "n8n",
      "Workflow Automation",
      "RPA",
      "Enterprise Automation",
      "AI Automation",
    ],
  },

  {
    title: "Databases & Vector Stores",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "SQLite",
      "MongoDB",
      "Redis",
      "Neo4j",
      "ChromaDB",
      "Firebase Firestore",
      "Vector Databases",
    ],
  },

  {
    title: "Machine Learning & Data Science",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "EDA",
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "TensorFlow",
      "PyTorch",
      "Feature Engineering",
      "Model Evaluation",
      "Predictive Analytics",
      "Data Visualization",
      "MLOps",
    ],
  },

  {
    title: "Web Scraping",
    items: [
      "Playwright",
      "Selenium",
      "BeautifulSoup",
      "Web Crawling",
      "Automation Scripts",
    ],
  },

  {
    title: "Cloud, DevOps & Developer Tools",
    items: [
      "AWS",
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "CI/CD",
      "Postman",
      "Salesforce",
      "JIRA",
      "VS Code",
      "Jupyter Notebook",
    ],
  },

  {
    title: "Analytics & BI",
    items: [
      "Power BI",
      "Excel",
      "Snowflake",
      "Data Analytics",
      "ETL",
      "System Design",
      "Low-Level Design",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Technologies & Tools
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-gray-400">
          My expertise spans AI Engineering, Generative AI, backend
          development, intelligent automation, machine learning,
          data engineering, analytics, and scalable software systems.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-800 bg-white/5 p-7 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 bg-white/5 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500 hover:text-white"
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
