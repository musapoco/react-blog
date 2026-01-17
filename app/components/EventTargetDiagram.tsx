"use client";

export default function EventTargetDiagram() {
  return (
    <div className="my-4 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
      <h4 className="mb-3 text-base font-semibold text-purple-900 dark:text-purple-100">
        🎯 e.target、e.target.value、e.target.typeとは？
      </h4>

      {/* 例えの説明 */}
      <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="text-xs font-medium text-yellow-900 dark:text-yellow-100 mb-2">
          💡 例えで理解しよう
        </p>
        <div className="text-xs text-yellow-800 dark:text-yellow-200 space-y-1">
          <p>
            <strong>🏠 家の住所の例:</strong> e.targetは「家の住所」、e.target.valueは「家の中身」、e.target.typeは「家の種類」のようなものです。
          </p>
          <p>
            <strong>📦 箱の例:</strong> e.targetは「箱そのもの」、e.target.valueは「箱の中身」、e.target.typeは「箱の種類（小さい箱、大きい箱など）」のようなものです。
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        {/* 図解1: e.target */}
        <div className="rounded bg-white p-3 dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e.target</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-blue-300 bg-blue-50 p-2 dark:bg-blue-900/20">
              <div className="text-xs text-blue-700 dark:text-blue-300">&lt;input&gt;</div>
            </div>
          </div>
          <p className="text-xs text-purple-800 dark:text-purple-200">
            <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">e.target</code>
            は「イベントが発生した要素」を指します。入力フィールドで入力したら、その入力フィールド要素になります。
          </p>
          <div className="mt-2 text-xs text-purple-700 dark:text-purple-300 italic">
            💡 例え: 家の住所のようなもの。どこでイベントが発生したかを示します。
          </div>
        </div>

        {/* 図解2: e.target.value */}
        <div className="rounded bg-white p-3 dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e.target</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">.value</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-green-300 bg-green-50 p-2 dark:bg-green-900/20">
              <div className="text-xs text-green-700 dark:text-green-300">"こんにちは"</div>
            </div>
          </div>
          <p className="text-xs text-purple-800 dark:text-purple-200">
            <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">e.target.value</code>
            は「入力フィールドに入力された値」を取得します。文字列が返ってきます。
          </p>
          <div className="mt-2 text-xs text-purple-700 dark:text-purple-300 italic">
            💡 例え: 箱の中身のようなもの。e.target（箱）を開けて、中身（value）を取り出します。
          </div>
        </div>

        {/* 図解3: e.target.type */}
        <div className="rounded bg-white p-3 dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">e.target</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-purple-300 bg-purple-50 p-2 dark:bg-purple-900/20">
              <div className="text-xs text-purple-700 dark:text-purple-300">.type</div>
            </div>
            <div className="text-lg text-purple-600 dark:text-purple-400">→</div>
            <div className="rounded border-2 border-blue-300 bg-blue-50 p-2 dark:bg-blue-900/20">
              <div className="text-xs text-blue-700 dark:text-blue-300">"text"</div>
            </div>
          </div>
          <p className="text-xs text-purple-800 dark:text-purple-200">
            <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">e.target.type</code>
            は「要素のタイプ」を取得します。<code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">&lt;input type="text" /&gt;</code>の場合、"text"が返ってきます。
          </p>
          <div className="mt-2 text-xs text-purple-700 dark:text-purple-300 italic">
            💡 例え: 箱の種類のようなもの。小さい箱、大きい箱、丸い箱など、箱の種類を表します。
          </div>
        </div>
      </div>
    </div>
  );
}
