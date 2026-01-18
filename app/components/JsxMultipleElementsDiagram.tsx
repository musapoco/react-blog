"use client";

export default function JsxMultipleElementsDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        📦 複数の要素をdivで囲む理由
      </h3>
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 左側: 間違った例 */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-red-600 dark:text-red-400">❌ 間違った例</h4>
            <div className="rounded border-2 border-red-300 bg-red-50 p-3 dark:border-red-700 dark:bg-red-900/20">
              <code className="text-xs text-red-800 dark:text-red-200 whitespace-pre">
{`return (
  <h1>こんにちは</h1>
  <p>Reactを学習中です</p>
);`}
              </code>
            </div>
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              ❌ エラー: 複数の要素を返すことはできません
            </p>
          </div>

          {/* 右側: 正しい例 */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-green-600 dark:text-green-400">✅ 正しい例</h4>
            <div className="rounded border-2 border-green-300 bg-green-50 p-3 dark:border-green-700 dark:bg-green-900/20">
              <code className="text-xs text-green-800 dark:text-green-200 whitespace-pre">
{`return (
  <div>
    <h1>こんにちは</h1>
    <p>Reactを学習中です</p>
  </div>
);`}
              </code>
            </div>
            <p className="mt-2 text-xs text-green-600 dark:text-green-400">
              ✅ 成功: divで囲むことで1つの要素として扱われます
            </p>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 rounded-lg bg-white p-4 dark:bg-gray-900">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            <strong>💡 なぜdivで囲む必要があるの？</strong>
          </p>
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
            Reactコンポーネントは、必ず1つの要素を返す必要があります。複数の要素（h1とp）を返したい場合は、それらを1つの親要素（div）で囲むことで、1つの要素として扱われます。これは、HTMLの構造を保つためです。
          </p>
        </div>
      </div>
    </div>
  );
}

