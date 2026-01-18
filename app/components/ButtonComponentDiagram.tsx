"use client";

export default function ButtonComponentDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        📊 コンポーネントの構造を理解しよう
      </h3>
      <div className="mx-auto max-w-4xl">
        <svg
          viewBox="0 0 900 500"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 背景 */}
          <rect width="900" height="500" fill="#f0f9ff" className="dark:fill-blue-950" />

          {/* 関数定義部分 */}
          <g>
            <rect x="50" y="50" width="300" height="180" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" className="dark:fill-blue-900 dark:stroke-blue-600" />
            <text x="200" y="85" textAnchor="middle" fill="#1e40af" fontSize="18" fontWeight="bold" className="dark:fill-blue-300">
              関数コンポーネント
            </text>
            <text x="200" y="110" textAnchor="middle" fill="#1e40af" fontSize="14" className="dark:fill-blue-300">
              {`const Button = () => {`}
            </text>
            <rect x="70" y="125" width="260" height="80" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-800 dark:stroke-blue-500" />
            <text x="200" y="150" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold" className="dark:fill-blue-300">
              return ステートメント
            </text>
            <text x="200" y="170" textAnchor="middle" fill="#1e40af" fontSize="11" className="dark:fill-blue-300">
              JSX要素を返す
            </text>
            <text x="200" y="190" textAnchor="middle" fill="#1e40af" fontSize="10" className="dark:fill-blue-300">
              {`<button>クリックしてください</button>`}
            </text>
            <text x="200" y="215" textAnchor="middle" fill="#1e40af" fontSize="14" className="dark:fill-blue-300">
              {`};`}
            </text>
          </g>

          {/* 矢印1 */}
          <path
            d="M 350 140 L 500 140"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <text x="425" y="130" fontSize="16" fill="#1e40af" fontWeight="bold" textAnchor="middle" className="dark:fill-blue-300">
            実行・変換
          </text>

          {/* JSX */}
          <g>
            <rect x="520" y="50" width="320" height="180" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="3" className="dark:fill-green-900 dark:stroke-green-600" />
            <text x="680" y="85" textAnchor="middle" fill="#065f46" fontSize="18" fontWeight="bold" className="dark:fill-green-300">
              JSX（JavaScript XML）
            </text>
            <rect x="540" y="105" width="280" height="100" rx="5" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" className="dark:fill-green-800 dark:stroke-green-500" />
            <text x="680" y="135" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" className="dark:fill-green-300">
              {`<button>クリックしてください</button>`}
            </text>
            <text x="680" y="155" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
              ↓ Reactが変換
            </text>
            <text x="680" y="175" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
              React.createElement()を呼び出し
            </text>
            <text x="680" y="195" textAnchor="middle" fill="#065f46" fontSize="10" className="dark:fill-green-300">
              HTML要素に変換される
            </text>
          </g>

          {/* 矢印2 */}
          <path
            d="M 680 230 L 650 300"
            stroke="#10b981"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />
          <text x="600" y="265" fontSize="16" fill="#065f46" fontWeight="bold" className="dark:fill-green-300">
            変換
          </text>

          {/* HTML表示 */}
          <g>
            <rect x="450" y="300" width="400" height="150" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" className="dark:fill-yellow-900 dark:stroke-yellow-600" />
            <text x="650" y="335" textAnchor="middle" fill="#92400e" fontSize="18" fontWeight="bold" className="dark:fill-yellow-300">
              ブラウザに表示される
            </text>
            <rect x="470" y="350" width="360" height="80" rx="5" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" className="dark:fill-yellow-800 dark:stroke-yellow-500" />
            <rect x="500" y="370" width="300" height="50" rx="5" fill="#ffffff" stroke="#92400e" strokeWidth="2" />
            <text x="650" y="395" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold" className="dark:fill-yellow-300">
              クリックしてください
            </text>
            <text x="650" y="415" textAnchor="middle" fill="#92400e" fontSize="12" className="dark:fill-yellow-300">
              （実際のボタン要素）
            </text>
          </g>

          {/* マーカー定義 */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
          </defs>
        </svg>

        {/* 説明テキスト */}
        <div className="mt-6 space-y-3 text-sm text-blue-800 dark:text-blue-200">
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <p className="font-semibold mb-2">💡 理解のポイント:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>関数コンポーネント:</strong> 通常のJavaScript関数として定義します</li>
              <li><strong>return文:</strong> JSX要素を返すことで、UIを描画します</li>
              <li><strong>JSX:</strong> HTMLに似た構文ですが、JavaScriptの中に書けます</li>
              <li><strong>自動変換:</strong> ReactがJSXをHTML要素に変換して表示します</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

