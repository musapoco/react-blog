"use client";

export default function ArrayUpdateDiagram() {
  return (
    <div className="my-6 rounded-lg border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-cyan-900 dark:text-cyan-100">
        📋 配列の状態更新パターン
      </h3>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* 追加 */}
          <div className="rounded-lg border-2 border-green-300 bg-white p-4 shadow-lg dark:border-green-700 dark:bg-gray-900">
            <h4 className="mb-3 text-lg font-bold text-green-900 dark:text-green-100">
              ➕ 要素を追加する
            </h4>
            <div className="rounded-lg bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
              <code className="text-green-800 dark:text-green-200">
                setItems([...items, newItem]);
              </code>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="rounded border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">B</span>
                </div>
              </div>
              <span className="text-lg">+</span>
              <div className="rounded border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                <span className="rounded bg-green-100 px-2 py-1 text-xs dark:bg-green-900/50">C</span>
              </div>
              <span className="text-lg">=</span>
              <div className="rounded border-2 border-green-400 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/30">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">B</span>
                  <span className="rounded bg-green-100 px-2 py-1 text-xs dark:bg-green-900/50">C</span>
                </div>
              </div>
            </div>
          </div>

          {/* 削除 */}
          <div className="rounded-lg border-2 border-red-300 bg-white p-4 shadow-lg dark:border-red-700 dark:bg-gray-900">
            <h4 className="mb-3 text-lg font-bold text-red-900 dark:text-red-100">
              ➖ 要素を削除する
            </h4>
            <div className="rounded-lg bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
              <code className="text-red-800 dark:text-red-200">
                setItems(items.filter(item ={`>`} item.id !== id));
              </code>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="rounded border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-red-200 px-2 py-1 text-xs line-through dark:bg-red-900/50">B</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">C</span>
                </div>
              </div>
              <span className="text-lg">→</span>
              <div className="rounded border-2 border-green-400 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/30">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">C</span>
                </div>
              </div>
            </div>
          </div>

          {/* 更新 */}
          <div className="rounded-lg border-2 border-yellow-300 bg-white p-4 shadow-lg dark:border-yellow-700 dark:bg-gray-900">
            <h4 className="mb-3 text-lg font-bold text-yellow-900 dark:text-yellow-100">
              ✏️ 要素を更新する
            </h4>
            <div className="rounded-lg bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
              <code className="text-yellow-800 dark:text-yellow-200">
                setItems(items.map(item ={`>`} <br />
                &nbsp;&nbsp;item.id === id ? {`{`}...item, ...updates{`}`} : item
                <br />
                ));
              </code>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="rounded border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-yellow-200 px-2 py-1 text-xs dark:bg-yellow-900/50">B</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">C</span>
                </div>
              </div>
              <span className="text-lg">→</span>
              <div className="rounded border-2 border-green-400 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/30">
                <div className="flex gap-1">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">A</span>
                  <span className="rounded bg-green-100 px-2 py-1 text-xs dark:bg-green-900/50">B'</span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

