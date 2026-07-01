
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "DocTrace AI — Document RAG Report Generator", description: "Portfolio demo for document AI, grounded RAG and structured report generation." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
