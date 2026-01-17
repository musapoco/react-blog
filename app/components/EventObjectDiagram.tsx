"use client";

export default function EventObjectDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-3 text-base font-semibold text-blue-900 dark:text-blue-100">
        📦 イベントオブジェクト（e）の中身
      </h3>
      
      <div className="mb-4 rounded-lg bg-white p-4 dark:bg-gray-900">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="rounded-lg border-2 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-sm font-bold text-orange-600 dark:text-orange-400 mb-2">イベントオブジェクト（e）</div>
            <div className="text-xs text-orange-800 dark:text-orange-200 space-y-1 font-mono">
              <div>e.target</div>
              <div>e.target.value</div>
              <div>e.target.type</div>
              <div>e.type</div>
            </div>
          </div>
          <div className="text-2xl text-blue-600 dark:text-blue-400">→</div>
          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-sm font-bold text-green-600 dark:text-green-400 mb-2">handleChange(e)</div>
            <div className="text-xs text-green-800 dark:text-green-200">
              関数に自動的に渡される
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-blue-800 dark:text-blue-200">
          💡 入力すると → eが作られる → eが関数に移動 → 情報を取り出せる
        </p>
      </div>
    </div>
  );
}
