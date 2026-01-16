"use client";

import { useState } from "react";

export default function InteractiveScoreEvaluation() {
  const [score, setScore] = useState(85);

  const getEvaluation = (score: number) => {
    if (score >= 80) return "優秀";
    if (score >= 60) return "合格";
    return "不合格";
  };

  const getEvaluationColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-blue-600 dark:text-blue-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
          <div className="flex items-center gap-4">
            <label className="text-xs text-gray-600 dark:text-gray-400">
              点数:
            </label>
            <input
              type="range"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              min="0"
              max="100"
              className="flex-1"
            />
            <span className="w-12 text-right text-sm font-semibold text-gray-900 dark:text-white">
              {score}点
            </span>
          </div>
        </div>
        <div className="rounded bg-gray-50 p-4 dark:bg-gray-800">
          <p className="mb-2 text-gray-900 dark:text-white">
            点数: {score}点
          </p>
          <p>
            評価:{" "}
            <span className={getEvaluationColor(score)}>
              {getEvaluation(score)}
            </span>
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 上のコードを実行すると、このように点数によって評価が変わります。スライダーを動かして、点数を変えると評価が変わることを確認してみましょう！
      </p>
    </div>
  );
}


