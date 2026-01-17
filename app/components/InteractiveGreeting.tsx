"use client";

import { useState } from "react";

export default function InteractiveGreeting() {
  const [name, setName] = useState("太郎");

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-xs text-gray-600 dark:text-gray-400">
              名前:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-32 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="名前を入力"
            />
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <p className="text-gray-900 dark:text-white">
            こんにちは、{name}さん！
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 propsで渡された名前が表示されます。名前を変更すると、表示も自動的に更新されます！
      </p>
    </div>
  );
}
