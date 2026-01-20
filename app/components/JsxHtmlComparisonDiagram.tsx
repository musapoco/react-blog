"use client";

export default function JsxHtmlComparisonDiagram() {
  return (
    <div className="my-6 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-orange-900 dark:text-orange-100">
        🔄 JSXとHTMLの比較
      </h3>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 左側: HTML */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">📄 HTML（従来の書き方）</h4>
            <div className="rounded border border-gray-300 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
              <code className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre">
{`<div>
  <h1>こんにちは</h1>
  <p>Reactを学習中です</p>
</div>`}
              </code>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• 静的なHTMLファイル</li>
              <li>• ブラウザが直接読み込む</li>
              <li>• 動的な変更が難しい</li>
            </ul>
          </div>

          {/* 右側: JSX */}
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">⚛️ JSX（Reactの書き方）</h4>
            <div className="rounded border border-orange-300 bg-orange-50 p-3 dark:border-orange-700 dark:bg-orange-900/20">
              <code className="text-xs text-orange-800 dark:text-orange-200 whitespace-pre">
{`return (
  <div>
    <h1>こんにちは</h1>
    <p>Reactを学習中です</p>
  </div>
);`}
              </code>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• JavaScriptの中に書ける</li>
              <li>• 動的な値を使える</li>
              <li>• コンポーネントとして再利用可能</li>
            </ul>
          </div>
        </div>

        {/* 共通点 */}
        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
            ✨ 共通点
          </p>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            JSXはHTMLに非常によく似ています。タグの書き方（<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{`<h1>`}</code>、<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{`<p>`}</code>など）はHTMLと同じです。違いは、JSXがJavaScriptの中に書けることと、動的な値を使えることです。
          </p>
        </div>
      </div>
    </div>
  );
}


