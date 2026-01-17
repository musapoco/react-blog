"use client";

import { useState } from "react";

export default function InteractiveExampleTextInput() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
      <p className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
        🎯 成果物（実際の動作）
      </p>
      <div className="space-y-3">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="入力してください"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
        <p className="text-gray-900 dark:text-white">
          入力された値: {text}
        </p>
      </div>
    </div>
  );
}

