"use client";

export default function StateStructureDiagram() {
  return (
    <div className="my-6 rounded-lg border border-pink-200 bg-pink-50 p-6 dark:border-pink-800 dark:bg-pink-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-pink-900 dark:text-pink-100">
        🌳 状態の構造を視覚化
      </h3>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 個別のuseState - ツリー構造 */}
          <div className="rounded-lg border-2 border-green-300 bg-white p-6 shadow-lg dark:border-green-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-green-900 dark:text-green-100">
              ✅ 個別のuseStateの構造
            </h4>
            <svg viewBox="0 0 350 250" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* 背景 */}
              <rect width="350" height="250" fill="#f0fdf4" className="dark:fill-green-950" />
              
              {/* ルート */}
              <rect x="125" y="10" width="100" height="35" fill="#22c55e" stroke="#16a34a" strokeWidth="2" rx="5" className="dark:fill-green-700 dark:stroke-green-600" />
              <text x="175" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                Component
              </text>
              
              {/* 水平線（枝分かれ） */}
              <line x1="67.5" y1="60" x2="282.5" y2="60" stroke="#22c55e" strokeWidth="2" className="dark:stroke-green-600" />
              
              {/* ルートから水平線への接続 */}
              <line x1="175" y1="45" x2="175" y2="60" stroke="#22c55e" strokeWidth="3" className="dark:stroke-green-600" />
              
              {/* name */}
              <rect x="30" y="75" width="75" height="50" fill="#86efac" stroke="#22c55e" strokeWidth="2" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
              <text x="67.5" y="100" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold" className="dark:fill-green-300">
                name
              </text>
              <text x="67.5" y="118" textAnchor="middle" fill="#166534" fontSize="10" className="dark:fill-green-300">
                "太郎"
              </text>
              <line x1="67.5" y1="60" x2="67.5" y2="75" stroke="#22c55e" strokeWidth="2" className="dark:stroke-green-600" />
              
              {/* age */}
              <rect x="137.5" y="75" width="75" height="50" fill="#86efac" stroke="#22c55e" strokeWidth="2" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
              <text x="175" y="100" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold" className="dark:fill-green-300">
                age
              </text>
              <text x="175" y="118" textAnchor="middle" fill="#166534" fontSize="10" className="dark:fill-green-300">
                25
              </text>
              <line x1="175" y1="60" x2="175" y2="75" stroke="#22c55e" strokeWidth="2" className="dark:stroke-green-600" />
              
              {/* email */}
              <rect x="245" y="75" width="75" height="50" fill="#86efac" stroke="#22c55e" strokeWidth="2" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
              <text x="282.5" y="100" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold" className="dark:fill-green-300">
                email
              </text>
              <text x="282.5" y="118" textAnchor="middle" fill="#166534" fontSize="9" className="dark:fill-green-300">
                "taro@..."
              </text>
              <line x1="282.5" y1="60" x2="282.5" y2="75" stroke="#22c55e" strokeWidth="2" className="dark:stroke-green-600" />
              
              {/* 特徴 */}
              <text x="175" y="160" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold" className="dark:fill-green-300">
                ✓ 各状態が独立
              </text>
              <text x="175" y="180" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold" className="dark:fill-green-300">
                ✓ フラットな構造
              </text>
            </svg>
          </div>

          {/* オブジェクトのuseState - 階層構造 */}
          <div className="rounded-lg border-2 border-orange-300 bg-white p-6 shadow-lg dark:border-orange-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-orange-900 dark:text-orange-100">
              📦 オブジェクトのuseStateの構造
            </h4>
            <svg viewBox="0 0 350 250" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* 背景 */}
              <rect width="350" height="250" fill="#fff7ed" className="dark:fill-orange-950" />
              
              {/* ルート */}
              <rect x="130" y="10" width="90" height="35" fill="#f97316" stroke="#ea580c" strokeWidth="2" rx="5" className="dark:fill-orange-700 dark:stroke-orange-600" />
              <text x="175" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                Component
              </text>
              
              {/* 枝分かれ */}
              <line x1="175" y1="45" x2="175" y2="65" stroke="#f97316" strokeWidth="3" className="dark:stroke-orange-600" />
              
              {/* userオブジェクト */}
              <rect x="110" y="75" width="130" height="75" fill="#fed7aa" stroke="#f97316" strokeWidth="3" rx="8" className="dark:fill-orange-800 dark:stroke-orange-600" />
              <text x="175" y="98" textAnchor="middle" fill="#9a3412" fontSize="13" fontWeight="bold" className="dark:fill-orange-300">
                user
              </text>
              <line x1="120" y1="108" x2="230" y2="108" stroke="#ea580c" strokeWidth="2" className="dark:stroke-orange-500" />
              
              {/* userの中身 */}
              <g>
                <rect x="125" y="118" width="45" height="22" fill="#ffedd5" stroke="#ea580c" strokeWidth="1" rx="3" className="dark:fill-orange-900 dark:stroke-orange-500" />
                <text x="147.5" y="132" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="bold" className="dark:fill-orange-300">
                  name
                </text>
                
                <rect x="175" y="118" width="45" height="22" fill="#ffedd5" stroke="#ea580c" strokeWidth="1" rx="3" className="dark:fill-orange-900 dark:stroke-orange-500" />
                <text x="197.5" y="132" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="bold" className="dark:fill-orange-300">
                  age
                </text>
                
                <rect x="125" y="143" width="95" height="22" fill="#ffedd5" stroke="#ea580c" strokeWidth="1" rx="3" className="dark:fill-orange-900 dark:stroke-orange-500" />
                <text x="172.5" y="157" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="bold" className="dark:fill-orange-300">
                  email
                </text>
              </g>
              
              <line x1="175" y1="65" x2="175" y2="82.5" stroke="#f97316" strokeWidth="3" className="dark:stroke-orange-600" />
              
              {/* 特徴 */}
              <text x="175" y="185" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold" className="dark:fill-orange-300">
                ✓ 階層的な構造
              </text>
              <text x="175" y="205" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold" className="dark:fill-orange-300">
                ✓ 関連データをまとめる
              </text>
            </svg>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 rounded-lg border border-pink-300 bg-pink-100 p-4 dark:border-pink-700 dark:bg-pink-900/30">
          <p className="text-sm text-pink-800 dark:text-pink-200">
            <strong>💡 構造の違い:</strong> 個別のuseStateは「フラットな構造」で、各状態が同じ階層に並んでいます。
            一方、オブジェクトのuseStateは「階層的な構造」で、userという親オブジェクトの中に各プロパティが入っています。
          </p>
        </div>
      </div>
    </div>
  );
}

