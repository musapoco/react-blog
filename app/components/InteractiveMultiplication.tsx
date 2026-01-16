"use client";

import { useState } from "react";

export default function InteractiveMultiplication() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="mb-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-600 dark:text-gray-400">
                数値1:
              </label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="w-20 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-600 dark:text-gray-400">
                数値2:
              </label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="w-20 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <p className="text-gray-900 dark:text-white">
            {num1} × {num2} = {num1 * num2}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように計算結果が表示されます。数値を変更して、計算結果が自動的に更新されることを確認してみましょう！
      </p>
    </div>
  );
}


