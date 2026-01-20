"use client";

export default function UseEffectApiCallDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        🌐 API呼び出しの流れ図解
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 階段形式のフロー */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-lg font-bold text-white shadow-lg dark:bg-purple-600">
                1
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">コンポーネントマウント</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                コンポーネントが画面に表示されると、useEffectが自動的に実行されます
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>useEffect(() ={`>`} {`{`} ... {`}`}, []);</code>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-purple-500 dark:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 text-lg font-bold text-white shadow-lg dark:bg-yellow-600">
                2
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">⏳</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">ローディング状態</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                API呼び出し前に、ローディング状態をtrueに設定して、ユーザーに読み込み中であることを伝えます
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>setLoading(true);</code>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-yellow-500 dark:text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white shadow-lg dark:bg-blue-600">
                3
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">API呼び出し</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                fetchを使ってサーバーからデータを取得します
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>fetch("/api/user") .then(...)</code>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-500 dark:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-lg font-bold text-white shadow-lg dark:bg-green-600">
                4
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">データ取得成功</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                取得したデータを状態に保存し、ローディング状態をfalseに戻します
              </p>
              <div className="mt-2 rounded bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
                <code>setUser(data); setLoading(false);</code>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-500 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white shadow-lg dark:bg-orange-600">
                5
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">📺</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">画面に表示</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                状態が更新されると、コンポーネントが自動的に再描画され、データが画面に表示されます
              </p>
            </div>
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-8 space-y-2 text-center text-sm text-blue-800 dark:text-blue-200">
          <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🍕 身近な例えで理解しよう：ピザ配達の例</h4>
            
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="mb-1 text-xs font-medium text-orange-900 dark:text-orange-100">📞 1. ピザを注文する</p>
                <p className="text-xs text-orange-800 dark:text-orange-200">電話をかける（コンポーネント表示）→ ピザ屋に注文を入れる</p>
              </div>
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="mb-1 text-xs font-medium text-yellow-900 dark:text-yellow-100">⏳ 2. 「お待ちください」と伝える</p>
                <p className="text-xs text-yellow-800 dark:text-yellow-200">「ただいまお作りしています」と伝える（ローディング状態）</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <p className="mb-1 text-xs font-medium text-green-900 dark:text-green-100">🚗 3. ピザを作って配達する</p>
                <p className="text-xs text-green-800 dark:text-green-200">ピザ屋でピザを作る（サーバー処理）→ 配達する（API呼び出し）</p>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="mb-1 text-xs font-medium text-purple-900 dark:text-purple-100">🍽️ 4. ピザを食べる</p>
                <p className="text-xs text-purple-800 dark:text-purple-200">ピザを受け取る（データ取得）→ 食べる（画面に表示）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
