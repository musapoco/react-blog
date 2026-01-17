"use client";

export default function PropsPackageDiagram() {
  return (
    <div className="my-6 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
      <h3 className="mb-4 text-lg font-semibold text-orange-900 dark:text-orange-100">
        📦 propsは「引っ越しの荷物」のようなもの
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <svg
            viewBox="0 0 700 400"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 家1 */}
            <rect x="50" y="150" width="150" height="120" rx="5" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" />
            <polygon points="50,150 125,100 200,150" fill="#F57C00" stroke="#E65100" strokeWidth="2" />
            <rect x="80" y="200" width="40" height="60" fill="#5D4037" />
            <rect x="130" y="180" width="30" height="30" fill="#90CAF9" stroke="#1976D2" strokeWidth="1" />
            <text x="125" y="310" fontSize="14" fill="#F57C00" fontWeight="bold" textAnchor="middle">
              同じ設計の家
            </text>
            <text x="125" y="330" fontSize="12" fill="#424242" textAnchor="middle">
              (コンポーネント)
            </text>

            {/* 荷物1 */}
            <rect x="30" y="40" width="80" height="60" rx="5" fill="#FFB74D" stroke="#F57C00" strokeWidth="2" />
            <text x="70" y="70" fontSize="12" fill="#FFF" fontWeight="bold" textAnchor="middle">
              荷物1
            </text>
            <text x="70" y="85" fontSize="10" fill="#FFF" textAnchor="middle">
              (props)
            </text>
            <path
              d="M 70 100 Q 70 125 95 140"
              stroke="#F57C00"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-orange)"
            />

            {/* 家2（荷物が入った後） */}
            <rect x="300" y="150" width="150" height="120" rx="5" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" />
            <polygon points="300,150 375,100 450,150" fill="#F57C00" stroke="#E65100" strokeWidth="2" />
            <rect x="330" y="200" width="40" height="60" fill="#5D4037" />
            <rect x="380" y="180" width="30" height="30" fill="#90CAF9" stroke="#1976D2" strokeWidth="1" />
            {/* 家具 */}
            <rect x="320" y="200" width="25" height="25" fill="#8D6E63" />
            <rect x="355" y="215" width="30" height="20" fill="#A5D6A7" />
            <text x="375" y="310" fontSize="14" fill="#F57C00" fontWeight="bold" textAnchor="middle">
              家具が入った家
            </text>
            <text x="375" y="330" fontSize="12" fill="#424242" textAnchor="middle">
              (実行結果)
            </text>

            {/* 荷物2 */}
            <rect x="500" y="40" width="80" height="60" rx="5" fill="#FFB74D" stroke="#F57C00" strokeWidth="2" />
            <text x="540" y="70" fontSize="12" fill="#FFF" fontWeight="bold" textAnchor="middle">
              荷物2
            </text>
            <text x="540" y="85" fontSize="10" fill="#FFF" textAnchor="middle">
              (props)
            </text>
            <path
              d="M 540 100 Q 540 125 515 140"
              stroke="#F57C00"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-orange2)"
            />

            {/* 家3（異なる荷物が入った後） */}
            <rect x="550" y="150" width="150" height="120" rx="5" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" />
            <polygon points="550,150 625,100 700,150" fill="#F57C00" stroke="#E65100" strokeWidth="2" />
            <rect x="580" y="200" width="40" height="60" fill="#5D4037" />
            <rect x="630" y="180" width="30" height="30" fill="#90CAF9" stroke="#1976D2" strokeWidth="1" />
            {/* 異なる家具 */}
            <rect x="590" y="195" width="20" height="30" fill="#EF9A9A" />
            <rect x="620" y="220" width="35" height="15" fill="#FFE082" />
            <text x="625" y="310" fontSize="14" fill="#F57C00" fontWeight="bold" textAnchor="middle">
              別の家具が入った家
            </text>
            <text x="625" y="330" fontSize="12" fill="#424242" textAnchor="middle">
              (別の実行結果)
            </text>

            {/* 矢印のマーカー */}
            <defs>
              <marker
                id="arrowhead-orange"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#F57C00" />
              </marker>
              <marker
                id="arrowhead-orange2"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#F57C00" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <div className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
        <p className="font-medium">🏠 家の例えで理解しよう:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>コンポーネント</strong> = 同じ設計図で作られた家（設計は同じ）</li>
          <li><strong>props</strong> = 引っ越しの荷物（中に入れる家具やインテリア）</li>
          <li><strong>実行結果</strong> = 荷物を入れた後の家（中身が違えば見た目も変わる）</li>
        </ul>
        <p className="mt-3 pt-3 border-t border-orange-300 dark:border-orange-700">
          💡 つまり、同じコンポーネント（家）でも、props（荷物）が違えば、表示される内容（家具の配置）も変わります！
        </p>
      </div>
    </div>
  );
}
