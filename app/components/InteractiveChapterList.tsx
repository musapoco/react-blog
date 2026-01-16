"use client";

import { useState } from "react";

export default function InteractiveChapterList() {
  const [chapters, setChapters] = useState(["第1章", "第2章", "第3章"]);

  const addChapter = () => {
    const newChapters = [...chapters, `第${chapters.length + 1}章`];
    setChapters(newChapters);
  };

  const removeChapter = (index: number) => {
    const newChapters = chapters.filter((_, i) => i !== index);
    setChapters(newChapters);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <button
            onClick={addChapter}
            className="rounded bg-green-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-green-700"
          >
            + 章を追加
          </button>
        </div>
        <ol className="list-decimal list-inside space-y-1">
          {chapters.map((chapter, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 dark:bg-gray-800"
            >
              <span className="text-gray-900 dark:text-white">
                {chapter}: JSXの基礎
              </span>
              <button
                onClick={() => removeChapter(index)}
                className="text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                削除
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように番号付きリストが表示されます。章を追加・削除して動作を確認してみましょう！
      </p>
    </div>
  );
}


