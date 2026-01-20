"use client";

export default function EventListenerDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        👂 イベントリスナーの登録・解除の流れ
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* フロー図 */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white dark:bg-blue-600">
                1
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">コンポーネントマウント</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                コンポーネントが画面に表示されると、useEffectが実行されます
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>useEffect(() ={`>`} {`{`} ... {`}`}, []);</code>
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

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white dark:bg-green-600">
                2
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-green-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">イベントリスナー登録</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                window.addEventListenerでリサイズイベントを監視します
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>window.addEventListener("resize", handleResize);</code>
              </div>
            </div>
          </div>

          {/* イベント発生 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <div className="text-center">
                  <span className="text-2xl mb-2 block">📏</span>
                  <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">ユーザーがウィンドウをリサイズ</p>
                  <p className="mt-1 text-xs text-yellow-800 dark:text-yellow-200">ブラウザウィンドウのサイズが変更されると...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-yellow-300 dark:bg-yellow-700"></div>
                <svg className="h-6 w-6 text-yellow-500 dark:text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white dark:bg-orange-600">
                3
              </div>
            </div>
            <div className="flex-1 rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-md dark:bg-gray-900">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">ハンドラー実行</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                リサイズが検知されると、handleResize関数が自動実行されます
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>setWidth(window.innerWidth);</code>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-red-300 dark:bg-red-700"></div>
                <svg className="h-6 w-6 text-red-500 dark:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
              <p className="text-sm text-gray-700 dark:text-gray-300">
                コンポーネントが削除される時、イベントリスナーを解除します
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>window.removeEventListener("resize", handleResize);</code>
              </div>
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                ⚠️ 解除しないとメモリリークの原因になります
              </p>
            </div>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-purple-300 bg-purple-100 p-4 dark:border-purple-700 dark:bg-purple-900/30">
          <h4 className="mb-3 font-semibold text-purple-900 dark:text-purple-100">🎧 身近な例えで理解しよう：ラジオの例</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p>
              <strong>📻 ラジオの例え:</strong> イベントリスナーは「ラジオのチャンネルを合わせる」ようなものです。
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>登録:</strong> ラジオのチャンネルを合わせる（addEventListener）→ 音楽が流れ始める</li>
              <li><strong>イベント発生:</strong> ラジオ局から新しい情報が放送される（ウィンドウがリサイズされる）</li>
              <li><strong>処理実行:</strong> ラジオが情報を受け取って、音量を調整する（handleResizeが実行される）</li>
              <li><strong>解除:</strong> ラジオを消す前にチャンネルを切る（removeEventListener）→ 電気代の節約</li>
            </ul>
            <p className="mt-2">
              <strong>⚠️ 重要なポイント:</strong> ラジオを使い終わったら必ず切るのと同じで、イベントリスナーも必ず解除する必要があります。
              解除しないと、コンポーネントが削除されてもイベントを監視し続けてしまい、メモリリークが発生します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

