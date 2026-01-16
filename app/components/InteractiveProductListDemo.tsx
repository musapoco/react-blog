"use client";

export default function InteractiveProductListDemo() {
  return (
    <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-green-300 bg-gray-50 p-4 dark:bg-gray-800 dark:border-green-800">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">
          💡 実際の表示結果:
        </p>
        <div className="rounded bg-white p-4 dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                商品名
              </h3>
              <p className="text-gray-700 dark:text-gray-300">商品の説明</p>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                商品名
              </h3>
              <p className="text-gray-700 dark:text-gray-300">商品の説明</p>
            </div>
            {/* Card 3 */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                商品名
              </h3>
              <p className="text-gray-700 dark:text-gray-300">商品の説明</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
          このコードを実行すると、上のように3つのカードが並んで表示されます。同じCardコンポーネントを3回使うことで、効率的に商品リストを作成できました！
        </p>
        <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
          <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-1">
            🎯 ポイント
          </p>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            この例では、Cardコンポーネントを1つ作って、それを3回使っています。これがコンポーネントの「再利用性」です。実際のECサイトでは、商品データに基づいて動的にカードを生成します。
          </p>
        </div>
      </div>
    </div>
  );
}

