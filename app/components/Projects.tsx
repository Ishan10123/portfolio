export default function Projects() {
  const projects = [
    {
      title: "Fluid AI Autonomous Document Agent",
      desc: "Autonomous agentic AI application with planning, execution, reflection, structured JSON outputs, validation, and professional DOCX report generation.",
      tech: ["FastAPI", "Google Gemini", "Pydantic", "Python"],
      github: "https://github.com/Ishan10123/Fluid-AI-Autonomous-Agents",
      featured: true,
    },

    {
      title: "SmartNode Support Intelligence",
      desc: "AI-powered support triage platform for classifying customer calls, emails, and attachments with transcription, summaries, ticket routing, and SLA workflows.",
      tech: ["Streamlit", "Whisper", "Python", "LLM"],
      github: "https://github.com/Ishan10123/smartnode-support-triage",
      featured: true,
    },

    {
      title: "MoveUp Media AI Operations",
      desc: "Enterprise AI platform for YouTube analytics, operational intelligence, autonomous reporting, and conversational insights.",
      tech: ["Streamlit", "Gemini", "YouTube API", "Python"],
      github: "https://github.com/Ishan10123/Move-Up-Media-AI-Automation",
      featured: true,
    },

    {
      title: "AI Proposal Copilot",
      desc: "Multi-agent AI system for RFP analysis, compliance validation, proposal generation, and enterprise document intelligence.",
      tech: ["Copilot Studio", "Power Automate", "Azure OpenAI"],
      github: "https://github.com/Ishan10123/Proposal-Bot-Copilot-Studio-Agent",
    },

    {
      title: "RAG Pipeline From Scratch",
      desc: "Production-style Retrieval-Augmented Generation pipeline with hybrid search, reciprocal rank fusion, Cohere reranking, retrieval evaluation, and security guardrails.",
      tech: ["LangChain", "ChromaDB", "OpenAI", "Cohere"],
      github: "https://github.com/Ishan10123/RAG-Pipeline-from-scratch",
    },

    {
      title: "AI Resume Formatter",
      desc: "FastAPI-based intelligent document processing app that extracts, normalizes, and converts PDF/DOC/DOCX resumes into structured JSON and recruiter-ready templates.",
      tech: ["FastAPI", "Ollama", "Python"],
      github: "https://github.com/Ishan10123/AI_Resume_Formatting",
    },

    {
      title: "AI Account Intelligence",
      desc: "AI-powered account enrichment platform that identifies companies, predicts buying intent, enriches profiles, and recommends sales actions.",
      tech: ["Python", "Streamlit", "AI Agents"],
      github: "https://github.com/Ishan10123/ai-account-intelligence-system",
    },

    {
      title: "Opportunity Scraper",
      desc: "Automated Playwright-based scraper for SAM.gov and GovWin with filtering, structured exports, scheduling, and email reports.",
      tech: ["Playwright", "Python", "Automation"],
      github: "https://github.com/Ishan10123/Opportunity_Scraper",
    },

    {
      title: "Candidate Sourcing AI",
      desc: "AI-powered recruitment workflow using n8n, LLMs, resume parsing, candidate enrichment, and automated sourcing.",
      tech: ["n8n", "LLMs", "Automation"],
      github: "https://github.com/Ishan10123/Candidate-sourcing-using-n8n-",
    },

    {
      title: "AI Skin Analyzer",
      desc: "Computer vision application that analyzes skin conditions using CNNs and OpenCV.",
      tech: ["OpenCV", "CNN", "Deep Learning"],
      github: "https://github.com/Ishan10123/AI-Skin-Analyzer",
    },

    {
      title: "Spam SMS Detection",
      desc: "Machine learning model for spam message classification using NLP and Scikit-learn.",
      tech: ["NLP", "Scikit-learn", "Python"],
      github: "https://github.com/Ishan10123/Spam-SMS-Project",
    },

    {
      title: "Credit Risk EDA",
      desc: "Exploratory data analysis project uncovering financial risk patterns through visualization and statistical analysis.",
      tech: ["Pandas", "EDA", "Python"],
      github: "https://github.com/Ishan10123/Credit-EDA-Project-1Stop.ai-",
    },

    {
      title: "Super Store Sales Forecast",
      desc: "Interactive Power BI dashboard for forecasting sales trends and supporting inventory planning.",
      tech: ["Power BI", "SQL", "Analytics"],
      github: "https://github.com/Ishan10123/Super_Store_Sales_Forecast_Dashboard",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.25em] text-sm text-purple-400">
          Projects
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Featured AI Projects
        </h2>

        <p className="mt-5 max-w-3xl text-gray-400 leading-8">
          A collection of AI applications, Generative AI solutions,
          intelligent automation systems, RAG pipelines, backend services,
          and machine learning projects built to solve real-world problems.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
            >

              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-medium text-white">
                  Featured
                </span>
              )}

              <p className="text-xs text-gray-500">
                Project {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {project.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-md border border-gray-700 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-8 flex items-center justify-between">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-400 transition hover:text-purple-300"
                >
                  View Repository
                </a>

                <span className="text-sm text-gray-500 transition group-hover:text-white">
                  GitHub
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
