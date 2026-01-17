"use client";

export default function PropsFlowDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
        📦 propsの流れを理解しよう
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <svg
            viewBox="0 0 700 300"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 親コンポーネント */}
            <rect x="50" y="50" width="200" height="150" rx="10" fill="#E3F2FD" stroke="#1976D2" strokeWidth="3" />
            <text x="150" y="90" fontSize="18" fill="#1976D2" fontWeight="bold" textAnchor="middle">
              親コンポーネント
            </text>
            <text x="150" y="115" fontSize="14" fill="#424242" textAnchor="middle">
              (App)
            </text>
            <rect x="70" y="130" width="160" height="60" rx="5" fill="#BBDEFB" stroke="#1976D2" strokeWidth="2" />
            <text x="150" y="155" fontSize="12" fill="#1976D2" textAnchor="middle" fontWeight="bold">
              propsを渡す
            </text>
            <text x="150" y="175" fontSize="11" fill="#424242" textAnchor="middle">
              name="太郎"
            </text>

            {/* 矢印 */}
            <path
              d="M 250 125 L 350 125"
              stroke="#1976D2"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <text x="300" y="115" fontSize="14" fill="#1976D2" fontWeight="bold" textAnchor="middle">
              props
            </text>

            {/* 子コンポーネント */}
            <rect x="400" y="50" width="200" height="150" rx="10" fill="#F1F8E9" stroke="#689F38" strokeWidth="3" />
            <text x="500" y="90" fontSize="18" fill="#689F38" fontWeight="bold" textAnchor="middle">
              子コンポーネント
            </text>
            <text x="500" y="115" fontSize="14" fill="#424242" textAnchor="middle">
              (Greeting)
            </text>
            <rect x="420" y="130" width="160" height="60" rx="5" fill="#DCEDC8" stroke="#689F38" strokeWidth="2" />
            <text x="500" y="155" fontSize="12" fill="#689F38" textAnchor="middle" fontWeight="bold">
              propsを受け取る
            </text>
            <text x="500" y="175" fontSize="11" fill="#424242" textAnchor="middle">
              {`{props.name}`}
            </text>

            {/* 矢印のマーカー */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#1976D2" />
              </marker>
            </defs>

            {/* 説明 */}
            <text x="350" y="250" fontSize="14" fill="#424242" textAnchor="middle" fontWeight="bold">
              データの流れ: 親 → 子（一方向）
            </text>
            <text x="350" y="270" fontSize="12" fill="#757575" textAnchor="middle">
              親コンポーネントがpropsを渡し、子コンポーネントがそれを受け取ります
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
        <p className="font-medium">📚 ポイント:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>propsは親コンポーネントから子コンポーネントに<strong>一方向</strong>で流れます</li>
          <li>子コンポーネントはpropsを受け取るだけです（逆方向には流れません）</li>
          <li>同じ親から異なるpropsを渡すことで、子コンポーネントをカスタマイズできます</li>
        </ul>
      </div>
    </div>
  );
}
