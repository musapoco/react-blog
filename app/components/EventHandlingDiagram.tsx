"use client";

export default function EventHandlingDiagram() {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h3 className="mb-4 text-lg font-semibold text-blue-900 dark:text-blue-100">
        🎯 イベントハンドリングの流れ
      </h3>
      
      <div className="mb-6 rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl">
          <svg
            viewBox="0 0 700 300"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ユーザー */}
            <circle cx="100" cy="150" r="40" fill="#E3F2FD" stroke="#1976D2" strokeWidth="3" />
            <text x="100" y="145" fontSize="16" fill="#1976D2" fontWeight="bold" textAnchor="middle">
              ユーザー
            </text>
            <text x="100" y="165" fontSize="12" fill="#424242" textAnchor="middle">
              クリック
            </text>

            {/* 矢印1 */}
            <path
              d="M 140 150 L 200 150"
              stroke="#1976D2"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-blue)"
            />
            <text x="170" y="140" fontSize="12" fill="#1976D2" fontWeight="bold">
              操作
            </text>

            {/* ボタン */}
            <rect x="200" y="120" width="120" height="60" rx="8" fill="#FFF3E0" stroke="#F57C00" strokeWidth="3" />
            <text x="260" y="150" fontSize="14" fill="#F57C00" fontWeight="bold" textAnchor="middle">
              ボタン
            </text>
            <text x="260" y="165" fontSize="11" fill="#424242" textAnchor="middle">
              (UI要素)
            </text>

            {/* 矢印2 */}
            <path
              d="M 320 150 L 380 150"
              stroke="#4CAF50"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-green)"
            />
            <text x="350" y="140" fontSize="12" fill="#4CAF50" fontWeight="bold">
              イベント発生
            </text>

            {/* イベントハンドラー */}
            <rect x="380" y="120" width="120" height="60" rx="8" fill="#F1F8E9" stroke="#689F38" strokeWidth="3" />
            <text x="440" y="145" fontSize="14" fill="#689F38" fontWeight="bold" textAnchor="middle">
              イベント
            </text>
            <text x="440" y="160" fontSize="14" fill="#689F38" fontWeight="bold" textAnchor="middle">
              ハンドラー
            </text>
            <text x="440" y="175" fontSize="10" fill="#424242" textAnchor="middle">
              (関数)
            </text>

            {/* 矢印3 */}
            <path
              d="M 500 150 L 560 150"
              stroke="#9C27B0"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead-purple)"
            />
            <text x="530" y="140" fontSize="12" fill="#9C27B0" fontWeight="bold">
              実行
            </text>

            {/* 結果 */}
            <rect x="560" y="120" width="100" height="60" rx="8" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="3" />
            <text x="610" y="150" fontSize="14" fill="#9C27B0" fontWeight="bold" textAnchor="middle">
              状態変更
            </text>
            <text x="610" y="165" fontSize="11" fill="#424242" textAnchor="middle">
              (UI更新)
            </text>

            {/* 矢印のマーカー */}
            <defs>
              <marker
                id="arrowhead-blue"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#1976D2" />
              </marker>
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
                id="arrowhead-purple"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#9C27B0" />
              </marker>
            </defs>

            {/* 説明 */}
            <text x="350" y="250" fontSize="14" fill="#424242" textAnchor="middle" fontWeight="bold">
              ユーザーの操作 → イベント発生 → ハンドラー実行 → UI更新
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
        <p className="font-medium">📚 イベントハンドリングの仕組み:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>ユーザーが操作</strong>（クリック、入力など）</li>
          <li><strong>イベントが発生</strong>（onClick、onChangeなど）</li>
          <li><strong>イベントハンドラーが実行</strong>（指定した関数が呼ばれる）</li>
          <li><strong>UIが更新</strong>（状態が変わり、画面が更新される）</li>
        </ol>
      </div>
    </div>
  );
}
