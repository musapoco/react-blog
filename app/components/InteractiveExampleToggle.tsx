"use client";

import { useState } from "react";

export default function InteractiveExampleToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
      <p className="mb-3 text-sm font-medium text-blue-900 dark:text-blue-100">
        🎯 成果物（実際の動作）
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${
              isOn
                ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                : "bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          >
            {isOn ? "ON" : "OFF"}
          </button>
          <p className="text-gray-900 dark:text-white">
            状態: {isOn ? "オン" : "オフ"}
          </p>
        </div>
      </div>
    </div>
  );
}

