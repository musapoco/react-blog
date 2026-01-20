"use client";

export default function UseEffectLifecycleDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
        コンポーネントのライフサイクルとuseEffect
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 循環フロー形式の図解 */}
        <div className="relative">
          {/* 中央の円形フロー */}
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 600 600" className="w-full max-w-2xl">
              {/* 背景円 */}
              <circle cx="300" cy="300" r="200" fill="#eff6ff" className="dark:fill-blue-950" stroke="#3b82f6" strokeWidth="3" />
              
              {/* マウント */}
              <g>
                <circle cx="300" cy="120" r="70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" className="dark:fill-blue-900 dark:stroke-blue-600" />
                <text x="300" y="115" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold" className="dark:fill-blue-300">
                  🎬 マウント
                </text>
                <text x="300" y="135" textAnchor="middle" fill="#1e40af" fontSize="12" className="dark:fill-blue-300">
                  コンポーネント表示
                </text>
                <text x="300" y="150" textAnchor="middle" fill="#1e40af" fontSize="11" className="dark:fill-blue-300">
                  useEffect実行
                </text>
              </g>

              {/* 更新 */}
              <g>
                <circle cx="480" cy="300" r="70" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" className="dark:fill-yellow-900 dark:stroke-yellow-600" />
                <text x="480" y="295" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold" className="dark:fill-yellow-300">
                  🔄 更新
                </text>
                <text x="480" y="315" textAnchor="middle" fill="#92400e" fontSize="12" className="dark:fill-yellow-300">
                  状態変更
                </text>
                <text x="480" y="330" textAnchor="middle" fill="#92400e" fontSize="11" className="dark:fill-yellow-300">
                  クリーンアップ→再実行
                </text>
              </g>

              {/* アンマウント */}
              <g>
                <circle cx="300" cy="480" r="70" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" className="dark:fill-red-900 dark:stroke-red-600" />
                <text x="300" y="475" textAnchor="middle" fill="#991b1b" fontSize="16" fontWeight="bold" className="dark:fill-red-300">
                  🎭 アンマウント
                </text>
                <text x="300" y="495" textAnchor="middle" fill="#991b1b" fontSize="12" className="dark:fill-red-300">
                  コンポーネント削除
                </text>
                <text x="300" y="510" textAnchor="middle" fill="#991b1b" fontSize="11" className="dark:fill-red-300">
                  クリーンアップ実行
                </text>
              </g>

              {/* 待機 */}
              <g>
                <circle cx="120" cy="300" r="70" fill="#f0fdf4" stroke="#10b981" strokeWidth="3" className="dark:fill-green-900 dark:stroke-green-600" />
                <text x="120" y="295" textAnchor="middle" fill="#065f46" fontSize="16" fontWeight="bold" className="dark:fill-green-300">
                  ⏸️ 待機
                </text>
                <text x="120" y="315" textAnchor="middle" fill="#065f46" fontSize="12" className="dark:fill-green-300">
                  通常状態
                </text>
                <text x="120" y="330" textAnchor="middle" fill="#065f46" fontSize="11" className="dark:fill-green-300">
                  副作用実行中
                </text>
              </g>

              {/* 矢印 - マウント → 更新 */}
              <path
                d="M 320 180 Q 420 200 460 240"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrow1)"
                className="dark:stroke-blue-400"
              />

              {/* 矢印 - 更新 → アンマウント */}
              <path
                d="M 460 360 Q 380 420 320 440"
                stroke="#f59e0b"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrow2)"
                className="dark:stroke-yellow-400"
              />

              {/* 矢印 - アンマウント → 待機 */}
              <path
                d="M 240 440 Q 180 380 180 360"
                stroke="#ef4444"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrow3)"
                className="dark:stroke-red-400"
              />

              {/* 矢印 - 待機 → マウント */}
              <path
                d="M 180 280 Q 220 200 280 180"
                stroke="#10b981"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#arrow4)"
                className="dark:stroke-green-400"
              />

              {/* 中央の説明 */}
              <circle cx="300" cy="300" r="80" fill="white" stroke="#3b82f6" strokeWidth="2" className="dark:fill-gray-800 dark:stroke-blue-400" />
              <text x="300" y="295" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold" className="dark:fill-blue-300">
                useEffect
              </text>
              <text x="300" y="315" textAnchor="middle" fill="#1e40af" fontSize="11" className="dark:fill-blue-300">
                ライフサイクル
              </text>

              {/* マーカー定義 */}
              <defs>
                <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                </marker>
                <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                </marker>
                <marker id="arrow4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-8 space-y-3 text-center text-sm text-blue-800 dark:text-blue-200">
          <div className="rounded-lg border border-blue-300 bg-white p-4 dark:border-blue-700 dark:bg-gray-900">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🎭 身近な例えで理解しよう：劇場の例</h4>
            
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <p className="mb-1 text-xs font-medium text-green-900 dark:text-green-100">
                  🎬 マウント時 = 劇が始まる
                </p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  カーテンが上がる（コンポーネント表示）→ 照明が点灯（useEffect実行）
                </p>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="mb-1 text-xs font-medium text-yellow-900 dark:text-yellow-100">
                  🔄 更新時 = シーンが変わる
                </p>
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  舞台セットが変わる → 前の道具を片付ける → 新しい準備
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <p className="mb-1 text-xs font-medium text-red-900 dark:text-red-100">
                  🎭 アンマウント時 = 劇が終わる
                </p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  カーテンが下りる → 照明を消し、道具を片付ける
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="mb-1 text-xs font-medium text-blue-900 dark:text-blue-100">
                  ⏸️ 待機 = 通常状態
                </p>
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  副作用処理が実行中で、次の状態変化を待っている
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
