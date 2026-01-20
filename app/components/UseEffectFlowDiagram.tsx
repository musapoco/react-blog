"use client";

export default function UseEffectFlowDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-900 dark:text-purple-100">
        useEffectの実行フロー図解
      </h3>
      <div className="mx-auto max-w-3xl">
        <svg
          viewBox="0 0 900 500"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 背景 */}
          <rect width="900" height="500" fill="#faf5ff" className="dark:fill-purple-950" />

          {/* コンポーネントレンダリング */}
          <g>
            <rect x="50" y="50" width="180" height="80" rx="8" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2" className="dark:fill-purple-900 dark:stroke-purple-600" />
            <text x="140" y="75" textAnchor="middle" fill="#5b21b6" fontSize="14" fontWeight="bold" className="dark:fill-purple-300">
              コンポーネント
            </text>
            <text x="140" y="95" textAnchor="middle" fill="#5b21b6" fontSize="12" className="dark:fill-purple-300">
              レンダリング
            </text>
            <text x="140" y="115" textAnchor="middle" fill="#5b21b6" fontSize="11" className="dark:fill-purple-300">
              ↓ 画面に表示
            </text>
          </g>

          {/* useEffect実行 */}
          <g>
            <rect x="300" y="50" width="180" height="80" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" className="dark:fill-pink-900 dark:stroke-pink-600" />
            <text x="390" y="75" textAnchor="middle" fill="#9f1239" fontSize="14" fontWeight="bold" className="dark:fill-pink-300">
              useEffect
            </text>
            <text x="390" y="95" textAnchor="middle" fill="#9f1239" fontSize="12" className="dark:fill-pink-300">
              実行開始
            </text>
            <text x="390" y="115" textAnchor="middle" fill="#9f1239" fontSize="11" className="dark:fill-pink-300">
              ↓ 副作用処理
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 230 90 L 300 90"
            stroke="#8b5cf6"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* 副作用処理の例 */}
          <g>
            <rect x="550" y="30" width="140" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900 dark:stroke-blue-600" />
            <text x="620" y="50" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold" className="dark:fill-blue-300">
              API呼び出し
            </text>
            <text x="620" y="65" textAnchor="middle" fill="#1e40af" fontSize="10" className="dark:fill-blue-300">
              fetch("/api/data")
            </text>
          </g>

          <g>
            <rect x="550" y="90" width="140" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900 dark:stroke-blue-600" />
            <text x="620" y="110" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold" className="dark:fill-blue-300">
              タイマー設定
            </text>
            <text x="620" y="125" textAnchor="middle" fill="#1e40af" fontSize="10" className="dark:fill-blue-300">
              setInterval(...)
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 480 90 L 550 55"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />
          <path
            d="M 480 90 L 550 115"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />

          {/* 依存配列 */}
          <g>
            <rect x="50" y="200" width="180" height="100" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" className="dark:fill-yellow-900 dark:stroke-yellow-600" />
            <text x="140" y="225" textAnchor="middle" fill="#92400e" fontSize="13" fontWeight="bold" className="dark:fill-yellow-300">
              依存配列
            </text>
            <text x="140" y="250" textAnchor="middle" fill="#92400e" fontSize="11" className="dark:fill-yellow-300">
              [count]
            </text>
            <text x="140" y="270" textAnchor="middle" fill="#92400e" fontSize="10" className="dark:fill-yellow-300">
              ↓ countが
            </text>
            <text x="140" y="285" textAnchor="middle" fill="#92400e" fontSize="10" className="dark:fill-yellow-300">
              変わったら再実行
            </text>
          </g>

          {/* 状態変更 */}
          <g>
            <rect x="300" y="200" width="180" height="100" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" className="dark:fill-green-900 dark:stroke-green-600" />
            <text x="390" y="225" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold" className="dark:fill-green-300">
              状態変更
            </text>
            <text x="390" y="250" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
              setCount(5)
            </text>
            <text x="390" y="270" textAnchor="middle" fill="#065f46" fontSize="10" className="dark:fill-green-300">
              ↓ count が
            </text>
            <text x="390" y="285" textAnchor="middle" fill="#065f46" fontSize="10" className="dark:fill-green-300">
              0 → 5 に変化
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 230 250 L 300 250"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead3)"
          />

          {/* 再実行 */}
          <g>
            <rect x="550" y="200" width="180" height="100" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" className="dark:fill-pink-900 dark:stroke-pink-600" />
            <text x="640" y="225" textAnchor="middle" fill="#9f1239" fontSize="13" fontWeight="bold" className="dark:fill-pink-300">
              useEffect再実行
            </text>
            <text x="640" y="250" textAnchor="middle" fill="#9f1239" fontSize="11" className="dark:fill-pink-300">
              新しい値で処理
            </text>
            <text x="640" y="270" textAnchor="middle" fill="#9f1239" fontSize="10" className="dark:fill-pink-300">
              ↓ count = 5
            </text>
            <text x="640" y="285" textAnchor="middle" fill="#9f1239" fontSize="10" className="dark:fill-pink-300">
              で副作用実行
            </text>
          </g>

          {/* 矢印 */}
          <path
            d="M 480 250 L 550 250"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead4)"
          />

          {/* クリーンアップ */}
          <g>
            <rect x="300" y="350" width="180" height="100" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" className="dark:fill-red-900 dark:stroke-red-600" />
            <text x="390" y="375" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="bold" className="dark:fill-red-300">
              クリーンアップ
            </text>
            <text x="390" y="400" textAnchor="middle" fill="#991b1b" fontSize="11" className="dark:fill-red-300">
              再実行前に実行
            </text>
            <text x="390" y="420" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
              clearInterval()
            </text>
            <text x="390" y="435" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
              AbortController.abort()
            </text>
          </g>

          {/* 矢印（クリーンアップへ） */}
          <path
            d="M 390 350 Q 390 330 390 300"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead2)"
            strokeDasharray="5,5"
          />
          <path
            d="M 550 300 Q 470 320 480 350"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead2)"
            strokeDasharray="5,5"
          />

          {/* マーカー定義 */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#ec4899" />
            </marker>
            <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
            </marker>
            <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
          </defs>
        </svg>

        {/* 説明テキスト */}
        <div className="mt-6 space-y-3 text-center text-sm text-purple-800 dark:text-purple-200">
          <div className="rounded-lg border border-purple-300 bg-white p-3 dark:border-purple-700 dark:bg-gray-900">
            <p className="mb-2">
              <strong>1. コンポーネントレンダリング後:</strong> コンポーネントが画面に表示された後、useEffectが自動的に実行されます
            </p>
            <p className="mb-2">
              <strong>2. 副作用処理:</strong> API呼び出し、タイマー設定、DOM操作などの副作用を実行します
            </p>
            <p className="mb-2">
              <strong>3. 依存配列:</strong> 指定した値（例：count）が変更されると、useEffectが再実行されます
            </p>
            <p>
              <strong>4. クリーンアップ:</strong> 再実行前やコンポーネントの削除時に、タイマーのクリアなどクリーンアップ処理を実行できます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


