"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import ComponentHouseDiagram from "@/app/components/ComponentHouseDiagram";
import InteractiveButtonDemo from "@/app/components/InteractiveButtonDemo";
import InteractiveCardDemo from "@/app/components/InteractiveCardDemo";
import InteractiveProductListDemo from "@/app/components/InteractiveProductListDemo";

export default function KomponenteSakuseiPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Header */}
      <section className="border-b border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/react-intro"
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
              コンポーネントの作成
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 4
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 25分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* コンポーネントとは */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              コンポーネントとは
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                コンポーネントとは、UI（ユーザーインターフェース）を構成する再利用可能な部品のことです。
                ボタン、フォーム、カード、ページ全体など、あらゆるものがコンポーネントになります。
              </p>
              
              {/* 家の例え図解 */}
              <ComponentHouseDiagram />

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  💡 コンポーネントの例
                </p>
                <ul className="list-disc pl-5 space-y-1 text-blue-800 dark:text-blue-200">
                  <li>ボタンコンポーネント</li>
                  <li>入力フォームコンポーネント</li>
                  <li>商品カードコンポーネント</li>
                  <li>ヘッダーコンポーネント</li>
                  <li>フッターコンポーネント</li>
                </ul>
              </div>
              <p>
                コンポーネントを使うことで、同じコードを何度も書く必要がなくなり、コードの再利用性と保守性が向上します。
              </p>
            </div>
          </section>

          {/* 関数コンポーネントの基本 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              関数コンポーネントの基本
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                関数コンポーネントは、JavaScriptの関数を使ってコンポーネントを定義する方法です。
                現在のReactでは、最も一般的なコンポーネントの書き方です。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 基本的な関数コンポーネント
                </p>
                <CopyableCodeBlock code={`const Welcome = () => {\n  return <h1>ようこそ！</h1>;\n};`} className="mb-3" />
                <p className="text-sm">
                  これは「Welcome」という名前のコンポーネントです。JSXを返すことで、UI要素を表示します。
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ ポイント
                </p>
                <ul className="list-disc pl-5 space-y-1 text-green-800 dark:text-green-200 text-sm">
                  <li>コンポーネント名は大文字で始める（Welcome）</li>
                  <li>アロー関数またはfunctionキーワードで定義できる</li>
                  <li>JSXを返す必要がある</li>
                  <li>1つのコンポーネントには1つの最上位要素を返す</li>
                </ul>
              </div>

              {/* 1つの最上位要素についての詳しい説明 */}
              <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
                <h3 className="mb-4 text-lg font-semibold text-orange-900 dark:text-orange-100">
                  🏠 重要なルール: 1つのコンポーネントには1つの最上位要素を返す
                </h3>
                
                <p className="mb-4 text-orange-800 dark:text-orange-200">
                  コンポーネントが複数の要素を返す場合は、それらを必ず1つの親要素（通常はdiv）で囲む必要があります。
                  これは、家に例えると「1つの家には1つの入口（玄関）が必要」というルールに似ています。
                </p>

                <div className="space-y-4">
                  {/* 間違った例 */}
                  <div className="rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900/30">
                    <p className="mb-3 font-semibold text-red-900 dark:text-red-100">
                      ❌ 間違った例（エラーになります）
                    </p>
                    <CopyableCodeBlock code={`const UserProfile = () => {\n  return (\n    <h2>山田太郎</h2>\n    <p>年齢: 25歳</p>\n    <p>職業: エンジニア</p>\n  );\n};`} className="mb-3" />
                    <div className="rounded bg-white p-3 dark:bg-gray-800">
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">
                        ⚠️ このコードは動作しません！
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        エラーメッセージ: "Adjacent JSX elements must be wrapped in an enclosing tag"
                        （隣接するJSX要素は、囲むタグで包む必要があります）
                      </p>
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-xs text-red-800 dark:text-red-200">
                      <span>🏠 例え:</span>
                      <span>家に複数の入口（玄関）があるのは不自然です。1つの家には1つの入口が必要です。</span>
                    </div>
                  </div>

                  {/* 正しい例 */}
                  <div className="rounded-lg border border-green-300 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/30">
                    <p className="mb-3 font-semibold text-green-900 dark:text-green-100">
                      ✅ 正しい例（動作します）
                    </p>
                    <CopyableCodeBlock code={`const UserProfile = () => {\n  return (\n    <div>\n      <h2>山田太郎</h2>\n      <p>年齢: 25歳</p>\n      <p>職業: エンジニア</p>\n    </div>\n  );\n};`} className="mb-3" />
                    <div className="rounded bg-white p-3 dark:bg-gray-800">
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">
                        ✅ このコードは正しく動作します
                      </p>
                      <div className="space-y-1 text-xs text-green-700 dark:text-green-300">
                        <p>• すべての要素が1つのdivで囲まれています</p>
                        <p>• divが「最上位要素」として機能しています</p>
                        <p>• その中に複数の子要素（h2、pタグ）を含められます</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-xs text-green-800 dark:text-green-200">
                      <span>🏠 例え:</span>
                      <span>家の入口（div）は1つで、その中に複数の部屋（h2、pタグ）がある構造です。</span>
                    </div>
                  </div>

                  {/* 視覚的な説明 */}
                  <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/30">
                    <p className="mb-3 font-semibold text-blue-900 dark:text-blue-100">
                      📊 構造の図解
                    </p>
                    <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                      <div>
                        <p className="mb-2 font-medium">❌ 間違った構造（複数の最上位要素）:</p>
                        <div className="rounded bg-white p-3 font-mono text-xs dark:bg-gray-800">
                          <div className="mb-2 border-l-4 border-red-500 pl-2">&lt;h2&gt; ← 最上位要素1</div>
                          <div className="mb-2 border-l-4 border-red-500 pl-2">&lt;p&gt; ← 最上位要素2（エラー！）</div>
                          <div className="border-l-4 border-red-500 pl-2">&lt;p&gt; ← 最上位要素3（エラー！）</div>
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 font-medium">✅ 正しい構造（1つの最上位要素）:</p>
                        <div className="rounded bg-white p-3 font-mono text-xs dark:bg-gray-800">
                          <div className="mb-2 border-l-4 border-green-500 pl-2">&lt;div&gt; ← 最上位要素（OK！）</div>
                          <div className="ml-4 mb-1 border-l-4 border-blue-400 pl-2">&lt;h2&gt; ← 子要素1</div>
                          <div className="ml-4 mb-1 border-l-4 border-blue-400 pl-2">&lt;p&gt; ← 子要素2</div>
                          <div className="ml-4 border-l-4 border-blue-400 pl-2">&lt;p&gt; ← 子要素3</div>
                          <div className="border-l-4 border-green-500 pl-2">&lt;/div&gt;</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* なぜこのルールがあるのか */}
                  <div className="rounded-lg border border-purple-300 bg-purple-50 p-4 dark:border-purple-700 dark:bg-purple-900/30">
                    <p className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
                      💡 なぜこのルールがあるのか？
                    </p>
                    <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                      <li>
                        <strong>Reactの仕様:</strong> Reactは、コンポーネントが1つの要素を返すことを前提に設計されています。
                        複数の要素を返すと、Reactがどのようにレンダリングすべきか判断できません。
                      </li>
                      <li>
                        <strong>パフォーマンス:</strong> 1つのルート要素があることで、Reactは変更を効率的に検出できます。
                      </li>
                      <li>
                        <strong>明確性:</strong> コードの構造が明確になり、どの要素がどこに配置されるかが分かりやすくなります。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* コンポーネントの使い方 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              コンポーネントの使い方
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                コンポーネントを定義したら、HTMLタグのように使うことができます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 コンポーネントを使用する
                </p>
                <CopyableCodeBlock code={`// コンポーネントの定義\nconst Welcome = () => {\n  return <h1>ようこそ！</h1>;\n};\n\n// コンポーネントの使用\nconst App = () => {\n  return (\n    <div>\n      <Welcome />\n      <Welcome />\n      <Welcome />\n    </div>\n  );\n};`} className="mb-3" />
                <p className="text-sm">
                  同じコンポーネントを何度でも使えます。ここでは「Welcome」コンポーネントを3回使っています。
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-gray-50 border border-green-200 p-3 dark:bg-gray-800 dark:border-green-800">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">表示結果：</p>
                <div className="rounded bg-white p-4 dark:bg-gray-900">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ようこそ！</h1>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ようこそ！</h1>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ようこそ！</h1>
                </div>
              </div>
            </div>
          </section>

          {/* より複雑なコンポーネント */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              より複雑なコンポーネント
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                コンポーネントの中に複数の要素を含めることもできます。
                ただし、複数の要素を返す場合は、divタグなどで囲む必要があります。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 複数の要素を含むコンポーネント
                </p>
                <CopyableCodeBlock code={`const UserProfile = () => {\n  return (\n    <div>\n      <h2>山田太郎</h2>\n      <p>年齢: 25歳</p>\n      <p>職業: エンジニア</p>\n    </div>\n  );\n};`} className="mb-3" />
                <p className="text-sm">
                  複数の要素を返す場合は、必ず1つの親要素（ここではdiv）で囲む必要があります。
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-gray-50 border border-green-200 p-3 dark:bg-gray-800 dark:border-green-800">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">表示結果：</p>
                <div className="rounded bg-white p-4 dark:bg-gray-900">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">山田太郎</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">年齢: 25歳</p>
                  <p className="text-gray-700 dark:text-gray-300">職業: エンジニア</p>
                </div>
              </div>
            </div>
          </section>

          {/* コンポーネントのネスト */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              コンポーネントのネスト
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                コンポーネントの中に、別のコンポーネントを入れることもできます。
                これにより、大きなコンポーネントを小さなコンポーネントに分解できます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 コンポーネントをネストする
                </p>
                <CopyableCodeBlock code={`// 小さなコンポーネント\nconst Header = () => {\n  return <header>ヘッダー</header>;\n};\n\nconst Footer = () => {\n  return <footer>フッター</footer>;\n};\n\n// 大きなコンポーネント\nconst App = () => {\n  return (\n    <div>\n      <Header />\n      <main>メインコンテンツ</main>\n      <Footer />\n    </div>\n  );\n};`} className="mb-3" />
                <p className="text-sm">
                  このように、小さなコンポーネントを組み合わせて、大きなアプリケーションを作ることができます。
                </p>
              </div>
            </div>
          </section>

          {/* 例題セクション */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              📚 例題
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-4">
              実際にコンポーネントを作成して、使い方を理解しましょう。
            </p>
            
            <div className="space-y-4">
              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題1: ボタンコンポーネント
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  「クリック」というテキストを表示するボタンコンポーネントを作成してください。コンポーネント名は「Button」にしてください。
                </p>
                <CopyableCodeBlock code={`const Button = () => {\n  return <button>クリック</button>;\n};`} />
                <InteractiveButtonDemo />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題2: カードコンポーネント
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  タイトルと説明文を含むカードコンポーネントを作成してください。コンポーネント名は「Card」にしてください。
                </p>
                <CopyableCodeBlock code={`const Card = () => {\n  return (\n    <div className="card">\n      <h3>タイトル</h3>\n      <p>説明文がここに入ります</p>\n    </div>\n  );\n};`} />
                <InteractiveCardDemo />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題3: コンポーネントを組み合わせる
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Cardコンポーネントを3つ使って、商品リストを表示するコンポーネントを作成してください。
                </p>
                <CopyableCodeBlock code={`const Card = () => {\n  return (\n    <div className="card">\n      <h3>商品名</h3>\n      <p>商品の説明</p>\n    </div>\n  );\n};\n\nconst ProductList = () => {\n  return (\n    <div>\n      <Card />\n      <Card />\n      <Card />\n    </div>\n  );\n};`} />
                <InteractiveProductListDemo />
              </div>
            </div>
          </div>

          {/* まとめ */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                コンポーネントは、UIを構成する再利用可能な部品です。
              </p>
              <p>
                関数コンポーネントは、JavaScriptの関数を使って定義します。
              </p>
              <p>
                コンポーネントを組み合わせることで、大きなアプリケーションを構築できます。
              </p>
              <p>
                コンポーネントを使うことで、コードの再利用性と保守性が向上します。
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/jsx-kiso"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: JSXの基礎
            </Link>
            <Link
              href="/react-intro"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/react-intro/props-no-tsukaikata"
              className="justify-self-end rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              次のレッスン: propsの使い方 →
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

