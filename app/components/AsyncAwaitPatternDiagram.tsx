"use client";

export default function AsyncAwaitPatternDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        ⚡ async/awaitのパターン比較
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 間違った書き方 */}
        <div className="mb-6 rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100">間違った書き方</h4>
          </div>
          <div className="rounded-lg bg-white p-4 font-mono text-xs dark:bg-gray-900">
            <code className="text-red-800 dark:text-red-200">
              useEffect(async () ={`>`} {`{`} ... {`}`}, []);
            </code>
          </div>
          <div className="mt-3 rounded-lg border border-red-200 bg-red-100 p-3 dark:border-red-700 dark:bg-red-900/30">
            <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ 問題点:</p>
            <ul className="list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-red-200">
              <li>useEffectはPromiseを返せない（クリーンアップ関数との相性が悪い）</li>
              <li>エラーハンドリングが難しい</li>
              <li>非推奨な書き方</li>
            </ul>
          </div>
        </div>

        {/* 正しい書き方 */}
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100">正しい書き方</h4>
          </div>
          <div className="rounded-lg bg-white p-4 font-mono text-xs dark:bg-gray-900">
            <code className="text-green-800 dark:text-green-200">
              useEffect(() ={`>`} {`{`}
              <br />
              &nbsp;&nbsp;const fetchData = async () ={`>`} {`{`} ... {`}`};
              <br />
              &nbsp;&nbsp;fetchData();
              <br />
              {`}`}, []);
            </code>
          </div>
          <div className="mt-3 rounded-lg border border-green-200 bg-green-100 p-3 dark:border-green-700 dark:bg-green-900/30">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ メリット:</p>
            <ul className="list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-green-200">
              <li>クリーンアップ関数を返せる</li>
              <li>エラーハンドリングが明確</li>
              <li>ベストプラクティス</li>
            </ul>
          </div>
        </div>

        {/* 実行フロー */}
        <div className="mt-6 space-y-4">
          <h4 className="text-center font-semibold text-gray-900 dark:text-white">📊 実行フロー</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 text-center">
              <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                <div className="mb-2 text-3xl">1️⃣</div>
                <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">useEffect実行</p>
                <p className="mt-2 text-xs text-purple-800 dark:text-purple-200">コンポーネントマウント時に実行</p>
              </div>
            </div>
            <svg className="h-8 w-8 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex-1 text-center">
              <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="mb-2 text-3xl">2️⃣</div>
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">async関数呼び出し</p>
                <p className="mt-2 text-xs text-blue-800 dark:text-blue-200">fetchData()を実行</p>
              </div>
            </div>
            <svg className="h-8 w-8 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex-1 text-center">
              <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <div className="mb-2 text-3xl">3️⃣</div>
                <p className="text-sm font-semibold text-green-900 dark:text-green-100">データ取得</p>
                <p className="mt-2 text-xs text-green-800 dark:text-green-200">APIからデータを取得</p>
              </div>
            </div>
            <svg className="h-8 w-8 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex-1 text-center">
              <div className="rounded-lg border-2 border-orange-300 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                <div className="mb-2 text-3xl">4️⃣</div>
                <p className="text-sm font-semibold text-orange-900 dark:text-orange-100">状態更新</p>
                <p className="mt-2 text-xs text-orange-800 dark:text-orange-200">setUser()で状態を更新</p>
              </div>
            </div>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <h4 className="mb-3 font-semibold text-yellow-900 dark:text-yellow-100">🍕 身近な例えで理解しよう：ピザ注文の例</h4>
          <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
            <p>
              <strong>❌ 間違った書き方:</strong> useEffectに直接asyncを付けるのは、「ピザを注文する前に、電話を切ってしまう」ようなものです。
              注文が完了する前に処理が終わってしまい、結果を受け取れません。
            </p>
            <p>
              <strong>✅ 正しい書き方:</strong> 内側でasync関数を定義するのは、「電話を繋げたまま、ピザを注文し、配達が来るまで待つ」ようなものです。
              注文→調理→配達の流れを正しく待つことができます。
            </p>
            <p>
              <strong>📋 流れ:</strong> 1. 電話をかける（useEffect実行）→ 2. 注文する（fetchData呼び出し）→ 3. ピザを作る（API呼び出し）→ 4. 配達（状態更新）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

