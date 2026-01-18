"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import ButtonComponentDiagram from "@/app/components/ButtonComponentDiagram";
import ComponentStructureDiagram from "@/app/components/ComponentStructureDiagram";
import JsxHeadingParagraphDiagram from "@/app/components/JsxHeadingParagraphDiagram";
import JsxMultipleElementsDiagram from "@/app/components/JsxMultipleElementsDiagram";
import JsxHtmlComparisonDiagram from "@/app/components/JsxHtmlComparisonDiagram";
import { practiceProblems, PracticeProblem } from "@/app/data/practiceProblems";

export const runtime = 'edge';

interface PageProps {
  params: Promise<{ id: string }>;
}

const difficultyColors = {
  beginner: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  intermediate: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  advanced: "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
};

const difficultyLabels = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
};

export default function PracticeProblemPage({ params }: PageProps) {
  const { id } = use(params);
  const problemId = parseInt(id, 10);
  const problem: PracticeProblem | undefined = practiceProblems.find(
    (p) => p.id === problemId
  );

  if (!problem) {
    notFound();
  }

  // 前後の問題を取得
  const currentIndex = practiceProblems.findIndex((p) => p.id === problemId);
  const prevProblem = currentIndex > 0 ? practiceProblems[currentIndex - 1] : null;
  const nextProblem =
    currentIndex < practiceProblems.length - 1
      ? practiceProblems[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* パンくずリスト */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ホーム
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/#practice"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                練習問題
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{problem.title}</li>
          </ol>
        </nav>

        {/* 問題ヘッダー */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
                {problem.title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {problem.description}
              </p>
            </div>
            <span
              className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold tracking-wide ${
                difficultyColors[problem.difficulty]
              }`}
            >
              {difficultyLabels[problem.difficulty]}
            </span>
          </div>
        </div>

        {/* 問題コード */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            📝 問題
          </h2>
          <CopyableCodeBlock code={problem.challengeCode} />
        </div>

        {/* 解答セクション */}
        <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-8 shadow-sm dark:border-green-800 dark:bg-green-900/20">
          <h2 className="mb-4 text-xl font-bold text-green-900 dark:text-green-100">
            ✅ 解答
          </h2>
          <CopyableCodeBlock code={problem.solutionCode} />
          {problem.explanation && (
            <div className="mt-6 rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
              <p className="text-sm leading-relaxed text-green-800 dark:text-green-200">
                <span className="font-semibold">💡 解説:</span> {problem.explanation}
              </p>
            </div>
          )}
        </div>

        {/* 問題1専用の詳細解説（JSXで見出しと段落を表示） */}
        {problemId === 1 && (
          <>
            {/* JSXの基本構造図 */}
            <JsxHeadingParagraphDiagram />

            {/* JSXとHTMLの比較図 */}
            <JsxHtmlComparisonDiagram />

            {/* 複数の要素をdivで囲む理由 */}
            <JsxMultipleElementsDiagram />

            {/* 詳しい解説セクション */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                📚 詳細解説
              </h2>

              <div className="space-y-6">
                {/* ステップ1 */}
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
                  <h3 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-100">
                    ステップ1: コンポーネントの定義
                  </h3>
                  <div className="mb-3 rounded bg-white p-3 dark:bg-gray-900">
                    <code className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre">
{`const Welcome = () => {`}
                    </code>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>const Welcome:</strong> コンポーネント名を定義します。Reactでは、コンポーネント名は大文字で始まる必要があります。Welcomeは「ようこそ」という意味で、このコンポーネントの役割を表しています。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{`() =>`}:</strong> アロー関数の構文です。パラメータがないので空の括弧 () を使用します。これは「引数なしの関数」を意味します。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{"{"}:</strong> 関数の本体の開始です。ここにコンポーネントが何を表示するかを書きます。</span>
                    </li>
                  </ul>
                </div>

                {/* ステップ2 */}
                <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
                  <h3 className="mb-3 text-lg font-semibold text-green-900 dark:text-green-100">
                    ステップ2: return文でJSXを返す
                  </h3>
                  <div className="mb-3 rounded bg-white p-3 dark:bg-gray-900">
                    <code className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre">
{`return (
  <div>
    <h1>こんにちは</h1>
    <p>Reactを学習中です</p>
  </div>
);`}
                    </code>
                  </div>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>return:</strong> 関数が何を返すかを指定します。Reactコンポーネントは必ず何かを返す必要があります。これがないと、画面に何も表示されません。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{`<div>`}:</strong> 複数の要素（h1とp）を1つにまとめるためのコンテナです。JSXでは、複数の要素を返す場合は必ず1つの親要素で囲む必要があります。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{`<h1>こんにちは</h1>`}:</strong> 見出しを表すJSX要素です。h1は「heading 1」の略で、最も重要な見出しを表します。ブラウザでは大きく太字で表示されます。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{`<p>Reactを学習中です</p>`}:</strong> 段落を表すJSX要素です。pは「paragraph」の略で、通常のテキスト段落を表します。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{`</div>`}:</strong> div要素の終了タグです。開始タグと終了タグを必ずペアで書く必要があります。</span>
                    </li>
                  </ul>
                </div>

                {/* ステップ3 */}
                <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
                  <h3 className="mb-3 text-lg font-semibold text-purple-900 dark:text-purple-100">
                    ステップ3: 関数の終了
                  </h3>
                  <div className="mb-3 rounded bg-white p-3 dark:bg-gray-900">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      {"};"}
                    </code>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span><strong>{"};"}:</strong> アロー関数の定義を終了します。セミコロン（;）で文を終了します。これでコンポーネントの定義が完了です。</span>
                    </li>
                  </ul>
                </div>

                {/* 重要なポイント */}
                <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
                  <h3 className="mb-4 text-lg font-semibold text-orange-900 dark:text-orange-100">
                    🔑 重要なポイント
                  </h3>
                  <div className="space-y-3 text-sm text-orange-800 dark:text-orange-200">
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1">1. h1タグとpタグの違い</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>h1</strong>は見出し（heading）で、ページのタイトルなど重要な見出しに使います。ブラウザでは大きく太字で表示されます。<strong>p</strong>は段落（paragraph）で、通常のテキストに使います。
                      </p>
                    </div>
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1">2. 複数の要素はdivで囲む</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        JSXでは、複数の要素（h1とp）を返す場合は、必ず1つの親要素（この場合はdiv）で囲む必要があります。これがないとエラーになります。
                      </p>
                    </div>
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1">3. JSXはHTMLに似ている</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        JSXの書き方はHTMLと非常によく似ています。{`<h1>`}や{`<p>`}などのタグは、HTMLと同じように使えます。違いは、JSXがJavaScriptの中に書けることです。
                      </p>
                    </div>
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1">4. タグは必ず閉じる</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        JSXでは、開始タグ（{`<h1>`}）と終了タグ（{`</h1>`}）を必ずペアで書く必要があります。閉じ忘れるとエラーになります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 使用例 */}
                <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
                  <h3 className="mb-4 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    💻 使用例
                  </h3>
                  <div className="mb-3 rounded bg-white p-3 dark:bg-gray-900">
                    <code className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre">
{`// App.js や他のコンポーネントで使用
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}`}
                    </code>
                  </div>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    このように、Welcomeコンポーネントを何度でも呼び出すことができ、それぞれが独立した見出しと段落として表示されます。
                  </p>
                </div>

                {/* よくある間違い */}
                <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
                  <h3 className="mb-4 text-lg font-semibold text-red-900 dark:text-red-100">
                    ⚠️ よくある間違い
                  </h3>
                  <div className="space-y-3 text-sm text-red-800 dark:text-red-200">
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1 text-red-600 dark:text-red-400">❌ 間違い1: divで囲まない</p>
                      <code className="text-xs text-red-800 dark:text-red-200 whitespace-pre block mt-1">
{`return (
  <h1>こんにちは</h1>
  <p>Reactを学習中です</p>
);`}
                      </code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        エラー: 複数の要素を返すことはできません
                      </p>
                    </div>
                    <div className="rounded bg-white p-3 dark:bg-gray-900">
                      <p className="font-semibold mb-1 text-green-600 dark:text-green-400">✅ 正しい: divで囲む</p>
                      <code className="text-xs text-green-800 dark:text-green-200 whitespace-pre block mt-1">
{`return (
  <div>
    <h1>こんにちは</h1>
    <p>Reactを学習中です</p>
  </div>
);`}
                      </code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        成功: divで囲むことで1つの要素として扱われます
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ナビゲーション */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {prevProblem ? (
            <Link
              href={`/practice/${prevProblem.id}`}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
              <span className="hidden sm:inline">前の問題</span>
              <span className="sm:hidden">前</span>
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            href="/#practice"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            問題一覧に戻る
          </Link>

          {nextProblem ? (
            <Link
              href={`/practice/${nextProblem.id}`}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="hidden sm:inline">次の問題</span>
              <span className="sm:hidden">次</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

