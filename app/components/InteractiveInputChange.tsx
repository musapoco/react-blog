"use client";

import { useState } from "react";

export default function InteractiveInputChange() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setDisplayValue(value);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              入力してください:
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
              placeholder="テキストを入力..."
            />
          </div>
          {displayValue && (
            <div className="rounded bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                入力された値: <strong>{displayValue}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 入力フィールドに文字を入力すると、リアルタイムで値が表示されます。onChangeイベントハンドラーが動作していることが確認できます！
      </p>
    </div>
  );
}
