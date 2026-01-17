"use client";

export default function UseStateFlowDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        useStateの流れ図解
      </h3>
      <div className="mx-auto max-w-3xl">
        <svg
          viewBox="0 0 800 400"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 背景 */}
          <rect width="800" height="400" fill="#f0f9ff" className="dark:fill-blue-950" />

          {/* useState初期化 */}
          <g>
            <rect x="50" y="150" width="120" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900 dark:stroke-blue-600" />
            <text x="110" y="175" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold" className="dark:fill-blue-300">
              useState(0)
            </text>
            <text x="110" y="195" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
              初期値: 0
            </text>
            <text x="110" y="215" textAnchor="middle" fill="#1e40af" fontSize="11" className="dark:fill-blue-300">
              ↓ 2つの値を返す
            </text>
          </g>

          {/* 現在の値 */}
          <g>
            <rect x="250" y="100" width="120" height="60" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" className="dark:fill-green-900 dark:stroke-green-600" />
            <text x="310" y="125" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" className="dark:fill-green-300">
              count
            </text>
            <text x="310" y="145" textAnchor="middle" fill="#065f46" fontSize="16" fontWeight="bold" className="dark:fill-green-300">
              0
            </text>
          </g>

          {/* 更新関数 */}
          <g>
            <rect x="250" y="220" width="120" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" className="dark:fill-yellow-900 dark:stroke-yellow-600" />
            <text x="310" y="245" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold" className="dark:fill-yellow-300">
              setCount
            </text>
            <text x="310" y="265" textAnchor="middle" fill="#92400e" fontSize="11" className="dark:fill-yellow-300">
              更新関数
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 170 190 L 250 130"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 170 190 L 250 250"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* 更新の流れ */}
          <g>
            <rect x="450" y="150" width="120" height="80" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" className="dark:fill-pink-900 dark:stroke-pink-600" />
            <text x="510" y="175" textAnchor="middle" fill="#9f1239" fontSize="13" fontWeight="bold" className="dark:fill-pink-300">
              setCount(5)
            </text>
            <text x="510" y="195" textAnchor="middle" fill="#9f1239" fontSize="12" className="dark:fill-pink-300">
              呼び出し
            </text>
            <text x="510" y="215" textAnchor="middle" fill="#9f1239" fontSize="11" className="dark:fill-pink-300">
              ↓ 状態が更新
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 370 280 L 450 190"
            stroke="#ec4899"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />

          {/* 更新後の状態 */}
          <g>
            <rect x="600" y="100" width="120" height="60" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" className="dark:fill-green-900 dark:stroke-green-600" />
            <text x="660" y="125" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" className="dark:fill-green-300">
              count
            </text>
            <text x="660" y="145" textAnchor="middle" fill="#065f46" fontSize="16" fontWeight="bold" className="dark:fill-green-300">
              5
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 570 190 L 600 130"
            stroke="#ec4899"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />

          {/* 再描画 */}
          <g>
            <rect x="600" y="220" width="120" height="60" rx="8" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2" className="dark:fill-purple-900 dark:stroke-purple-600" />
            <text x="660" y="245" textAnchor="middle" fill="#5b21b6" fontSize="12" fontWeight="bold" className="dark:fill-purple-300">
              自動再描画
            </text>
            <text x="660" y="265" textAnchor="middle" fill="#5b21b6" fontSize="11" className="dark:fill-purple-300">
              画面が更新
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 660 160 L 660 220"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead3)"
          />

          {/* マーカー定義 */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#ec4899" />
            </marker>
            <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
            </marker>
          </defs>
        </svg>

        {/* 説明テキスト */}
        <div className="mt-4 space-y-2 text-center text-sm text-blue-800 dark:text-blue-200">
          <p>
            <strong>1. 初期化:</strong> <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">useState(0)</code>で初期値0を設定
          </p>
          <p>
            <strong>2. 戻り値:</strong> 現在の値（<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">count</code>）と更新関数（<code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/50">setCount</code>）を取得
          </p>
          <p>
            <strong>3. 更新:</strong> <code className="px-1 py-0.5 rounded bg-pink-100 dark:bg-pink-900/50">setCount(5)</code>で状態を5に更新
          </p>
          <p>
            <strong>4. 再描画:</strong> 状態が変わると、コンポーネントが自動的に再描画され、画面が更新されます
          </p>
        </div>
      </div>
    </div>
  );
}


