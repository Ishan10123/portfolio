export default function Projects() {
  const projects = [
    {
      title: "AI Proposal Copilot",
      desc: "Multi-agent AI system for RFP analysis, compliance matrix generation, and proposal drafting.",
      tech: ["Copilot Studio", "Power Automate", "LLM"],
      github: "https://github.com/Ishan10123/Proposal-Bot-Copilot-Studio-Agent",
    },
    {
      title: "RAG Pipeline System",
      desc: "End-to-end RAG pipeline with hybrid search, embeddings, and reranking.",
      tech: ["LangChain", "OpenAI", "ChromaDB"],
      github: "https://github.com/Ishan10123/RAG-Pipeline-from-scratch",
    },
    {
      title: "AI Resume Automation",
      desc: "FastAPI system for parsing and generating structured resumes using LLMs.",
      tech: ["FastAPI", "Ollama", "Python"],
      github: "https://github.com/Ishan10123/AI_Resume_Formatting",
    },
    {
      title: "Opportunity Scraper",
      desc: "Automated scraping + filtering system for government opportunities.",
      tech: ["Playwright", "Python", "Automation"],
      github: "https://github.com/Ishan10123/Opportunity_Scraper",
    },
    {
      title: "Candidate Sourcing AI",
      desc: "Automated candidate sourcing using n8n workflows and LLM enrichment.",
      tech: ["n8n", "LLM", "APIs"],
      github: "https://github.com/Ishan10123/Candidate-sourcing-using-n8n-",
    },
    {
      title: "AI Skin Analyzer",
      desc: "CNN-based computer vision system for real-time skin analysis.",
      tech: ["OpenCV", "CNN", "ML"],
      github: "https://github.com/Ishan10123/AI-Skin-Analyzer",
    },
    {
      title: "Spam SMS Detection",
      desc: "NLP-based spam classification model with high accuracy.",
      tech: ["NLP", "Scikit-learn"],
      github: "https://github.com/Ishan10123/Spam-SMS-Project",
    },
    {
      title: "Credit Risk EDA",
      desc: "Exploratory analysis uncovering insights in credit datasets.",
      tech: ["Pandas", "EDA"],
      github: "https://github.com/Ishan10123/Credit-EDA-Project-1Stop.ai-",
    },
    {
      title: "Super Store Sales Forecast",
      desc: "Power BI dashboard for forecasting sales trends and optimizing inventory decisions.",
      tech: ["Power BI", "SQL", "Analytics"],
      github: "https://github.com/Ishan10123/Super_Store_Sales_Forecast_Dashboard",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Things I’ve Built
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-gray-800 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
            >

              <h3 className="text-lg font-semibold text-white">
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 border border-gray-700 px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300"
                >
                  GitHub →
                </a>

                <span className="text-gray-500 group-hover:text-gray-300 transition">
                  View Project
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}