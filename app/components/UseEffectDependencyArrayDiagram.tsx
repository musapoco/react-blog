"use client";

export default function UseEffectDependencyArrayDiagram() {
  return (
    <div className="my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-green-900 dark:text-green-100">
        📊 依存配列の3つのパターン比較
      </h3>
      <div className="mx-auto max-w-5xl">
        {/* タイムライン形式の図解 */}
        <div className="relative">
          {/* タイムライン軸 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-blue-400 to-green-400 dark:from-yellow-600 dark:via-blue-600 dark:to-green-600"></div>
          
          {/* パターン1: 依存配列なし */}
          <div className="relative mb-8 ml-16">
            <div className="absolute -left-10 top-4 h-4 w-4 rounded-full bg-yellow-500 dark:bg-yellow-600"></div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  パターン1
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">依存配列なし</h4>
              </div>
              <div className="mb-3 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-gray-800 dark:text-gray-200">
                  useEffect(() ={`>`} {`{`} ... {`}`});
                </code>
              </div>
              
              {/* 実行タイムライン */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">実行:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rounded-full bg-yellow-500 dark:bg-yellow-600"
                      title={`レンダリング ${i}`}
                    ></div>
                  ))}
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">...</span>
                </div>
                <span className="ml-auto text-xs text-red-600 dark:text-red-400">⚠️ 毎回実行</span>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                📰 例: 新聞配達員が毎日来る → 非推奨（パフォーマンス低下）
              </p>
            </div>
          </div>

          {/* パターン2: 空の配列 */}
          <div className="relative mb-8 ml-16">
            <div className="absolute -left-10 top-4 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-600"></div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  パターン2
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">空の配列 []</h4>
              </div>
              <div className="mb-3 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-gray-800 dark:text-gray-200">
                  useEffect(() ={`>`} {`{`} ... {`}`}, []);
                </code>
              </div>
              
              {/* 実行タイムライン */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">実行:</span>
                <div className="flex gap-1">
                  <div
                    className="h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-600"
                    title="マウント時のみ"
                  ></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="実行なし"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="実行なし"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="実行なし"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="実行なし"></div>
                </div>
                <span className="ml-auto text-xs text-green-600 dark:text-green-400">✅ 1回だけ</span>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                🏠 例: 引っ越し時の一回だけの掃除 → API初期データ取得に最適
              </p>
            </div>
          </div>

          {/* パターン3: 依存配列あり */}
          <div className="relative mb-8 ml-16">
            <div className="absolute -left-10 top-4 h-4 w-4 rounded-full bg-green-500 dark:bg-green-600"></div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800 dark:bg-green-900 dark:text-green-200">
                  パターン3
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">依存配列あり [count]</h4>
              </div>
              <div className="mb-3 rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-gray-800 dark:text-gray-200">
                  useEffect(() ={`>`} {`{`} ... {`}`}, [count]);
                </code>
              </div>
              
              {/* 実行タイムライン */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">実行:</span>
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-600" title="マウント時"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="count変更なし"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-600" title="count変更"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600" title="count変更なし"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-600" title="count変更"></div>
                </div>
                <span className="ml-auto text-xs text-green-600 dark:text-green-400">✅ 値が変わる時</span>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                🔔 例: ドアベルが鳴るたびに対応 → 状態に応じた処理に最適
              </p>
            </div>
          </div>
        </div>

        {/* 比較表 */}
        <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">パターン</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">実行タイミング</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">使用例</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                  <code className="rounded bg-yellow-100 px-2 py-1 text-xs dark:bg-yellow-900/50">なし</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">毎回のレンダリング後</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">非推奨</td>
              </tr>
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                  <code className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-900/50">[]</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">マウント時のみ（1回）</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">API初期データ取得、タイマー設定</td>
              </tr>
              <tr className="bg-green-50 dark:bg-green-900/20">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                  <code className="rounded bg-green-100 px-2 py-1 text-xs dark:bg-green-900/50">[count]</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">値が変わる時</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">検索フィルター、状態に応じた処理</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
