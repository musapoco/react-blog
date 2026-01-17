"use client";

import { useState } from "react";

export default function InteractiveButtonClick() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setMessage(`ボタンが${clickCount + 1}回クリックされました！`);
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
          <button
            onClick={handleClick}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            クリックしてください
          </button>
          {message && (
            <div className="rounded bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                {message}
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 ボタンをクリックすると、クリック回数がカウントされます。onClickイベントハンドラーが動作していることが確認できます！
      </p>
    </div>
  );
}
