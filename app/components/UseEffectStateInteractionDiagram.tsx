"use client";

export default function UseEffectStateInteractionDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        🔄 useStateとuseEffectの連携図解
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 連携フロー図 */}
        <div className="space-y-6">
          {/* useState */}
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-2 border-purple-500 bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white dark:bg-purple-600">
                  💾
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">useState</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">状態を管理</p>
                </div>
              </div>
              <div className="rounded bg-purple-50 p-3 font-mono text-sm dark:bg-purple-900/20">
                <code className="text-gray-800 dark:text-gray-200">
                  const [count, setCount] = useState(0);
                </code>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex items-center justify-center">
            <svg className="h-12 w-12 text-purple-500 dark:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* 状態の値 */}
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-2 border-green-500 bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white dark:bg-green-600">
                  📊
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">状態: count</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">初期値: 0</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700 dark:bg-green-900 dark:text-green-300">
                  0
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex items-center justify-center">
            <svg className="h-12 w-12 text-green-500 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* 状態変更 */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 rounded-lg border-2 border-yellow-500 bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white dark:bg-yellow-600">
                  🔥
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">状態変更</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">setCount(5)</p>
                </div>
              </div>
              <div className="rounded bg-yellow-50 p-3 font-mono text-sm dark:bg-yellow-900/20">
                <code className="text-gray-800 dark:text-gray-200">
                  count: 0 → 5
                </code>
              </div>
            </div>

            {/* 矢印 → */}
            <svg className="h-12 w-12 text-purple-500 dark:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            {/* useEffect */}
            <div className="flex-1 rounded-lg border-2 border-pink-500 bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-xl font-bold text-white dark:bg-pink-600">
                  ⚡
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">useEffect</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">自動実行</p>
                </div>
              </div>
              <div className="rounded bg-pink-50 p-3 font-mono text-sm dark:bg-pink-900/20">
                <code className="text-gray-800 dark:text-gray-200">
                  useEffect(() ={`>`} {`{`} ... {`}`}, [count]);
                </code>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex items-center justify-center">
            <svg className="h-12 w-12 text-pink-500 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* 副作用実行 */}
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white dark:bg-blue-600">
                  🎯
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">副作用処理実行</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">countの新しい値（5）を使用</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• API呼び出し</p>
                <p>• ページタイトル更新</p>
                <p>• DOM操作</p>
              </div>
            </div>
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-8 space-y-3 text-center text-sm text-purple-800 dark:text-purple-200">
          <div className="rounded-lg border border-purple-300 bg-white p-4 dark:border-purple-700 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🔄 身近な例えで理解しよう：温度計とエアコンの例</h4>
            
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="mb-1 text-xs font-medium text-blue-900 dark:text-blue-100">🌡️ 1. 状態の定義 = 温度計を設置</p>
                <p className="text-xs text-blue-800 dark:text-blue-200">useStateで状態（count）を定義。これは「温度計」のようなもので、現在の温度（値）を表示します。</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <p className="mb-1 text-xs font-medium text-green-900 dark:text-green-100">🔥 2. 状態の変更 = 温度が上がる</p>
                <p className="text-xs text-green-800 dark:text-green-200">setCount(5)でcountが0から5に変更。これは「温度が25度から30度に上がった」ようなものです。</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="mb-1 text-xs font-medium text-orange-900 dark:text-orange-100">👁️ 3. useEffectの監視 = 温度計を見ているセンサー</p>
                <p className="text-xs text-orange-800 dark:text-orange-200">useEffectは依存配列にcountを含めているため、countが変わると自動的に再実行されます。</p>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="mb-1 text-xs font-medium text-purple-900 dark:text-purple-100">❄️ 4. 副作用の実行 = エアコンが自動で動く</p>
                <p className="text-xs text-purple-800 dark:text-purple-200">useEffect内でcountの新しい値（5）を使って、API呼び出しやDOM操作などの副作用処理を実行します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
