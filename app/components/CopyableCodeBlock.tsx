"use client";

import { useState } from "react";

interface CopyableCodeBlockProps {
  code: string;
  className?: string;
}

export default function CopyableCodeBlock({
  code,
  className = "",
}: CopyableCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
        <code className="whitespace-pre">{code}</code>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
        title={copied ? "コピーしました！" : "コピー"}
      >
        {copied ? (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

