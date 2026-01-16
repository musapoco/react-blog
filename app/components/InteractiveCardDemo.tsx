"use client";

export default function InteractiveCardDemo() {
  return (
    <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-green-300 bg-gray-50 p-4 dark:bg-gray-800 dark:border-green-800">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">
          💡 実際の表示結果:
        </p>
        <div className="rounded bg-white p-4 dark:bg-gray-900">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              タイトル
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              説明文がここに入ります
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
          このコードを実行すると、上のようなカードが表示されます。カードコンポーネントは、情報を整理して見やすく表示するのに便利です。
        </p>
      </div>
    </div>
  );
}

