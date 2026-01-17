"use client";

import { useState } from "react";

export default function InteractiveFormSubmit() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setSubmitted(false);
    setSubmittedName("");
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                お名前:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
                placeholder="名前を入力"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            >
              送信
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="rounded bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                送信されました！
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                お名前: <strong>{submittedName}</strong>
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              もう一度試す
            </button>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 フォームを送信すると、入力された値が表示されます。onSubmitイベントハンドラーが動作していることが確認できます！
      </p>
    </div>
  );
}
