"use client";

export default function FormInteractionDiagram() {
  return (
    <div className="my-6 rounded-lg border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-cyan-900 dark:text-cyan-100">
        ⌨️ フォーム入力時の状態変化の様子
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* タイムライン */}
        <div className="space-y-6">
          {/* ステップ1: 初期状態 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-lg font-bold text-white dark:bg-gray-600">
                1
              </div>
            </div>
            <div className="flex-1 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">初期状態</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">name</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">""</p>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">age</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">0</p>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">email</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">""</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                ユーザーがまだ何も入力していない状態
              </p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-cyan-300 dark:bg-cyan-700"></div>
                <svg className="h-6 w-6 text-cyan-500 dark:text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* ステップ2: name入力 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white dark:bg-cyan-600">
                2
              </div>
            </div>
            <div className="flex-1 rounded-lg border-2 border-cyan-300 bg-white p-4 shadow-md dark:border-cyan-700 dark:bg-gray-900">
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">nameフィールドに "太郎" を入力</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded border-2 border-green-400 bg-green-50 p-2 text-center dark:border-green-700 dark:bg-green-900/30">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-300">name</p>
                  <p className="mt-1 text-xs font-bold text-green-800 dark:text-green-200">"太郎" ✨</p>
                  <p className="mt-1 text-xs text-green-600 dark:text-green-400">更新された</p>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">age</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">0</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">変更なし</p>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">email</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">""</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">変更なし</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-cyan-600 dark:text-cyan-400">
                setName("太郎") が実行され、nameだけが更新される
              </p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10"></div>
            <div className="flex-1">
              <div className="flex h-8 items-center justify-center">
                <div className="h-0.5 w-full bg-cyan-300 dark:bg-cyan-700"></div>
                <svg className="h-6 w-6 text-cyan-500 dark:text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* ステップ3: age入力 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white dark:bg-cyan-600">
                3
              </div>
            </div>
            <div className="flex-1 rounded-lg border-2 border-cyan-300 bg-white p-4 shadow-md dark:border-cyan-700 dark:bg-gray-900">
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">ageフィールドに 25 を入力</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">name</p>
                  <p className="mt-1 text-xs text-gray-800 dark:text-gray-300">"太郎"</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">保持される</p>
                </div>
                <div className="rounded border-2 border-green-400 bg-green-50 p-2 text-center dark:border-green-700 dark:bg-green-900/30">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-300">age</p>
                  <p className="mt-1 text-xs font-bold text-green-800 dark:text-green-200">25 ✨</p>
                  <p className="mt-1 text-xs text-green-600 dark:text-green-400">更新された</p>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-2 text-center dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">email</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">""</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">変更なし</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-cyan-600 dark:text-cyan-400">
                setAge(25) が実行され、ageだけが更新される（nameはそのまま保持）
              </p>
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 rounded-lg border border-cyan-300 bg-cyan-100 p-4 dark:border-cyan-700 dark:bg-cyan-900/30">
          <p className="text-sm text-cyan-800 dark:text-cyan-200">
            <strong>💡 ポイント:</strong> 個別のuseStateでは、1つの状態を更新しても他の状態には影響しません。
            フォームの入力フィールドが独立して動作する様子が分かります。
          </p>
        </div>
      </div>
    </div>
  );
}

