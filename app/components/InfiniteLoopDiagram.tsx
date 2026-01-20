"use client";

export default function InfiniteLoopDiagram() {
  return (
    <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
      <h3 className="mb-4 text-center text-lg font-semibold text-red-900 dark:text-red-100">
        🔄 無限ループの仕組みと解決方法
      </h3>
      <div className="mx-auto max-w-4xl">
        {/* 無限ループの流れ */}
        <div className="mb-8 space-y-4">
          <h4 className="text-center font-semibold text-gray-900 dark:text-white">⚠️ 無限ループが発生する流れ</h4>
          
          {/* サイクル図 */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* 円形の矢印 */}
              <svg viewBox="0 0 400 400" className="w-full max-w-md">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="10 5" className="dark:stroke-red-600" />
                
                {/* Step 1 */}
                <g>
                  <circle cx="200" cy="50" r="50" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" className="dark:fill-red-900 dark:stroke-red-600" />
                  <text x="200" y="45" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="bold" className="dark:fill-red-300">
                    1️⃣
                  </text>
                  <text x="200" y="60" textAnchor="middle" fill="#991b1b" fontSize="12" className="dark:fill-red-300">
                    レンダリング
                  </text>
                  <text x="200" y="75" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
                    count = 0
                  </text>
                </g>

                {/* Step 2 */}
                <g>
                  <circle cx="350" cy="200" r="50" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" className="dark:fill-red-900 dark:stroke-red-600" />
                  <text x="350" y="195" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="bold" className="dark:fill-red-300">
                    2️⃣
                  </text>
                  <text x="350" y="210" textAnchor="middle" fill="#991b1b" fontSize="12" className="dark:fill-red-300">
                    useEffect実行
                  </text>
                  <text x="350" y="225" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
                    setCount(0+1)
                  </text>
                </g>

                {/* Step 3 */}
                <g>
                  <circle cx="200" cy="350" r="50" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" className="dark:fill-red-900 dark:stroke-red-600" />
                  <text x="200" y="345" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="bold" className="dark:fill-red-300">
                    3️⃣
                  </text>
                  <text x="200" y="360" textAnchor="middle" fill="#991b1b" fontSize="12" className="dark:fill-red-300">
                    状態更新
                  </text>
                  <text x="200" y="375" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
                    count = 1
                  </text>
                </g>

                {/* Step 4 */}
                <g>
                  <circle cx="50" cy="200" r="50" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" className="dark:fill-red-900 dark:stroke-red-600" />
                  <text x="50" y="195" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="bold" className="dark:fill-red-300">
                    4️⃣
                  </text>
                  <text x="50" y="210" textAnchor="middle" fill="#991b1b" fontSize="12" className="dark:fill-red-300">
                    再レンダリング
                  </text>
                  <text x="50" y="225" textAnchor="middle" fill="#991b1b" fontSize="10" className="dark:fill-red-300">
                    count変更検知
                  </text>
                </g>

                {/* 矢印 */}
                <defs>
                  <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                </defs>
                <path d="M 220 80 Q 300 100 320 180" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrow-red)" />
                <path d="M 330 220 Q 300 300 220 320" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrow-red)" />
                <path d="M 180 320 Q 100 300 80 220" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrow-red)" />
                <path d="M 70 180 Q 100 100 180 80" stroke="#ef4444" strokeWidth="3" fill="none" markerEnd="url(#arrow-red)" />
              </svg>
            </div>
          </div>
        </div>

        {/* 悪い例 */}
        <div className="mb-6 rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <h4 className="text-lg font-bold text-red-900 dark:text-red-100">無限ループになるコード</h4>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
            <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
              <code className="text-red-800 dark:text-red-200">
                const [count, setCount] = useState(0);
                <br />
                <br />
                useEffect(() ={`>`} {`{`}
                <br />
                &nbsp;&nbsp;// ❌ 毎回+1してしまう
                <br />
                &nbsp;&nbsp;setCount(count + 1);
                <br />
                {`}`}, [count]); // ← countを依存配列に入れている
              </code>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-red-200 bg-red-100 p-3 dark:border-red-700 dark:bg-red-900/30">
            <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ 何が起こるか:</p>
            <ol className="list-decimal space-y-1 pl-5 text-xs text-red-800 dark:text-red-200">
              <li>count = 0 でレンダリング</li>
              <li>useEffectが実行され、setCount(0 + 1) で count = 1</li>
              <li>countが変わったので、再レンダリング</li>
              <li>useEffectが再実行され、setCount(1 + 1) で count = 2</li>
              <li>これが永遠に続く... 🔄</li>
            </ol>
          </div>
        </div>

        {/* 解決方法 */}
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <h4 className="text-lg font-bold text-green-900 dark:text-green-100">解決方法</h4>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">方法1: 依存配列から除外（1回だけ実行）</h5>
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;setCount(count + 1);
                  <br />
                  {`}`}, []); // ← 空の配列（1回だけ実行）
                </code>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">方法2: 条件分岐を追加</h5>
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;if (count &lt; 10) {`{`} // ← 条件を追加
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;setCount(count + 1);
                  <br />
                  &nbsp;&nbsp;{`}`}
                  <br />
                  {`}`}, [count]);
                </code>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 dark:bg-gray-900">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">方法3: 関数型更新を使う（推奨）</h5>
              <div className="rounded bg-gray-50 p-3 font-mono text-xs dark:bg-gray-800">
                <code className="text-green-800 dark:text-green-200">
                  useEffect(() ={`>`} {`{`}
                  <br />
                  &nbsp;&nbsp;setCount(prev ={`>`} prev + 1); // ← 前の値を使う
                  <br />
                  {`}`}, []); // 依存配列を空にできる
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* 例え話 */}
        <div className="mt-6 rounded-lg border border-red-300 bg-red-100 p-4 dark:border-red-700 dark:bg-red-900/30">
          <h4 className="mb-3 font-semibold text-red-900 dark:text-red-100">🔄 身近な例えで理解しよう：エレベーターの例</h4>
          <div className="space-y-2 text-sm text-red-800 dark:text-red-200">
            <p>
              <strong>❌ 無限ループ:</strong> エレベーターに乗って「次の階に行く」ボタンを押し続けるようなものです。
              1階→2階→3階...と永遠に上がり続けて、どこにも止まることができません。
            </p>
            <p>
              <strong>✅ 解決方法1:</strong> 「最初の1回だけ押す」ようにする（空の依存配列）。
              最初の階だけ移動して、そこで止まります。
            </p>
            <p>
              <strong>✅ 解決方法2:</strong> 「10階までしか行かない」という条件を付ける（条件分岐）。
              10階に着いたら自動的に止まります。
            </p>
            <p>
              <strong>✅ 解決方法3:</strong> 「現在の階数を見て、次の階を計算する」ようにする（関数型更新）。
              これは最も安全で、推奨される方法です。
            </p>
            <p className="mt-2">
              <strong>💡 重要なポイント:</strong> useEffectの中で状態を更新するときは、
              依存配列や条件分岐を慎重に設計しないと、無限ループが発生してしまいます。
              ブラウザがフリーズしてしまうこともあるので、注意が必要です！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

