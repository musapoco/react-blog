"use client";

import { useState } from "react";

export default function InteractiveErrorMessage() {
  const [hasError, setHasError] = useState(true);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <label className="flex cursor-pointer items-center gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              エラーあり
            </span>
            <input
              type="checkbox"
              checked={hasError}
              onChange={(e) => setHasError(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
            />
          </label>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          {hasError && (
            <p className="text-red-500 dark:text-red-400">
              エラーが発生しました
            </p>
          )}
          {!hasError && (
            <p className="text-gray-400 dark:text-gray-500">
              エラーはありません
            </p>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように条件によってメッセージが表示/非表示になります。チェックボックスを切り替えて、表示が変わることを確認してみましょう！
      </p>
    </div>
  );
}


