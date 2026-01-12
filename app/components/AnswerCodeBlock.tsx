"use client";

import { useState } from "react";

interface AnswerCodeBlockProps {
  code: string;
  className?: string;
}

export default function AnswerCodeBlock({
  code,
  className = "",
}: AnswerCodeBlockProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!showAnswer) return;
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
      <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800 min-h-[3rem]">
        {showAnswer ? (
          <code>{code}</code>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-500">コードは非表示です</span>
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        {showAnswer && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
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
        )}
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors text-xs font-medium"
          title={showAnswer ? "コードを隠す" : "正解を見る"}
        >
          {showAnswer ? "隠す" : "正解を見る"}
        </button>
      </div>
    </div>
  );
}

