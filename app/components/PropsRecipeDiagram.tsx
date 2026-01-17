"use client";

export default function PropsRecipeDiagram() {
  return (
    <div className="my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
      <h3 className="mb-4 text-lg font-semibold text-green-900 dark:text-green-100">
        🍳 propsは「レシピと材料」のようなもの
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <svg
            viewBox="0 0 700 450"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* レシピ本 */}
            <rect x="50" y="50" width="120" height="150" rx="5" fill="#FFF9C4" stroke="#F9A825" strokeWidth="2" />
            <text x="110" y="80" fontSize="16" fill="#F57F17" fontWeight="bold" textAnchor="middle">
              レシピ本
            </text>
            <line x1="70" y1="100" x2="150" y2="100" stroke="#F9A825" strokeWidth="1" />
            <text x="70" y="120" fontSize="11" fill="#424242">1. 材料を切る</text>
            <text x="70" y="140" fontSize="11" fill="#424242">2. 炒める</text>
            <text x="70" y="160" fontSize="11" fill="#424242">3. 調味料を入れる</text>
            <text x="70" y="180" fontSize="11" fill="#424242">4. 完成！</text>
            <text x="110" y="230" fontSize="12" fill="#F57F17" fontWeight="bold" textAnchor="middle">
              (コンポーネント)
            </text>

            {/* 矢印 */}
            <path
              d="M 170 125 L 250 200"
              stroke="#4CAF50"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-green)"
            />
            <text x="210" y="155" fontSize="12" fill="#4CAF50" fontWeight="bold">
              +
            </text>

            {/* 材料セット1 */}
            <rect x="250" y="150" width="100" height="100" rx="5" fill="#C8E6C9" stroke="#4CAF50" strokeWidth="2" />
            <text x="300" y="175" fontSize="14" fill="#2E7D32" fontWeight="bold" textAnchor="middle">
              材料セット1
            </text>
            <circle cx="270" cy="200" r="8" fill="#FF9800" />
            <text x="270" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🍅</text>
            <circle cx="300" cy="200" r="8" fill="#8BC34A" />
            <text x="300" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🥒</text>
            <circle cx="330" cy="200" r="8" fill="#E91E63" />
            <text x="330" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🥕</text>
            <text x="300" y="275" fontSize="12" fill="#2E7D32" textAnchor="middle">
              (props)
            </text>

            {/* 矢印 */}
            <path
              d="M 350 200 L 420 200"
              stroke="#4CAF50"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-green2)"
            />

            {/* 完成品1 */}
            <rect x="420" y="150" width="100" height="100" rx="5" fill="#FFE082" stroke="#FFA726" strokeWidth="2" />
            <text x="470" y="175" fontSize="14" fill="#E65100" fontWeight="bold" textAnchor="middle">
              サラダ
            </text>
            <circle cx="440" cy="200" r="8" fill="#FF9800" />
            <text x="440" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🍅</text>
            <circle cx="470" cy="200" r="8" fill="#8BC34A" />
            <text x="470" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🥒</text>
            <circle cx="500" cy="200" r="8" fill="#E91E63" />
            <text x="500" y="205" fontSize="10" fill="#FFF" textAnchor="middle">🥕</text>
            <text x="470" y="275" fontSize="12" fill="#E65100" textAnchor="middle">
              (実行結果)
            </text>

            {/* 材料セット2 */}
            <rect x="250" y="300" width="100" height="100" rx="5" fill="#C8E6C9" stroke="#4CAF50" strokeWidth="2" />
            <text x="300" y="325" fontSize="14" fill="#2E7D32" fontWeight="bold" textAnchor="middle">
              材料セット2
            </text>
            <circle cx="270" cy="350" r="8" fill="#795548" />
            <text x="270" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🍖</text>
            <circle cx="300" cy="350" r="8" fill="#FF5722" />
            <text x="300" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🌶️</text>
            <circle cx="330" cy="350" r="8" fill="#FFC107" />
            <text x="330" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🧅</text>
            <text x="300" y="425" fontSize="12" fill="#2E7D32" textAnchor="middle">
              (別のprops)
            </text>

            {/* 矢印 */}
            <path
              d="M 350 350 L 420 350"
              stroke="#4CAF50"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-green3)"
            />

            {/* 完成品2 */}
            <rect x="420" y="300" width="100" height="100" rx="5" fill="#FFCCBC" stroke="#FF7043" strokeWidth="2" />
            <text x="470" y="325" fontSize="14" fill="#BF360C" fontWeight="bold" textAnchor="middle">
              カレー
            </text>
            <circle cx="440" cy="350" r="8" fill="#795548" />
            <text x="440" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🍖</text>
            <circle cx="470" cy="350" r="8" fill="#FF5722" />
            <text x="470" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🌶️</text>
            <circle cx="500" cy="350" r="8" fill="#FFC107" />
            <text x="500" y="355" fontSize="10" fill="#FFF" textAnchor="middle">🧅</text>
            <text x="470" y="425" fontSize="12" fill="#BF360C" textAnchor="middle">
              (別の実行結果)
            </text>

            {/* 矢印のマーカー */}
            <defs>
              <marker
                id="arrowhead-green"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4CAF50" />
              </marker>
              <marker
                id="arrowhead-green2"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4CAF50" />
              </marker>
              <marker
                id="arrowhead-green3"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4CAF50" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
        <p className="font-medium">🍳 料理の例えで理解しよう:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>コンポーネント</strong> = レシピ（手順は決まっている）</li>
          <li><strong>props</strong> = 材料（使う食材が違う）</li>
          <li><strong>実行結果</strong> = 完成した料理（材料が違えば料理も変わる）</li>
        </ul>
        <p className="mt-3 pt-3 border-t border-green-300 dark:border-green-700">
          💡 つまり、同じレシピ（コンポーネント）でも、使う材料（props）が違えば、できあがる料理（表示結果）も変わります！
        </p>
      </div>
    </div>
  );
}
