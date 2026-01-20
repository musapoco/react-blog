"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import MultipleStateDiagram from "@/app/components/MultipleStateDiagram";
import StateUpdatePatternDiagram from "@/app/components/StateUpdatePatternDiagram";
import StateUpdateFlowDiagram from "@/app/components/StateUpdateFlowDiagram";
import RealWorldStateDiagram from "@/app/components/RealWorldStateDiagram";
import StateStructureDiagram from "@/app/components/StateStructureDiagram";
import FormInteractionDiagram from "@/app/components/FormInteractionDiagram";

export const runtime = "edge";

export default function MultipleStatePage() {
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
              複数の状態管理
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 4
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            複数のuseStateを使ったり、オブジェクトで状態をまとめて管理する方法を学びます
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 25分
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
                  実践的なアプリケーションでは、1つのコンポーネントで複数の状態を管理する必要があります。
                  このレッスンでは、複数の状態を効率的に管理する方法を学びます。
                </p>
                <p>このレッスンでは、以下の内容を学びます：</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>個別のuseState:</strong> それぞれの状態を独立して管理する方法
                  </li>
                  <li>
                    <strong>オブジェクトのuseState:</strong> 関連する状態をまとめて管理する方法
                  </li>
                  <li>
                    <strong>状態の更新パターン:</strong> オブジェクト状態を正しく更新する方法
                  </li>
                  <li>
                    <strong>使い分けの判断基準:</strong> いつ個別の状態を使い、いつオブジェクトを使うか
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 1. 個別のuseStateを使う方法 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              1. 個別のuseStateを使う方法
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  最もシンプルな方法は、<strong>それぞれの状態に対して個別にuseStateを使う</strong>ことです。
                  この方法は、状態が互いに独立している場合に最適です。
                </p>

                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                  <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                    ✅ 個別のuseStateが適している場合
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-green-800 dark:text-green-200">
                    <li>状態が互いに独立している</li>
                    <li>状態を個別に更新することが多い</li>
                    <li>コードがシンプルで読みやすい</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 例：ユーザー情報フォーム
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const UserForm = () => {\n" +
                      "  // 個別のuseStateで管理\n" +
                      "  const [name, setName] = useState(\"\");\n" +
                      "  const [age, setAge] = useState(0);\n" +
                      "  const [email, setEmail] = useState(\"\");\n\n" +
                      "  return (\n" +
                      "    <form>\n" +
                      "      <input\n" +
                      "        type=\"text\"\n" +
                      "        value={name}\n" +
                      "        onChange={(e) => setName(e.target.value)}\n" +
                      "        placeholder=\"名前\"\n" +
                      "      />\n" +
                      "      <input\n" +
                      "        type=\"number\"\n" +
                      "        value={age}\n" +
                      "        onChange={(e) => setAge(Number(e.target.value))}\n" +
                      "        placeholder=\"年齢\"\n" +
                      "      />\n" +
                      "      <input\n" +
                      "        type=\"email\"\n" +
                      "        value={email}\n" +
                      "        onChange={(e) => setEmail(e.target.value)}\n" +
                      "        placeholder=\"メールアドレス\"\n" +
                      "      />\n" +
                      "    </form>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ メリット:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>各状態が独立していて、更新が明確</li>
                      <li>一つの状態を更新しても他の状態に影響しない</li>
                      <li>コードが読みやすく、理解しやすい</li>
                    </ul>
                  </div>
                </div>

                {/* 実世界の視覚化図解 */}
                <RealWorldStateDiagram />

                {/* 状態更新フロー図解 */}
                <StateUpdateFlowDiagram />

                {/* フォーム入力時の状態変化図解 */}
                <FormInteractionDiagram />

                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                  <h4 className="mb-3 font-semibold text-purple-900 dark:text-purple-100">
                    📚 身近な例えで理解しよう：引き出しの例
                  </h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    個別のuseStateは、「名前用の引き出し」「年齢用の引き出し」「メール用の引き出し」を
                    それぞれ用意するようなものです。それぞれの引き出しに物を入れたり出したりするのが
                    独立していて、他の引き出しに影響しません。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. オブジェクトのuseStateを使う方法 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              2. オブジェクトのuseStateを使う方法
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  関連する状態を<strong>1つのオブジェクトにまとめて管理</strong>する方法もあります。
                  この方法は、状態が関連している場合や、まとめて扱うことが多い場合に便利です。
                </p>

                {/* 図解 */}
                <MultipleStateDiagram />

                {/* 状態の構造図解 */}
                <StateStructureDiagram />

                <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                  <p className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                    📦 オブジェクトのuseStateが適している場合
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-orange-800 dark:text-orange-200">
                    <li>状態が互いに関連している</li>
                    <li>状態をまとめて初期化・リセットすることが多い</li>
                    <li>状態を一つの単位として扱いたい</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 例：ユーザー情報をオブジェクトで管理
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useState } from "react";\n\n' +
                      "const UserForm = () => {\n" +
                      "  // オブジェクトのuseStateで管理\n" +
                      "  const [user, setUser] = useState({\n" +
                      "    name: \"\",\n" +
                      "    age: 0,\n" +
                      "    email: \"\"\n" +
                      "  });\n\n" +
                      "  return (\n" +
                      "    <form>\n" +
                      "      <input\n" +
                      "        type=\"text\"\n" +
                      "        value={user.name}\n" +
                      "        onChange={(e) =>\n" +
                      "          setUser({ ...user, name: e.target.value })\n" +
                      "        }\n" +
                      "        placeholder=\"名前\"\n" +
                      "      />\n" +
                      "      <input\n" +
                      "        type=\"number\"\n" +
                      "        value={user.age}\n" +
                      "        onChange={(e) =>\n" +
                      "          setUser({ ...user, age: Number(e.target.value) })\n" +
                      "        }\n" +
                      "        placeholder=\"年齢\"\n" +
                      "      />\n" +
                      "      <input\n" +
                      "        type=\"email\"\n" +
                      "        value={user.email}\n" +
                      "        onChange={(e) =>\n" +
                      "          setUser({ ...user, email: e.target.value })\n" +
                      "        }\n" +
                      "        placeholder=\"メールアドレス\"\n" +
                      "      />\n" +
                      "    </form>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ メリット:</strong>
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>関連するデータを一つの単位として扱える</li>
                      <li>状態をまとめてリセットしたり、初期化しやすい</li>
                      <li>APIから取得したデータ構造と一致させやすい</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. オブジェクト状態の更新方法 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              3. オブジェクト状態の更新方法
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  オブジェクトの状態を更新する時は、<strong>新しいオブジェクトを作成する</strong>必要があります。
                  Reactは、同じオブジェクト参照を検知できないため、直接変更しても再レンダリングされません。
                </p>

                {/* 図解 */}
                <StateUpdatePatternDiagram />

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                  <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    ⚠️ 重要なポイント：イミュータビリティ（不変性）
                  </p>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Reactでは、状態を<strong>直接変更（ミューテーション）してはいけません</strong>。
                    必ず新しいオブジェクトや配列を作成して、状態を更新する必要があります。
                    これがReactの「イミュータビリティ（不変性）」という原則です。
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 複数のプロパティを一度に更新する例
                  </p>
                  <CopyableCodeBlock
                    code={
                      "const handleSubmit = () => {\n" +
                      "  // スプレッド構文で全ての値をコピーして、必要な部分だけ更新\n" +
                      "  setUser({\n" +
                      "    ...user,\n" +
                      "    name: \"新しい名前\",\n" +
                      "    age: 25\n" +
                      "  });\n" +
                      "\n" +
                      "  // または関数型更新を使う\n" +
                      "  setUser((prev) => ({\n" +
                      "    ...prev,\n" +
                      "    name: \"新しい名前\",\n" +
                      "    age: 25\n" +
                      "  }));\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. 使い分けの判断基準 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              4. 使い分けの判断基準
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  個別のuseStateとオブジェクトのuseState、どちらを使うべきか判断する基準を学びましょう。
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                    <h3 className="mb-3 text-lg font-bold text-green-900 dark:text-green-100">
                      ✅ 個別のuseStateを使う場合
                    </h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態が互いに独立している</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態を個別に更新することが多い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>シンプルなコンポーネント</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態の数が少ない（2〜3個程度）</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-2 border-orange-300 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                    <h3 className="mb-3 text-lg font-bold text-orange-900 dark:text-orange-100">
                      📦 オブジェクトのuseStateを使う場合
                    </h3>
                    <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態が互いに関連している</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態をまとめて扱うことが多い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>APIのデータ構造と一致させたい</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">•</span>
                        <span>状態を一括でリセットしたい</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    💡 実践的なアドバイス
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    最初は<strong>個別のuseStateから始める</strong>ことをおすすめします。
                    コードがシンプルで理解しやすく、ほとんどの場合で十分です。
                    状態が増えてきたり、関連性が強くなってきたら、オブジェクトのuseStateに移行することを検討しましょう。
                  </p>
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
                    個別のuseStateは、<strong>独立した状態を管理する</strong>のに最適です
                  </li>
                  <li>
                    オブジェクトのuseStateは、<strong>関連する状態をまとめて管理</strong>するのに便利です
                  </li>
                  <li>
                    オブジェクト状態を更新する時は、<strong>必ず新しいオブジェクトを作成</strong>します（スプレッド構文を使う）
                  </li>
                  <li>
                    状態を直接変更（ミューテーション）してはいけません
                  </li>
                  <li>
                    最初は個別のuseStateから始めて、必要に応じてオブジェクトに移行しましょう
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/state-management/use-effect-advanced"
              className="whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← 前のレッスン: useEffectの応用
            </Link>
            <Link
              href="/state-management"
              className="justify-self-center whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/state-management/state-update-patterns"
              className="whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              次のレッスン: 状態の更新パターン →
            </Link>
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

