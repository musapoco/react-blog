"use client";

export default function PropsShopDiagram() {
  return (
    <div className="my-6 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
      <h3 className="mb-4 text-lg font-semibold text-purple-900 dark:text-purple-100">
        🏪 propsは「お店の商品カード」のようなもの
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <svg
            viewBox="0 0 700 400"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 商品カードテンプレート */}
            <rect x="50" y="50" width="150" height="200" rx="10" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="3" />
            <text x="125" y="80" fontSize="16" fill="#9C27B0" fontWeight="bold" textAnchor="middle">
              商品カード
            </text>
            <text x="125" y="100" fontSize="14" fill="#6A1B9A" textAnchor="middle">
              テンプレート
            </text>
            <line x1="70" y1="120" x2="180" y2="120" stroke="#9C27B0" strokeWidth="1" />
            <rect x="70" y="130" width="110" height="60" rx="5" fill="#E1BEE7" />
            <text x="125" y="150" fontSize="12" fill="#424242" textAnchor="middle">
              [商品名]
            </text>
            <text x="125" y="170" fontSize="12" fill="#424242" textAnchor="middle">
              ¥[価格]
            </text>
            <text x="125" y="190" fontSize="11" fill="#757575" textAnchor="middle">
              [説明]
            </text>
            <text x="125" y="280" fontSize="12" fill="#9C27B0" textAnchor="middle">
              (コンポーネント)
            </text>

            {/* 矢印 */}
            <path
              d="M 200 150 L 280 150"
              stroke="#9C27B0"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-purple)"
            />
            <text x="240" y="140" fontSize="12" fill="#9C27B0" fontWeight="bold">
              propsを入れる
            </text>

            {/* 商品情報1 */}
            <rect x="280" y="100" width="120" height="100" rx="5" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="2" />
            <text x="340" y="125" fontSize="14" fill="#7B1FA2" fontWeight="bold" textAnchor="middle">
              商品情報1
            </text>
            <text x="340" y="145" fontSize="12" fill="#424242" textAnchor="middle">
              ノートPC
            </text>
            <text x="340" y="165" fontSize="12" fill="#424242" textAnchor="middle">
              ¥98,000
            </text>
            <text x="340" y="185" fontSize="11" fill="#757575" textAnchor="middle">
              高性能
            </text>
            <text x="340" y="225" fontSize="12" fill="#7B1FA2" textAnchor="middle">
              (props)
            </text>

            {/* 矢印 */}
            <path
              d="M 400 150 L 470 150"
              stroke="#9C27B0"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-purple2)"
            />

            {/* 完成した商品カード1 */}
            <rect x="470" y="50" width="150" height="200" rx="10" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="3" />
            <rect x="490" y="130" width="110" height="60" rx="5" fill="#E1BEE7" />
            <text x="545" y="155" fontSize="14" fill="#424242" textAnchor="middle" fontWeight="bold">
              ノートPC
            </text>
            <text x="545" y="175" fontSize="14" fill="#D32F2F" textAnchor="middle" fontWeight="bold">
              ¥98,000
            </text>
            <text x="545" y="195" fontSize="11" fill="#757575" textAnchor="middle">
              高性能なPC
            </text>
            <text x="545" y="280" fontSize="12" fill="#9C27B0" textAnchor="middle">
              (実行結果)
            </text>

            {/* 商品情報2 */}
            <rect x="280" y="250" width="120" height="100" rx="5" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="2" />
            <text x="340" y="275" fontSize="14" fill="#7B1FA2" fontWeight="bold" textAnchor="middle">
              商品情報2
            </text>
            <text x="340" y="295" fontSize="12" fill="#424242" textAnchor="middle">
              マウス
            </text>
            <text x="340" y="315" fontSize="12" fill="#424242" textAnchor="middle">
              ¥2,500
            </text>
            <text x="340" y="335" fontSize="11" fill="#757575" textAnchor="middle">
              エルゴノミクス
            </text>
            <text x="340" y="375" fontSize="12" fill="#7B1FA2" textAnchor="middle">
              (別のprops)
            </text>

            {/* 矢印 */}
            <path
              d="M 400 300 L 470 300"
              stroke="#9C27B0"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-purple3)"
            />

            {/* 完成した商品カード2 */}
            <rect x="470" y="200" width="150" height="200" rx="10" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="3" />
            <rect x="490" y="280" width="110" height="60" rx="5" fill="#E1BEE7" />
            <text x="545" y="305" fontSize="14" fill="#424242" textAnchor="middle" fontWeight="bold">
              マウス
            </text>
            <text x="545" y="325" fontSize="14" fill="#D32F2F" textAnchor="middle" fontWeight="bold">
              ¥2,500
            </text>
            <text x="545" y="345" fontSize="11" fill="#757575" textAnchor="middle">
              エルゴノミクス
            </text>
            <text x="545" y="430" fontSize="12" fill="#9C27B0" textAnchor="middle">
              (別の実行結果)
            </text>

            {/* 矢印のマーカー */}
            <defs>
              <marker
                id="arrowhead-purple"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#9C27B0" />
              </marker>
              <marker
                id="arrowhead-purple2"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#9C27B0" />
              </marker>
              <marker
                id="arrowhead-purple3"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#9C27B0" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
        <p className="font-medium">🏪 お店の例えで理解しよう:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>コンポーネント</strong> = 商品カードのテンプレート（デザインは同じ）</li>
          <li><strong>props</strong> = 商品情報（商品名、価格、説明など）</li>
          <li><strong>実行結果</strong> = 完成した商品カード（情報が違えば表示も変わる）</li>
        </ul>
        <p className="mt-3 pt-3 border-t border-purple-300 dark:border-purple-700">
          💡 つまり、同じテンプレート（コンポーネント）でも、商品情報（props）が違えば、表示されるカードの内容も変わります！
        </p>
      </div>
    </div>
  );
}
