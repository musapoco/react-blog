"use client";

export default function JsxHeadingParagraphDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        📊 JSXの基本構造を理解しよう
      </h3>
      <div className="mx-auto max-w-4xl">
        <svg
          viewBox="0 0 900 400"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 背景 */}
          <rect width="900" height="400" fill="#f0f9ff" className="dark:fill-blue-950" />

          {/* JSXコード */}
          <g>
            <rect x="50" y="50" width="350" height="300" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" className="dark:fill-blue-900 dark:stroke-blue-600" />
            <text x="225" y="85" textAnchor="middle" fill="#1e40af" fontSize="18" fontWeight="bold" className="dark:fill-blue-300">
              JSXコード
            </text>
            <rect x="70" y="100" width="310" height="230" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-800 dark:stroke-blue-500" />
            <text x="225" y="130" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`const Welcome = () => {`}
            </text>
            <text x="225" y="155" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`  return (`}
            </text>
            <text x="225" y="180" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`    <div>`}
            </text>
            <text x="225" y="205" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`      <h1>こんにちは</h1>`}
            </text>
            <text x="225" y="230" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`      <p>Reactを学習中です</p>`}
            </text>
            <text x="225" y="255" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`    </div>`}
            </text>
            <text x="225" y="280" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`  );`}
            </text>
            <text x="225" y="305" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              {`};`}
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 400 200 L 500 200"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <text x="450" y="190" fontSize="16" fill="#1e40af" fontWeight="bold" textAnchor="middle" className="dark:fill-blue-300">
            変換
          </text>

          {/* ブラウザ表示 */}
          <g>
            <rect x="520" y="50" width="330" height="300" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="3" className="dark:fill-green-900 dark:stroke-green-600" />
            <text x="685" y="85" textAnchor="middle" fill="#065f46" fontSize="18" fontWeight="bold" className="dark:fill-green-300">
              ブラウザに表示される
            </text>
            <rect x="540" y="100" width="290" height="230" rx="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" className="dark:fill-green-800 dark:stroke-green-500" />
            <rect x="560" y="130" width="250" height="50" rx="3" fill="#ffffff" stroke="#065f46" strokeWidth="2" />
            <text x="685" y="155" textAnchor="middle" fill="#065f46" fontSize="20" fontWeight="bold" className="dark:fill-green-300">
              こんにちは
            </text>
            <text x="685" y="175" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
              (h1タグ)
            </text>
            <rect x="560" y="200" width="250" height="40" rx="3" fill="#ffffff" stroke="#065f46" strokeWidth="2" />
            <text x="685" y="220" textAnchor="middle" fill="#065f46" fontSize="14" className="dark:fill-green-300">
              Reactを学習中です
            </text>
            <text x="685" y="235" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
              (pタグ)
            </text>
          </g>

          {/* マーカー定義 */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>

        {/* 説明テキスト */}
        <div className="mt-6 space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <p className="font-semibold mb-2">💡 理解のポイント:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>h1タグ:</strong> 見出しを表すHTML要素です。JSXでは<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{`<h1>`}</code>と書きます</li>
              <li><strong>pタグ:</strong> 段落を表すHTML要素です。JSXでは<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">{`<p>`}</code>と書きます</li>
              <li><strong>divタグ:</strong> 複数の要素を1つにまとめるためのコンテナです</li>
              <li><strong>自動変換:</strong> ReactがJSXをHTML要素に変換して、ブラウザに表示します</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


