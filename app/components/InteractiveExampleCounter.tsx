"use client";

import { useState } from "react";

export default function InteractiveExampleCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
      <p className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
        🎯 成果物（実際の動作）
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <p className="text-gray-900 dark:text-white">カウント: {count}</p>
          <button
            onClick={handleClick}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

