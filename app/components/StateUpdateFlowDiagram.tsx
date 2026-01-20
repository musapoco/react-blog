"use client";

export default function StateUpdateFlowDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        🔄 状態更新のフロー比較
      </h3>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 個別のuseState */}
          <div className="rounded-lg border-2 border-green-300 bg-white p-4 shadow-lg dark:border-green-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-green-900 dark:text-green-100">
              ✅ 個別のuseState
            </h4>
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white dark:bg-green-600">
                  1
                </div>
                <div className="flex-1 rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">ユーザーが入力</p>
                  <p className="text-xs text-green-800 dark:text-green-200">name フィールドに "太郎" と入力</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white dark:bg-green-600">
                  2
                </div>
                <div className="flex-1 rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">setName実行</p>
                  <p className="text-xs text-green-800 dark:text-green-200">setName("太郎")</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white dark:bg-green-600">
                  3
                </div>
                <div className="flex-1 rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">nameだけ更新</p>
                  <p className="text-xs text-green-800 dark:text-green-200">age, emailは影響なし</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white dark:bg-green-600">
                  4
                </div>
                <div className="flex-1 rounded-lg border border-green-200 bg-green-50 p-2 dark:border-green-700 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">再レンダリング</p>
                  <p className="text-xs text-green-800 dark:text-green-200">nameだけが変更される</p>
                </div>
              </div>
            </div>
          </div>

          {/* オブジェクトのuseState */}
          <div className="rounded-lg border-2 border-orange-300 bg-white p-4 shadow-lg dark:border-orange-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-orange-900 dark:text-orange-100">
              📦 オブジェクトのuseState
            </h4>
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white dark:bg-orange-600">
                  1
                </div>
                <div className="flex-1 rounded-lg border border-orange-200 bg-orange-50 p-2 dark:border-orange-700 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">ユーザーが入力</p>
                  <p className="text-xs text-orange-800 dark:text-orange-200">name フィールドに "太郎" と入力</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white dark:bg-orange-600">
                  2
                </div>
                <div className="flex-1 rounded-lg border border-orange-200 bg-orange-50 p-2 dark:border-orange-700 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">新しいオブジェクト作成</p>
                  <p className="text-xs text-orange-800 dark:text-orange-200">...user で全てコピー</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white dark:bg-orange-600">
                  3
                </div>
                <div className="flex-1 rounded-lg border border-orange-200 bg-orange-50 p-2 dark:border-orange-700 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">nameだけ上書き</p>
                  <p className="text-xs text-orange-800 dark:text-orange-200">age, emailはそのまま</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8"></div>
                <div className="flex-1">
                  <div className="flex h-6 items-center justify-center">
                    <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white dark:bg-orange-600">
                  4
                </div>
                <div className="flex-1 rounded-lg border border-orange-200 bg-orange-50 p-2 dark:border-orange-700 dark:bg-orange-900/20">
                  <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">setUser実行</p>
                  <p className="text-xs text-orange-800 dark:text-orange-200">新しいuserオブジェクトで更新</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

