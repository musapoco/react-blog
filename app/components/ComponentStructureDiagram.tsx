"use client";

export default function ComponentStructureDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        🏗️ コンポーネントの構造を詳しく見てみよう
      </h3>
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 左側: コード構造 */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">コードの構造</h4>
            <div className="space-y-2 text-sm">
              <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-2 dark:bg-blue-900/20">
                <code className="text-blue-800 dark:text-blue-200">const Button</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  コンポーネント名を定義
                </p>
              </div>
              <div className="rounded border-l-4 border-green-500 bg-green-50 p-2 dark:bg-green-900/20">
                <code className="text-green-800 dark:text-green-200">{`= () =>`}</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  アロー関数で定義
                </p>
              </div>
              <div className="rounded border-l-4 border-yellow-500 bg-yellow-50 p-2 dark:bg-yellow-900/20">
                <code className="text-yellow-800 dark:text-yellow-200">return</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  JSXを返す
                </p>
              </div>
              <div className="rounded border-l-4 border-purple-500 bg-purple-50 p-2 dark:bg-purple-900/20">
                <code className="text-purple-800 dark:text-purple-200">{`<button>...</button>`}</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  HTML要素をJSXで記述
                </p>
              </div>
            </div>
          </div>

          {/* 右側: 各部分の説明 */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">各部分の役割</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  1. コンポーネント名
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  大文字で始まる名前（Button）がReactコンポーネントです
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  2. アロー関数
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  {`() =>`} でパラメータなしの関数を定義します
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  3. return文
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  関数が何を返すかを指定します
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  4. JSX要素
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  HTMLに似た構文でUI要素を記述します
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

