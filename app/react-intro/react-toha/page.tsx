"use client";

import Link from "next/link";

export default function ReactToHAPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
                <span className="text-sm font-bold">R</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                React Learning
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                ログイン
              </button>
              <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                始める
              </button>
            </div>
          </div>
        </div>
      </nav>

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
              Reactとは
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 1
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 10分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Reactは、Facebook（現在のMeta）が開発した、Webサイトのユーザーインターフェース（画面）を作るためのJavaScriptライブラリです。このレッスンでは、プログラミング初心者の方にもわかりやすく、Reactとは何か、なぜ学ぶべきなのかを説明します。
            </p>
          </section>

          {/* What is React */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Reactとは何か
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactは、インタラクティブなWebサイトを作るためのツールです。Webサイトの画面部分（ボタンやメニュー、表示される内容など）を効率的に作成・管理できます。
              </p>
              <p>
                従来のWebサイト開発では、HTML、CSS、JavaScriptを別々に書く必要がありましたが、Reactを使うと、これらをまとめて「コンポーネント」という単位で管理できます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white">
                  💡 ライブラリとは
                </p>
                <p className="mt-2 text-sm">
                  ライブラリとは、よく使う機能をまとめたツール集のようなものです。Reactは、Webサイトの画面を作るための便利な機能を提供してくれます。
                </p>
              </div>
            </div>
          </section>

          {/* Why React */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              なぜReactを学ぶのか
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactを学ぶ理由はたくさんあります。特に初心者の方にとって、以下の点が大きなメリットになります：
              </p>
              <ul className="ml-6 space-y-3 list-disc">
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    人気が高く、学習リソースが豊富
                  </strong>
                  <br />
                  世界中の多くの開発者が使っているため、分からないことがあっても、インターネット上にたくさんの情報や解説があります。
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    就職・転職に有利
                  </strong>
                  <br />
                  多くの企業がReactを使っているため、Reactを学ぶことで、エンジニアとしてのキャリアの選択肢が広がります。
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    再利用可能なコードが書ける
                  </strong>
                  <br />
                  一度作ったコンポーネントを、別の場所でも使い回すことができるため、効率的に開発できます。
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    インタラクティブなWebサイトが作りやすい
                  </strong>
                  <br />
                  ボタンをクリックしたときの動作や、データの表示更新などを、比較的簡単に実装できます。
                </li>
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Reactの主な特徴
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  コンポーネント指向
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reactでは、画面を小さな部品（コンポーネント）に分けて作ります。例えば、ボタンやヘッダー、カードなどを独立したコンポーネントとして作ることができます。これにより、コードが整理しやすく、保守しやすくなります。
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  仮想DOM（Virtual DOM）
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reactは、画面の変更を効率的に行うために「仮想DOM」という仕組みを使っています。これにより、必要な部分だけを更新できるため、処理が速くなり、ユーザーにとって快適なWebサイトを作ることができます。
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  JSX
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reactでは、JSXという書き方を使います。JSXを使うと、HTMLのような見た目で、JavaScriptのコードを書くことができます。これにより、コードが読みやすく、理解しやすくなります。
                </p>
              </div>
            </div>
          </section>

          {/* What You Need */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              学習に必要な前提知識
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactを学ぶ前に、以下の基本的な知識があると理解が深まります：
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    HTML
                  </strong>
                  ：Webページの構造を表す言語
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">CSS</strong>
                  ：Webページの見た目を整える言語
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">
                    JavaScript（基礎）
                  </strong>
                  ：変数、関数、配列などの基本的な概念
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ※
                これらの知識が完璧でなくても、Reactの学習を始めることはできます。必要に応じて、基本を復習しながら進めていきましょう。
              </p>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Reactは、インタラクティブなWebサイトを作るための人気の高いJavaScriptライブラリです。
              </p>
              <p>
                コンポーネント指向のアプローチで、再利用可能で保守しやすいコードを書くことができます。
              </p>
              <p>
                多くの企業で使われているため、学習することで、エンジニアとしてのキャリアの選択肢が広がります。
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div></div>
            <Link
              href="/react-intro"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/react-intro/kankyo-kouchiku"
              className="justify-self-end rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 whitespace-nowrap"
            >
              次のレッスン: 環境構築 →
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
