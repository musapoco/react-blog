"use client";

import { useState } from "react";

interface Product {
  name: string;
  price: number;
  description: string;
}

export default function InteractiveProductCard() {
  const [products] = useState<Product[]>([
    { name: "ノートPC", price: 98000, description: "高性能なノートパソコン" },
    { name: "マウス", price: 2500, description: "エルゴノミクスデザインのマウス" },
    { name: "キーボード", price: 8500, description: "メカニカルキーボード" },
  ]);

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="mb-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                ¥{product.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 同じProductCardコンポーネントに異なるpropsを渡すことで、異なる商品情報を表示できます。propsを使うことで、コンポーネントの再利用性が大幅に向上します！
      </p>
    </div>
  );
}
