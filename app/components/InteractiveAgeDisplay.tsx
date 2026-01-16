"use client";

import { useState } from "react";

export default function InteractiveAgeDisplay() {
  const [age, setAge] = useState(20);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-600 dark:text-gray-400">
              年齢:
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              min="0"
              max="120"
              className="w-20 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <p className="text-gray-900 dark:text-white">
            私は{age}歳です
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように変数の値が表示されます。年齢を変更して、表示が更新されることを確認してみましょう！
      </p>
    </div>
  );
}


