"use client";

export default function UseStateBoxDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        useStateの構造
      </h3>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center space-y-4">
          {/* useStateの箱 */}
          <div className="rounded-lg border-4 border-purple-500 bg-white p-6 dark:bg-gray-800">
            <div className="text-center">
              <p className="mb-2 text-lg font-bold text-purple-900 dark:text-purple-100">
                useState
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border-2 border-green-400 bg-green-50 p-3 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-1">
                    現在の値
                  </p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                    count: 0
                  </p>
                </div>
                <div className="rounded-lg border-2 border-yellow-400 bg-yellow-50 p-3 dark:bg-yellow-900/20">
                  <p className="text-xs font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                    更新関数
                  </p>
                  <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300">
                    setCount()
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 矢印 */}
          <div className="text-center">
            <svg width="50" height="50" className="text-purple-500">
              <path
                d="M 25 0 L 25 50"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow)"
              />
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <polygon points="0,0 10,5 0,10" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* 分割された値 */}
          <div className="flex gap-4">
            <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-2">
                値として使う
              </p>
              <code className="block text-sm text-green-700 dark:text-green-300">
                const [count, ...]
              </code>
              <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                {`{count}`} のように表示に使用
              </p>
            </div>
            <div className="rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <p className="text-xs font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                更新に使う
              </p>
              <code className="block text-sm text-yellow-700 dark:text-yellow-300">
                const [..., setCount]
              </code>
              <p className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
                setCount(5) で更新
              </p>
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 space-y-2 text-center text-sm text-purple-800 dark:text-purple-200">
          <p>
            <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">useState</code>は<strong>2つの値</strong>を返します
          </p>
          <p>
            1つ目は<strong>現在の状態の値</strong>、2つ目は<strong>その値を変更する関数</strong>です
          </p>
        </div>
      </div>
    </div>
  );
}

