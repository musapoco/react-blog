"use client";

import { useState } from "react";

export default function InteractiveFrameworkList() {
  const [frameworks, setFrameworks] = useState(["React", "Vue", "Angular"]);

  const addFramework = () => {
    const frameworksList = ["React", "Vue", "Angular", "Svelte", "Next.js"];
    const availableFrameworks = frameworksList.filter(
      (f) => !frameworks.includes(f)
    );
    if (availableFrameworks.length > 0) {
      const newFrameworks = [...frameworks, availableFrameworks[0]];
      setFrameworks(newFrameworks);
    }
  };

  const removeFramework = (index: number) => {
    const newFrameworks = frameworks.filter((_, i) => i !== index);
    setFrameworks(newFrameworks);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <button
            onClick={addFramework}
            disabled={frameworks.length >= 5}
            className="rounded bg-green-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            + フレームワークを追加
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {framework}
              </h3>
              <button
                onClick={() => removeFramework(index)}
                className="absolute top-2 right-2 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                削除
              </button>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このようにカード形式でリストが表示されます。フレームワークを追加・削除して動作を確認してみましょう！
      </p>
    </div>
  );
}


