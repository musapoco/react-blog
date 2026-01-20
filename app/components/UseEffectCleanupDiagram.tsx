"use client";

export default function UseEffectCleanupDiagram() {
  return (
    <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-red-900 dark:text-red-100">
        🧹 クリーンアップ関数の動作フロー
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* フローチャート形式 */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white dark:bg-pink-600">
                1
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-pink-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">useEffect実行</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                副作用処理を開始（タイマー設定、API呼び出しなど）
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-pink-300 dark:bg-pink-700"></div>
                <svg className="h-6 w-6 text-pink-500 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white dark:bg-blue-600">
                2
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">副作用処理実行中</h4>
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-gray-800 dark:text-gray-200">
                  const timer = setInterval(...)
                </code>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-blue-300 dark:bg-blue-700"></div>
                <svg className="h-6 w-6 text-blue-500 dark:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white dark:bg-green-600">
                3
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-green-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">クリーンアップ関数を返す</h4>
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-gray-800 dark:text-gray-200">
                  return () ={`>`} {`{`} clearInterval(timer); {`}`};
                </code>
              </div>
            </div>
          </div>

          {/* Branch */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-3 dark:border-yellow-600 dark:bg-yellow-900/20">
                <p className="text-center text-sm font-semibold text-yellow-900 dark:text-yellow-100">
                  ⚡ トリガー: 状態変更 or アンマウント
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white dark:bg-red-600">
                4
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-red-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">⚠️ クリーンアップ実行</h4>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                前回の処理をクリーンアップ
              </p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-gray-600 dark:text-gray-400">
                <li>clearInterval(timer)</li>
                <li>AbortController.abort()</li>
                <li>イベントリスナー削除</li>
              </ul>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-purple-300 dark:bg-purple-700"></div>
                <svg className="h-6 w-6 text-purple-500 dark:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white dark:bg-purple-600">
                5
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">新しいuseEffect実行（オプション）</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                値が変更された場合のみ、新しい処理を実行
              </p>
            </div>
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-8 space-y-3 text-center text-sm text-red-800 dark:text-red-200">
          <div className="rounded-lg border border-red-300 bg-white p-4 dark:border-red-700 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🧹 身近な例えで理解しよう</h4>
            
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="mb-1 text-xs font-medium text-blue-900 dark:text-blue-100">
                  🏠 お部屋の例え
                </p>
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  クリーンアップ関数は「引っ越す前に部屋を片付ける」ようなものです。新しい処理を始める前や、コンポーネントが削除される時に、前の処理の後始末をします。
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <p className="mb-1 text-xs font-medium text-green-900 dark:text-green-100">
                  ⏰ アラーム時計の例え
                </p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  アラームをセットする（useEffect実行）→ 新しいアラームをセットする前に、前のアラームをキャンセルする（クリーンアップ）。実行順序: 1. 前回のクリーンアップ実行 → 2. 新しいuseEffect実行（値が変更された場合のみ）
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs">
              <strong>用途:</strong> タイマーのクリア、APIリクエストのキャンセル、イベントリスナーの削除など、リソースの適切な解放を行います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
