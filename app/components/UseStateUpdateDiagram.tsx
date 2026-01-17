"use client";

export default function UseStateUpdateDiagram() {
  return (
    <div className="my-6 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-indigo-900 dark:text-indigo-100">
        状態更新の流れ
      </h3>
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ステップ1: 初期状態 */}
          <div className="text-center">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              1
            </div>
            <div className="rounded-lg border-2 border-indigo-300 bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                初期状態
              </p>
              <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/20">
                <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
                  count = 0
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                useState(0)で初期化
              </p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="hidden md:flex items-center justify-center">
            <svg width="60" height="40" className="text-indigo-500">
              <path
                d="M 0 20 L 60 20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-update)"
              />
              <defs>
                <marker id="arrow-update" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <polygon points="0,0 10,5 0,10" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* ステップ2: 更新関数の呼び出し */}
          <div className="text-center">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              2
            </div>
            <div className="rounded-lg border-2 border-indigo-300 bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                更新関数を呼ぶ
              </p>
              <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
                <code className="text-sm font-mono text-yellow-700 dark:text-yellow-300">
                  setCount(5)
                </code>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                ボタンクリックなどで実行
              </p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="hidden md:flex items-center justify-center md:col-start-3 md:col-end-4">
            <svg width="60" height="40" className="text-indigo-500">
              <path
                d="M 0 20 L 60 20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-update2)"
              />
              <defs>
                <marker id="arrow-update2" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                  <polygon points="0,0 10,5 0,10" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* ステップ3: 状態が更新される */}
          <div className="text-center md:col-start-4 md:col-end-5">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
              3
            </div>
            <div className="rounded-lg border-2 border-green-300 bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 text-sm font-semibold text-green-900 dark:text-green-100">
                状態が更新
              </p>
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <p className="text-lg font-bold text-green-700 dark:text-green-300">
                  count = 5
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                値が0から5に変更
              </p>
            </div>
          </div>

          {/* ステップ4: 自動再描画 */}
          <div className="text-center md:col-start-5 md:col-end-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
              4
            </div>
            <div className="rounded-lg border-2 border-purple-300 bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 text-sm font-semibold text-purple-900 dark:text-purple-100">
                自動再描画
              </p>
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                  画面が更新
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                新しい値が画面に反映
              </p>
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 rounded-lg bg-white p-4 dark:bg-gray-800">
          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            💡 状態が更新されると、Reactが自動的にコンポーネントを再描画し、画面に新しい値が反映されます
          </p>
        </div>
      </div>
    </div>
  );
}


