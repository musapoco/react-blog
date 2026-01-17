"use client";

import { useState } from "react";

export default function InteractiveToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
            実際の表示結果
          </h4>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isOn ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isOn ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              状態: {isOn ? "ON" : "OFF"}
            </span>
          </div>
          <div
            className={`rounded p-4 ${
              isOn
                ? "bg-green-50 dark:bg-green-900/20"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                isOn
                  ? "text-green-900 dark:text-green-100"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {isOn ? "✓ スイッチがONになりました！" : "スイッチがOFFです"}
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        💡 スイッチをクリックすると、ON/OFFが切り替わります。状態の変化を確認できます！
      </p>
    </div>
  );
}
