"use client";

import { useState } from "react";

export default function InteractiveProductList() {
  const [products, setProducts] = useState(["パン", "牛乳", "卵"]);

  const addProduct = () => {
    const newProducts = [...products, `商品${products.length + 1}`];
    setProducts(newProducts);
  };

  const removeProduct = (index: number) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <button
            onClick={addProduct}
            className="rounded bg-green-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-green-700"
          >
            + 商品を追加
          </button>
        </div>
        <ul className="space-y-1">
          {products.map((product, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 dark:bg-gray-800"
            >
              <span className="text-gray-900 dark:text-white">{product}</span>
              <button
                onClick={() => removeProduct(index)}
                className="text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このようにリストが表示されます。商品を追加・削除して動作を確認してみましょう！
      </p>
    </div>
  );
}


