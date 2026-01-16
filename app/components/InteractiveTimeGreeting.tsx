"use client";

import { useState } from "react";

export default function InteractiveTimeGreeting() {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <label className="flex cursor-pointer items-center gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {isMorning ? "午前" : "午後"}
            </span>
            <input
              type="checkbox"
              checked={isMorning}
              onChange={(e) => setIsMorning(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
            />
          </label>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          {isMorning ? (
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              おはようございます
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              こんにちは
            </h1>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように条件によって表示が変わります。チェックボックスを切り替えて、表示が変わることを確認してみましょう！
      </p>
    </div>
  );
}


