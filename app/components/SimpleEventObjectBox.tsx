"use client";

export default function SimpleEventObjectBox() {
  return (
    <div className="my-4 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="rounded-lg border-2 border-orange-500 bg-white p-3 dark:bg-gray-800">
            <div className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-1">e</div>
            <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <div>target: 📝</div>
              <div>target.value: "文字"</div>
              <div>target.type: "text"</div>
              <div>type: "change"</div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-sm text-orange-800 dark:text-orange-200">
          <p className="font-medium mb-1">📦 イベントオブジェクト（e）の箱</p>
          <p className="text-xs mb-2">
            eの中には、イベントに関する情報がすべて入っています。
            この箱が関数に自動的に渡されます。
          </p>
          <div className="text-xs space-y-1">
            <p><strong>📮 例え:</strong> 手紙の封筒のようなものです。中に情報が入っていて、配達員（React）が自動的に届けてくれます。</p>
            <p><strong>🎁 例え:</strong> プレゼントボックスのようなものです。中にプレゼント（情報）が入っていて、自動的に受け取る人（関数）に届きます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
