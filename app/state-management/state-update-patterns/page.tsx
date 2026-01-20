"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import StateUpdatePatternDiagram from "@/app/components/StateUpdatePatternDiagram";
import StateUpdateComparisonDiagram from "@/app/components/StateUpdateComparisonDiagram";
import ArrayUpdateDiagram from "@/app/components/ArrayUpdateDiagram";

export const runtime = "edge";

export default function StateUpdatePatternsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Header */}
      <section className="border-b border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/state-management"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            レッスン一覧に戻る
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              状態の更新パターン
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 5
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            状態を更新する様々な方法と、それぞれの使い分けを学びます
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 30分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* イントロダクション */}
          <section className="mb-12">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
              <h2 className="mb-4 text-2xl font-bold text-blue-900 dark:text-blue-100">
                🎯 このレッスンで学ぶこと
              </h2>
              <div className="space-y-3 text-blue-800 dark:text-blue-200">
                <p>
                  状態の更新には様々なパターンがあります。適切な更新方法を選ぶことで、
                  コードが読みやすくなり、バグを防ぐことができます。
                </p>
                <p>このレッスンでは、以下の内容を学びます：</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>直接値での更新:</strong> シンプルな値の更新方法
                  </li>
                  <li>
                    <strong>関数型更新:</strong> 前の値を使った安全な更新方法
                  </li>
                  <li>
                    <strong>オブジェクトの更新:</strong> スプレッド構文を使った更新
                  </li>
                  <li>
                    <strong>配列の更新:</strong> 追加、削除、更新のパターン
                  </li>
                  <li>
                    <strong>条件付き更新:</strong> 特定の条件での更新
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 1. 基本的な状態更新 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              1. 基本的な状態更新
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  最もシンプルな更新方法は、<strong>新しい値を直接渡す</strong>ことです。
                  文字列や数値などの単純な値の場合、この方法が最も適しています。
                </p>

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 基本的な更新の例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const Counter = () => {\n" +
                      "  const [count, setCount] = useState(0);\n" +
                      "  const [name, setName] = useState(\"\");\n" +
                      "  const [isActive, setIsActive] = useState(false);\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <button onClick={() => setCount(5)}>\n" +
                      "        カウントを5に設定\n" +
                      "      </button>\n" +
                      "      <input\n" +
                      "        value={name}\n" +
                      "        onChange={(e) => setName(e.target.value)}\n" +
                      "      />\n" +
                      "      <button onClick={() => setIsActive(true)}>\n" +
                      "        アクティブにする\n" +
                      "      </button>\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    💡 新しい値を直接渡すだけで、状態を更新できます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. 関数型更新 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              2. 関数型更新（前の値を使う）
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  前の値を使って計算したい場合は、<strong>関数型更新</strong>を使います。
                  これにより、連続して状態を更新しても正しく動作します。
                </p>

                {/* 図解 */}
                <StateUpdateComparisonDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 関数型更新の例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const Counter = () => {\n" +
                      "  const [count, setCount] = useState(0);\n\n" +
                      "  // ❌ 問題がある例\n" +
                      "  const incrementTwiceWrong = () => {\n" +
                      "    setCount(count + 1); // 0 + 1 = 1\n" +
                      "    setCount(count + 1); // 0 + 1 = 1 (同じ値)\n" +
                      "    // 結果: count = 1 (期待: 2)\n" +
                      "  };\n\n" +
                      "  // ✅ 正しい例（関数型更新）\n" +
                      "  const incrementTwiceCorrect = () => {\n" +
                      "    setCount(prev => prev + 1); // 0 + 1 = 1\n" +
                      "    setCount(prev => prev + 1); // 1 + 1 = 2\n" +
                      "    // 結果: count = 2 ✓\n" +
                      "  };\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <p>カウント: {count}</p>\n" +
                      "      <button onClick={incrementTwiceCorrect}>\n" +
                      "        +2（関数型更新）\n" +
                      "      </button>\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ 関数型更新のメリット:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>連続して状態を更新しても正しく動作する</li>
                      <li>最新の値を使って計算できる</li>
                      <li>非同期処理でも安全</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                  <h4 className="mb-3 font-semibold text-purple-900 dark:text-purple-100">
                    📚 身近な例えで理解しよう：銀行の残高の例
                  </h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>直接値:</strong> 「現在の残高は1000円です。+500円してください」と伝えると、
                    2回伝えても「1000 + 500 = 1500円」のままです。
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mt-2">
                    <strong>関数型更新:</strong> 「現在の残高に+500円してください」と伝えると、
                    2回伝えると「1000 → 1500 → 2000円」と正しく増えます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. オブジェクトの状態更新 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              3. オブジェクトの状態更新
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  オブジェクトの状態を更新する時は、<strong>スプレッド構文（...）</strong>を使って、
                  新しいオブジェクトを作成する必要があります。
                </p>

                {/* 図解 */}
                <StateUpdatePatternDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 オブジェクト状態の更新例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const UserProfile = () => {\n" +
                      "  const [user, setUser] = useState({\n" +
                      "    name: \"太郎\",\n" +
                      "    age: 25,\n" +
                      "    email: \"taro@example.com\"\n" +
                      "  });\n\n" +
                      "  // ✅ 正しい方法：スプレッド構文を使う\n" +
                      "  const updateName = (newName) => {\n" +
                      "    setUser({ ...user, name: newName });\n" +
                      "  };\n\n" +
                      "  // ✅ 複数のプロパティを更新\n" +
                      "  const updateProfile = (newName, newAge) => {\n" +
                      "    setUser({ ...user, name: newName, age: newAge });\n" +
                      "  };\n\n" +
                      "  // ✅ 関数型更新を使う方法\n" +
                      "  const updateAge = () => {\n" +
                      "    setUser(prev => ({ ...prev, age: prev.age + 1 }));\n" +
                      "  };\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <p>名前: {user.name}</p>\n" +
                      "      <p>年齢: {user.age}</p>\n" +
                      "      <button onClick={() => updateAge()}>\n" +
                      "        年齢を+1\n" +
                      "      </button>\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. 配列の状態更新 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              4. 配列の状態更新
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  配列の状態を更新する時も、<strong>新しい配列を作成</strong>する必要があります。
                  追加、削除、更新の基本的なパターンを学びましょう。
                </p>

                {/* 図解 */}
                <ArrayUpdateDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 配列操作の例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const TodoList = () => {\n" +
                      "  const [items, setItems] = useState([\"タスク1\", \"タスク2\"]);\n\n" +
                      "  // ✅ 要素を追加\n" +
                      "  const addItem = (newItem) => {\n" +
                      "    setItems([...items, newItem]);\n" +
                      "    // または\n" +
                      "    setItems(items.concat(newItem));\n" +
                      "  };\n\n" +
                      "  // ✅ 要素を削除\n" +
                      "  const removeItem = (index) => {\n" +
                      "    setItems(items.filter((_, i) => i !== index));\n" +
                      "  };\n\n" +
                      "  // ✅ 要素を更新\n" +
                      "  const updateItem = (index, newValue) => {\n" +
                      "    setItems(items.map((item, i) => \n" +
                      "      i === index ? newValue : item\n" +
                      "    ));\n" +
                      "  };\n\n" +
                      "  // ✅ 先頭に追加\n" +
                      "  const addToStart = (newItem) => {\n" +
                      "    setItems([newItem, ...items]);\n" +
                      "  };\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      {items.map((item, index) => (\n" +
                      "        <div key={index}>{item}</div>\n" +
                      "      ))}\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ 配列操作のベストプラクティス:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>追加: <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">[...items, newItem]</code> または <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">items.concat(newItem)</code></li>
                      <li>削除: <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">items.filter(...)</code></li>
                      <li>更新: <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">items.map(...)</code></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. 条件付き更新 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              5. 条件付き更新
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  特定の条件が満たされた時だけ状態を更新したい場合もあります。
                  このような場合、<strong>条件分岐</strong>を使って更新を制御します。
                </p>

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 条件付き更新の例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const Counter = () => {\n" +
                      "  const [count, setCount] = useState(0);\n\n" +
                      "  // ✅ 最大値の制限\n" +
                      "  const incrementWithMax = () => {\n" +
                      "    setCount(prev => {\n" +
                      "      if (prev >= 10) {\n" +
                      "        return prev; // 10以上なら更新しない\n" +
                      "      }\n" +
                      "      return prev + 1;\n" +
                      "    });\n" +
                      "  };\n\n" +
                      "  // ✅ 最小値の制限\n" +
                      "  const decrementWithMin = () => {\n" +
                      "    setCount(prev => prev > 0 ? prev - 1 : 0);\n" +
                      "  };\n\n" +
                      "  // ✅ 条件に応じた更新\n" +
                      "  const updateConditionally = (newValue) => {\n" +
                      "    if (newValue > 0 && newValue < 100) {\n" +
                      "      setCount(newValue);\n" +
                      "    }\n" +
                      "  };\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <p>カウント: {count}</p>\n" +
                      "      <button onClick={incrementWithMax}>+1（最大10まで）</button>\n" +
                      "      <button onClick={decrementWithMin}>-1（最小0まで）</button>\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              📚 まとめ
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 覚えておきたいポイント
                </p>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <strong>直接値:</strong> シンプルな値（文字列、数値、真偽値）の更新に適している
                  </li>
                  <li>
                    <strong>関数型更新:</strong> 前の値を使う場合は必ず関数型更新を使う（連続更新でも安全）
                  </li>
                  <li>
                    <strong>オブジェクト:</strong> スプレッド構文（<code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">...object</code>）を使って新しいオブジェクトを作成する
                  </li>
                  <li>
                    <strong>配列:</strong> <code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">filter</code>、<code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">map</code>、<code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">concat</code>などを使って新しい配列を作成する
                  </li>
                  <li>
                    <strong>条件付き更新:</strong> 条件分岐を使って、必要な時だけ状態を更新する
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/state-management/multiple-state"
              className="whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← 前のレッスン: 複数の状態管理
            </Link>
            <Link
              href="/state-management"
              className="justify-self-center whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              レッスン一覧に戻る
            </Link>
            <div className="text-right text-sm text-gray-500 dark:text-gray-400">
              次のレッスン: 準備中
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-12 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-sm text-gray-500 dark:text-gray-500">
            <p>
              © 2024 React Learning.
              すべての学習リソースは無料で提供されています。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

