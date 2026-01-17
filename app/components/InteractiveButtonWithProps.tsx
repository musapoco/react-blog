"use client";

import { useState } from "react";

export default function InteractiveButtonWithProps() {
  const [buttonText, setButtonText] = useState("購入する");
  const [buttonColor, setButtonColor] = useState("blue");

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600",
    green: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600",
    red: "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600",
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="mb-3 space-y-2">
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs text-gray-600 dark:text-gray-400">
                ボタンのテキスト:
              </label>
              <input
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs text-gray-600 dark:text-gray-400">
                ボタンの色:
              </label>
              <select
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
                className="rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option value="blue">青</option>
                <option value="green">緑</option>
                <option value="red">赤</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rounded bg-white p-4 dark:bg-gray-900">
          <button
            className={`rounded px-4 py-2 text-white transition-colors ${colorClasses[buttonColor]}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 propsでテキストや色などの属性を変更することで、同じコンポーネントを異なる見た目や機能で使えます！
      </p>
    </div>
  );
}
