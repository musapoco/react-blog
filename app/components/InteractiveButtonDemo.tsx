"use client";

export default function InteractiveButtonDemo() {
  return (
    <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-green-300 bg-gray-50 p-4 dark:bg-gray-800 dark:border-green-800">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">
          💡 実際の表示結果:
        </p>
        <div className="rounded bg-white p-4 dark:bg-gray-900">
          <button className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
            クリック
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
          このコードを実行すると、上のようなボタンが表示されます。ボタンをクリックしてみてください！（現在は機能はついていませんが、コンポーネントとして正しく表示されています）
        </p>
      </div>
    </div>
  );
}

