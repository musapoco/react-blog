"use client";

export default function StateUpdatePatternDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        🔄 オブジェクト状態の更新パターン
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 間違った更新方法 */}
        <div className="mb-6 rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100">間違った更新方法</h4>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-red-800 dark:text-red-200">
                  // ❌ これは動きません！
                  <br />
                  user.name = "新しい名前";
                  <br />
                  setUser(user);
                </code>
              </div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-100 p-3 dark:border-red-700 dark:bg-red-900/30">
              <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ 問題点:</p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-red-200">
                <li>Reactは同じオブジェクト参照を検知できない</li>
                <li>状態が更新されても再レンダリングされない</li>
                <li>オブジェクトを直接変更（ミューテーション）してはいけない</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 正しい更新方法 */}
        <div className="space-y-4">
          <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <h4 className="text-lg font-bold text-green-900 dark:text-green-100">方法1: スプレッド構文を使う（推奨）</h4>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                  <code className="text-green-800 dark:text-green-200">
                    // ✅ 新しいオブジェクトを作成
                    <br />
                    setUser({`{`} ...user, name: "新しい名前" {`}`});
                  </code>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="rounded-lg border-2 border-gray-300 bg-white p-3 text-center dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-1 text-xl">📦</div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">古いuser</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">name: "旧"</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">age: 20</p>
                </div>
                <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="rounded-lg border-2 border-green-400 bg-green-100 p-3 text-center dark:border-green-700 dark:bg-green-900/30">
                  <div className="mb-1 text-xl">✨</div>
                  <p className="text-xs font-semibold text-green-900 dark:text-green-100">新しいuser</p>
                  <p className="text-xs text-green-800 dark:text-green-200">name: "新"</p>
                  <p className="text-xs text-green-800 dark:text-green-200">age: 20</p>
                </div>
              </div>
              <p className="text-xs text-green-800 dark:text-green-200 text-center">
                ...userで全ての値をコピー → nameだけを上書き
              </p>
            </div>
          </div>

          <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">方法2: 関数型更新を使う</h4>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-blue-800 dark:text-blue-200">
                  // ✅ 前の状態を使って更新
                  <br />
                  setUser(prev ={`>`} ({`{`} ...prev, name: "新しい名前" {`}`}));
                </code>
              </div>
            </div>
            <div className="mt-3 rounded-lg border border-blue-200 bg-blue-100 p-3 dark:border-blue-700 dark:bg-blue-900/30">
              <p className="text-xs text-blue-800 dark:text-blue-200">
                💡 複数の更新を連続で行う場合に便利です
              </p>
            </div>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-purple-300 bg-purple-100 p-4 dark:border-purple-700 dark:bg-purple-900/30">
          <h4 className="mb-3 font-semibold text-purple-900 dark:text-purple-100">📦 身近な例えで理解しよう：引っ越しの例</h4>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p>
              <strong>❌ 間違った方法:</strong> 引っ越し先の住所を直接書き換えるのではなく、新しい住所が書かれた新しい書類を作る必要があります。
              同じ書類を書き換えてしまうと、システムが「変更された」と認識できません。
            </p>
            <p>
              <strong>✅ 正しい方法:</strong> 古い住所が書かれた書類をコピーして（...user）、住所だけを新しいものに書き換えます。
              これで新しい書類として認識され、状態が正しく更新されます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

