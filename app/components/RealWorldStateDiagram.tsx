"use client";

export default function RealWorldStateDiagram() {
  return (
    <div className="my-6 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-indigo-900 dark:text-indigo-100">
        📸 実世界での状態管理のイメージ
      </h3>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 個別のuseState - 引き出し */}
          <div className="rounded-lg border-2 border-green-300 bg-white p-6 shadow-lg dark:border-green-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-green-900 dark:text-green-100">
              ✅ 個別のuseState = 個別の引き出し
            </h4>
            <svg viewBox="0 0 400 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* 背景 */}
              <rect width="400" height="400" fill="#f0fdf4" className="dark:fill-green-950" />
              
              {/* 引き出し1 - name */}
              <g>
                {/* 引き出し本体 */}
                <rect x="50" y="50" width="100" height="80" fill="#86efac" stroke="#22c55e" strokeWidth="3" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
                {/* 取っ手 */}
                <circle cx="100" cy="90" r="8" fill="#16a34a" className="dark:fill-green-400" />
                {/* ラベル */}
                <text x="100" y="145" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold" className="dark:fill-green-300">
                  name
                </text>
                <text x="100" y="165" textAnchor="middle" fill="#166534" fontSize="12" className="dark:fill-green-300">
                  "太郎"
                </text>
                {/* 引き出しの中身 */}
                <text x="100" y="75" textAnchor="middle" fill="#166534" fontSize="10" className="dark:fill-green-300">
                  "太郎"
                </text>
              </g>

              {/* 引き出し2 - age */}
              <g>
                <rect x="150" y="50" width="100" height="80" fill="#86efac" stroke="#22c55e" strokeWidth="3" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
                <circle cx="200" cy="90" r="8" fill="#16a34a" className="dark:fill-green-400" />
                <text x="200" y="145" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold" className="dark:fill-green-300">
                  age
                </text>
                <text x="200" y="165" textAnchor="middle" fill="#166534" fontSize="12" className="dark:fill-green-300">
                  25
                </text>
                <text x="200" y="75" textAnchor="middle" fill="#166534" fontSize="10" className="dark:fill-green-300">
                  25
                </text>
              </g>

              {/* 引き出し3 - email */}
              <g>
                <rect x="250" y="50" width="100" height="80" fill="#86efac" stroke="#22c55e" strokeWidth="3" rx="5" className="dark:fill-green-800 dark:stroke-green-600" />
                <circle cx="300" cy="90" r="8" fill="#16a34a" className="dark:fill-green-400" />
                <text x="300" y="145" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold" className="dark:fill-green-300">
                  email
                </text>
                <text x="300" y="165" textAnchor="middle" fill="#166534" fontSize="10" className="dark:fill-green-300">
                  "taro@..."
                </text>
                <text x="300" y="75" textAnchor="middle" fill="#166534" fontSize="9" className="dark:fill-green-300">
                  taro@...
                </text>
              </g>

              {/* 説明 */}
              <text x="200" y="220" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold" className="dark:fill-green-300">
                それぞれ独立した引き出し
              </text>
              <text x="200" y="240" textAnchor="middle" fill="#166534" fontSize="11" className="dark:fill-green-300">
                1つを開けても他の引き出しは影響なし
              </text>
            </svg>
          </div>

          {/* オブジェクトのuseState - 箱 */}
          <div className="rounded-lg border-2 border-orange-300 bg-white p-6 shadow-lg dark:border-orange-700 dark:bg-gray-900">
            <h4 className="mb-4 text-center text-lg font-bold text-orange-900 dark:text-orange-100">
              📦 オブジェクトのuseState = 整理箱
            </h4>
            <svg viewBox="0 0 400 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* 背景 */}
              <rect width="400" height="400" fill="#fff7ed" className="dark:fill-orange-950" />
              
              {/* 箱の本体 */}
              <rect x="100" y="50" width="200" height="180" fill="#fed7aa" stroke="#f97316" strokeWidth="4" rx="10" className="dark:fill-orange-900 dark:stroke-orange-600" />
              
              {/* 蓋のライン */}
              <line x1="100" y1="100" x2="300" y2="100" stroke="#f97316" strokeWidth="3" className="dark:stroke-orange-600" />
              
              {/* 蓋の取っ手 */}
              <rect x="185" y="80" width="30" height="20" fill="#ea580c" rx="5" className="dark:fill-orange-700" />
              
              {/* userラベル */}
              <text x="200" y="125" textAnchor="middle" fill="#9a3412" fontSize="16" fontWeight="bold" className="dark:fill-orange-300">
                user
              </text>
              
              {/* 中身の項目 */}
              <g>
                <rect x="120" y="140" width="60" height="25" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" rx="3" className="dark:fill-orange-800 dark:stroke-orange-500" />
                <text x="150" y="157" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold" className="dark:fill-orange-300">
                  name: "太郎"
                </text>
                
                <rect x="190" y="140" width="60" height="25" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" rx="3" className="dark:fill-orange-800 dark:stroke-orange-500" />
                <text x="220" y="157" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold" className="dark:fill-orange-300">
                  age: 25
                </text>
                
                <rect x="120" y="175" width="130" height="25" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" rx="3" className="dark:fill-orange-800 dark:stroke-orange-500" />
                <text x="185" y="192" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="bold" className="dark:fill-orange-300">
                  email: "taro@..."
                </text>
              </g>

              {/* 説明 */}
              <text x="200" y="280" textAnchor="middle" fill="#9a3412" fontSize="12" fontWeight="bold" className="dark:fill-orange-300">
                1つの箱に全てをまとめて保管
              </text>
              <text x="200" y="300" textAnchor="middle" fill="#9a3412" fontSize="11" className="dark:fill-orange-300">
                中身を変更する時は新しい箱を作る
              </text>
            </svg>
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-6 rounded-lg border border-indigo-300 bg-indigo-100 p-4 dark:border-indigo-700 dark:bg-indigo-900/30">
          <p className="text-sm text-indigo-800 dark:text-indigo-200">
            <strong>💡 理解のポイント:</strong> 個別のuseStateは「それぞれ専用の引き出し」で、オブジェクトのuseStateは「1つの整理箱」のようなものです。
            引き出しは1つを開けても他に影響しませんが、整理箱の中身を変える時は新しい箱を作る必要があります。
          </p>
        </div>
      </div>
    </div>
  );
}

