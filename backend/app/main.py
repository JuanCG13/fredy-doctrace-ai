"""FastAPI-ready backend sketch for DocTrace AI.

The public Vercel demo uses mock Next.js API routes. This file documents the intended extension path without requiring secrets.
"""
from fastapi import FastAPI

app = FastAPI(title="DocTrace AI Backend Skeleton")

@app.get('/health')
def health():
    return {"ok": True, "service": "doctrace-ai-backend-skeleton"}
