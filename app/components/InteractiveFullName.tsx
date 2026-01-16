"use client";

import { useState } from "react";

export default function InteractiveFullName() {
  const [lastName, setLastName] = useState("山田");
  const [firstName, setFirstName] = useState("花子");

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
                姓:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-24 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-600 dark:text-gray-400">
                名:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-24 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {lastName}{firstName}
          </h2>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように変数を連結して表示されます。姓や名を変更して、表示が更新されることを確認してみましょう！
      </p>
    </div>
  );
}


