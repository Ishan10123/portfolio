# Ishan Kaushik Portfolio

Modern portfolio for Ishan Kaushik, focused on AI software engineering, production AI agents, RAG systems, intelligent document processing, backend APIs, and enterprise automation.

## Tech Stack

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Portfolio Focus

- Production AI agents and agentic workflows
- Retrieval-Augmented Generation (RAG) pipelines
- FastAPI backend services and REST APIs
- Intelligent document processing, OCR, and structured extraction
- Microsoft Copilot Studio, Power Automate, UiPath, and n8n automation
- Enterprise integrations with databases, Salesforce, and third-party APIs

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run type-check
npm run build
```

Or run both:

```bash
npm run build:check
```

## Deployment

This app is ready for Vercel deployment.

Recommended environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

If deployed on Vercel without this variable, the app falls back to `VERCEL_URL` for metadata.

## Project Structure

```text
portfolio/
├── app/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── favicon.svg
│   ├── Ishan_Resume.pdf
│   └── myphoto.jpg
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Content Source

The portfolio content is aligned with the AI Software Developer and Data Science resume versions, with emphasis on production AI engineering, backend systems, automation, and measurable project impact.
