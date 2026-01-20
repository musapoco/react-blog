"use client";

export default function StateUpdateComparisonDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        🔄 直接値 vs 関数型更新の比較
      </h3>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 直接値 */}
          <div className="rounded-lg border-2 border-blue-300 bg-white p-4 shadow-lg dark:border-blue-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-blue-900 dark:text-blue-100">
              📝 直接値で更新
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-blue-800 dark:text-blue-200">
                  setCount(count + 1);
                </code>
              </div>
              
              {/* フロー */}
              <div className="space-y-2">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 dark:border-blue-700 dark:bg-blue-900/20">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">現在の値: count = 5</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 dark:border-blue-700 dark:bg-blue-900/20">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">計算: 5 + 1 = 6</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="rounded-lg border-2 border-green-400 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/30">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">新しい値: count = 6</p>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-2 dark:border-yellow-700 dark:bg-yellow-900/20">
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  ⚠️ 連続して呼び出すと問題が発生する可能性
                </p>
              </div>
            </div>
          </div>

          {/* 関数型更新 */}
          <div className="rounded-lg border-2 border-green-300 bg-white p-4 shadow-lg dark:border-green-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-green-900 dark:text-green-100">
              ⚡ 関数型更新（推奨）
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  setCount(prev ={`>`} prev + 1);
                </code>
              </div>
              
              {/* フロー */}
              <div className="space-y-2">
                <div className="rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">前の値を受け取る</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">計算: prev + 1</p>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="rounded-lg border-2 border-green-400 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/30">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">新しい値: count = 6</p>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                <p className="text-xs text-green-800 dark:text-green-200">
                  ✅ 連続して呼び出しても安全
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 rounded-lg border border-purple-300 bg-purple-100 p-4 dark:border-purple-700 dark:bg-purple-900/30">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            <strong>💡 違い:</strong> 直接値で更新する場合、複数回連続して呼び出すと古い値を使って計算してしまいます。
            関数型更新では、常に最新の値（prev）を使って計算するため、連続呼び出しでも正しく動作します。
          </p>
        </div>
      </div>
    </div>
  );
}

