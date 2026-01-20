"use client";

export default function DebounceDiagram() {
  return (
    <div className="my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-green-900 dark:text-green-100">
        ⏱️ デバウンスの仕組み図解
      </h3>
      <div className="mx-auto max-w-5xl">
        {/* デバウンスなしの場合 */}
        <div className="mb-8 rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100">デバウンスなしの場合</h4>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-red-800 dark:text-red-200">
              ユーザーが1文字入力するたびに、APIを呼び出してしまいます
            </p>
            {/* タイムライン */}
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">入力:</span>
                <div className="flex gap-1">
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">e</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">a</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">c</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">t</div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">API呼び出し:</span>
                <div className="flex gap-1">
                  <div className="h-4 w-16 rounded bg-red-500" title="'R' の入力"></div>
                  <div className="h-4 w-16 rounded bg-red-500" title="'Re' の入力"></div>
                  <div className="h-4 w-16 rounded bg-red-500" title="'Rea' の入力"></div>
                  <div className="h-4 w-16 rounded bg-red-500" title="'Reac' の入力"></div>
                  <div className="h-4 w-16 rounded bg-red-500" title="'React' の入力"></div>
                </div>
              </div>
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                ⚠️ 5文字入力で5回のAPI呼び出し → サーバーに負荷がかかる
              </p>
            </div>
          </div>
        </div>

        {/* デバウンスありの場合 */}
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100">デバウンスありの場合</h4>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-green-800 dark:text-green-200">
              入力が止まってから500ms待ってから、APIを呼び出します
            </p>
            {/* タイムライン */}
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">入力:</span>
                <div className="flex gap-1">
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">e</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">a</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">c</div>
                  <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">t</div>
                </div>
                <span className="ml-2 text-xs text-gray-500">(入力停止)</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">タイマー:</span>
                <div className="flex gap-1 items-center">
                  <div className="h-4 w-12 rounded bg-yellow-400" title="タイマー1 (キャンセル)"></div>
                  <span className="text-xs text-gray-500">×</span>
                  <div className="h-4 w-12 rounded bg-yellow-400" title="タイマー2 (キャンセル)"></div>
                  <span className="text-xs text-gray-500">×</span>
                  <div className="h-4 w-12 rounded bg-yellow-400" title="タイマー3 (キャンセル)"></div>
                  <span className="text-xs text-gray-500">×</span>
                  <div className="h-4 w-12 rounded bg-yellow-400" title="タイマー4 (キャンセル)"></div>
                  <span className="text-xs text-gray-500">×</span>
                  <div className="h-4 w-20 rounded bg-green-500" title="タイマー5 (実行)"></div>
                  <span className="ml-2 text-xs text-gray-500">500ms待機</span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">API呼び出し:</span>
                <div className="flex gap-1">
                  <div className="h-4 w-32 rounded bg-green-500" title="'React' で1回だけ実行"></div>
                </div>
              </div>
              <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                ✅ 5文字入力で1回のAPI呼び出し → サーバー負荷を大幅に削減
              </p>
            </div>
          </div>
        </div>

        {/* 実行フロー */}
        <div className="mt-6 space-y-4">
          <h4 className="text-center font-semibold text-gray-900 dark:text-white">📊 デバウンスの実行フロー</h4>
          <div className="grid grid-cols-5 gap-2">
            <div className="text-center">
              <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="mb-2 text-2xl">⌨️</div>
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">1. 文字入力</p>
                <p className="mt-1 text-xs text-blue-800 dark:text-blue-200">ユーザーがキーを押す</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="text-center">
              <div className="rounded-lg border-2 border-yellow-300 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                <div className="mb-2 text-2xl">⏱️</div>
                <p className="text-xs font-semibold text-yellow-900 dark:text-yellow-100">2. タイマー開始</p>
                <p className="mt-1 text-xs text-yellow-800 dark:text-yellow-200">500msのタイマーをセット</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="text-center">
              <div className="rounded-lg border-2 border-green-300 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <div className="mb-2 text-2xl">🔍</div>
                <p className="text-xs font-semibold text-green-900 dark:text-green-100">3. 検索実行</p>
                <p className="mt-1 text-xs text-green-800 dark:text-green-200">入力が止まったら実行</p>
              </div>
            </div>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-green-300 bg-green-100 p-4 dark:border-green-700 dark:bg-green-900/30">
          <h4 className="mb-3 font-semibold text-green-900 dark:text-green-100">🍜 身近な例えで理解しよう：ラーメン屋の注文の例</h4>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p>
              <strong>❌ デバウンスなし:</strong> 「とんこつ」「とんこつしょうゆ」「とんこつしょうゆえび」と、1文字入力するたびに注文を出してしまう。
              店員さんが混乱して、大量の注文が発生してしまいます。
            </p>
            <p>
              <strong>✅ デバウンスあり:</strong> 「とんこつしょうゆえび」と全部入力して、5秒間何も入力しなかったら注文を確定する。
              店員さんは1回だけ注文を受けられて、効率的です。
            </p>
            <p>
              <strong>⏱️ タイマーの役割:</strong> 新しい文字が入力されると、前のタイマーをキャンセルして新しいタイマーを開始します。
              これは「注文を変更したら、前の注文を取り消して、新しい注文を待つ」ようなものです。
            </p>
            <p>
              <strong>💡 メリット:</strong> ユーザーは快適に検索でき、サーバーへの負荷も減らせます。
              まさに「Win-Win」の関係です！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

