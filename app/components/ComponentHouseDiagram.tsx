"use client";

export default function ComponentHouseDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
        🏠 家に例えたコンポーネントの考え方
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        {/* 家の図解 */}
        <div className="mx-auto mb-6 max-w-2xl">
          <svg
            viewBox="0 0 600 400"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 地面 */}
            <rect x="0" y="320" width="600" height="80" fill="#8B7355" />
            
            {/* 家の外枠 */}
            <rect x="150" y="120" width="300" height="200" fill="#F4E4BC" stroke="#8B4513" strokeWidth="3" />
            
            {/* 屋根 */}
            <polygon points="150,120 300,40 450,120" fill="#8B4513" stroke="#654321" strokeWidth="3" />
            
            {/* ドア1 */}
            <rect x="180" y="240" width="50" height="80" fill="#654321" stroke="#432816" strokeWidth="2" />
            <circle cx="220" cy="280" r="3" fill="#D4AF37" />
            <text x="205" y="340" fontSize="12" fill="#654321" fontWeight="bold">ドア</text>
            
            {/* ドア2 */}
            <rect x="370" y="240" width="50" height="80" fill="#654321" stroke="#432816" strokeWidth="2" />
            <circle cx="410" cy="280" r="3" fill="#D4AF37" />
            <text x="395" y="340" fontSize="12" fill="#654321" fontWeight="bold">ドア</text>
            
            {/* 窓1 */}
            <rect x="200" y="140" width="40" height="40" fill="#87CEEB" stroke="#4169E1" strokeWidth="2" />
            <line x1="220" y1="140" x2="220" y2="180" stroke="#4169E1" strokeWidth="2" />
            <line x1="200" y1="160" x2="240" y2="160" stroke="#4169E1" strokeWidth="2" />
            <text x="200" y="210" fontSize="12" fill="#4169E1" fontWeight="bold">窓</text>
            
            {/* 窓2 */}
            <rect x="360" y="140" width="40" height="40" fill="#87CEEB" stroke="#4169E1" strokeWidth="2" />
            <line x1="380" y1="140" x2="380" y2="180" stroke="#4169E1" strokeWidth="2" />
            <line x1="360" y1="160" x2="400" y2="160" stroke="#4169E1" strokeWidth="2" />
            <text x="360" y="210" fontSize="12" fill="#4169E1" fontWeight="bold">窓</text>
            
            {/* 煙突 */}
            <rect x="380" y="60" width="30" height="60" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="375" y="50" width="40" height="15" fill="#696969" />
            
            {/* 矢印と説明 */}
            <line x1="100" y1="200" x2="145" y2="200" stroke="#DC143C" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <text x="10" y="205" fontSize="14" fill="#DC143C" fontWeight="bold">家全体 = アプリ</text>
            
            <line x1="480" y1="200" x2="520" y2="200" stroke="#DC143C" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <text x="525" y="205" fontSize="14" fill="#DC143C" fontWeight="bold">コンポーネント</text>
            
            <line x1="205" y1="100" x2="205" y2="135" stroke="#32CD32" strokeWidth="2" markerEnd="url(#arrowGreen)" />
            <text x="210" y="92" fontSize="12" fill="#32CD32" fontWeight="bold">窓コンポーネント</text>
            
            <line x1="395" y1="100" x2="395" y2="135" stroke="#32CD32" strokeWidth="2" markerEnd="url(#arrowGreen)" />
            <text x="400" y="92" fontSize="12" fill="#32CD32" fontWeight="bold">同じ窓を再利用</text>
            
            {/* 矢印マーカー定義 */}
            <defs>
              <marker
                id="arrowRed"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#DC143C" />
              </marker>
              <marker
                id="arrowGreen"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#32CD32" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* 説明テキスト */}
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
              💡 家とコンポーネントの対応関係
            </h4>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="font-semibold">🏠 家全体:</span>
                <span>Webアプリケーション全体（例: ECサイト、ブログなど）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">🚪 ドア:</span>
                <span>ボタンコンポーネント（同じデザインのボタンを何度でも使える）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">🪟 窓:</span>
                <span>カードコンポーネント（商品カード、記事カードなど）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">🧱 壁:</span>
                <span>レイアウトコンポーネント（コンテナ、グリッドなど）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">🏡 屋根:</span>
                <span>ヘッダーコンポーネント（ページの上部）</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
              ✅ コンポーネントのメリット
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-200">
              <li>
                <strong>再利用性:</strong> 同じドアや窓の設計図を何度でも使えるように、コンポーネントも何度でも使えます
              </li>
              <li>
                <strong>保守性:</strong> ドアのデザインを変えたい時、設計図を1つ変更すれば、すべてのドアに反映されます
              </li>
              <li>
                <strong>分割統治:</strong> 家を小さな部品に分けて考えることで、複雑なアプリも管理しやすくなります
              </li>
              <li>
                <strong>独立性:</strong> 各部品（コンポーネント）は独立しているため、他の部分に影響を与えずに変更できます
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
            <h4 className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
              🔄 実際の例
            </h4>
            <p className="text-purple-800 dark:text-purple-200">
              ECサイトを作る場合、<strong>商品カードコンポーネント</strong>を1つ作れば、それを100個の商品に対して使い回せます。
              カードのデザインを変更したい時も、コンポーネントを1つ修正するだけで、すべての商品カードに反映されます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

