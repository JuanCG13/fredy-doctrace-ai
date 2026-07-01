# Architecture — DocTrace AI

## V1 public demo

- Next.js hosts two Stitch-exported screens: processing cockpit and generated report.
- Interactions are handled inside the export via a small JS layer.
- API routes return deterministic mock RAG/report payloads.
- Exports are local browser downloads only.

## Production extension path

1. FastAPI upload endpoint receives PDF/TXT/MD.
2. Parser extracts text and metadata.
3. Chunker stores passages with document IDs and section refs.
4. Embedding worker writes vectors to pgvector/Qdrant/Chroma.
5. Retriever returns top-k source excerpts.
6. Report generator composes structured sections with citation checks.
7. Export service renders Markdown/PDF.
