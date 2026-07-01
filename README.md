# DocTrace AI — Document AI / RAG Report Generator

DocTrace AI is a public portfolio demo for **Fredy Gimenez** showing a document-processing workflow: seeded files are indexed, a grounded RAG answer is generated with visible citations, and a structured report can be exported.

## Public demo

Vercel URL will be added after deployment.

## What it demonstrates

- Document upload/indexing workflow UI
- Grounded RAG question-answering pattern
- Source evidence panel with citations
- Structured report builder
- Markdown/JSON export actions
- Safe mock API routes for repeatable demos

## Stack

- Next.js + TypeScript
- Google Stitch exact HTML exports mounted in fullscreen iframes
- Progressive JS interaction layer inside the Stitch export
- Mock API routes under `app/api/*`
- FastAPI-ready backend notes under `backend/`

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Demo script

1. Open the processing cockpit.
2. Click **Upload** to view seeded files and indexing state.
3. Click **Ask RAG** to generate a grounded answer.
4. Click **Generate report** to open the report screen.
5. Export Markdown/JSON safely.

## Architecture

```text
Stitch HTML export
  → Next.js iframe shell
  → in-place JS layer for drawers/modals/toasts/downloads
  → /api/query/demo and /api/reports/demo mock routes
  → future FastAPI parser/retrieval/report backend
```

## Known limitations

This is a portfolio V1. It does not run real embeddings, OCR, PDF parsing, pgvector or LLM calls in production. Those are documented extension points for client work.

## Proposal paragraph

I built DocTrace AI, a document AI/RAG portfolio demo that shows how PDFs, meeting notes and operational documents can be indexed, queried with grounded answers, and converted into structured reports with visible citations. The V1 is a safe public demo using Next.js, TypeScript and mock RAG APIs, designed to be extended with FastAPI, vector retrieval and PDF parsing for client projects.
