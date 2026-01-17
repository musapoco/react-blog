"use client";

import { useState } from "react";

export default function InteractiveUserProfile() {
  const [name, setName] = useState("山田太郎");
  const [age, setAge] = useState(25);
  const [job, setJob] = useState("エンジニア");

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="mb-3 space-y-2">
            <div className="flex items-center gap-2">
              <label className="w-16 text-xs text-gray-600 dark:text-gray-400">
                名前:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-16 text-xs text-gray-600 dark:text-gray-400">
                年齢:
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-24 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-16 text-xs text-gray-600 dark:text-gray-400">
                職業:
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">年齢: {age}歳</p>
          <p className="text-gray-700 dark:text-gray-300">職業: {job}</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 複数のpropsを渡すことで、異なる情報を含むプロフィールを表示できます。値を変更して動作を確認してみましょう！
      </p>
    </div>
  );
}
