"use client";

export default function EventFlowSimpleDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
        🔄 イベントオブジェクト（e）の移動
      </h3>
      
      <div className="mb-4 rounded-lg bg-white p-4 dark:bg-gray-900">
        <div className="flex items-center justify-between gap-4">
          {/* 入力フィールド */}
          <div className="flex-1 text-center">
            <div className="rounded border-2 border-blue-300 bg-blue-50 p-3 dark:bg-blue-900/20 mb-2">
              <div className="text-xs text-blue-700 dark:text-blue-300 font-mono">📝 入力</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">"こんにちは"</div>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">ユーザーが入力</div>
          </div>

          {/* 矢印 */}
          <div className="flex-shrink-0">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path
                d="M 10 20 L 50 20"
                stroke="#1976D2"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-blue)"
              />
            </svg>
          </div>

          {/* イベントオブジェクト生成 */}
          <div className="flex-1 text-center">
            <div className="rounded border-2 border-orange-500 bg-orange-50 p-3 dark:bg-orange-900/20 mb-2">
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400">e</div>
              <div className="text-xs text-orange-700 dark:text-orange-300 mt-1">情報が入った箱</div>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Reactが自動生成</div>
          </div>

          {/* 矢印 */}
          <div className="flex-shrink-0">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path
                d="M 10 20 L 50 20"
                stroke="#4CAF50"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrow-green)"
              />
            </svg>
          </div>

          {/* 関数 */}
          <div className="flex-1 text-center">
            <div className="rounded border-2 border-green-500 bg-green-50 p-3 dark:bg-green-900/20 mb-2">
              <div className="text-xs font-bold text-green-600 dark:text-green-400">関数</div>
              <div className="text-xs text-green-700 dark:text-green-300 mt-1">handleChange(e)</div>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">eが自動的に渡される</div>
          </div>

          {/* 矢印のマーカー */}
          <defs>
            <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#1976D2" />
            </marker>
            <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#4CAF50" />
            </marker>
          </defs>
        </div>
      </div>

      <p className="text-sm text-blue-800 dark:text-blue-200 text-center mb-3">
        💡 入力 → eが作られる → eが関数に移動 → 関数内でe.target.valueを使用
      </p>
      <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
        <p className="text-xs font-medium text-green-900 dark:text-green-100 mb-2">
          🎯 例えで理解しよう
        </p>
        <div className="text-xs text-green-800 dark:text-green-200 space-y-1">
          <p>
            <strong>📦 宅配便の流れ:</strong> 荷物を発送（入力）→ 配送センターが箱に入れる（eが作られる）→ 
            配達員が届ける（eが関数に移動）→ 箱を開ける（e.target.valueを使用）
          </p>
          <p>
            <strong>📮 手紙の流れ:</strong> 手紙を書く（入力）→ 封筒に入れる（eが作られる）→ 
            郵便配達員が届ける（eが関数に移動）→ 封筒を開ける（e.target.valueを使用）
          </p>
        </div>
      </div>
    </div>
  );
}
