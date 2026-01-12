"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function KankyoKouchikuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
              環境構築
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 2
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 15分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Reactを学習するためには、まず開発環境を整える必要があります。このレッスンでは、プログラミング初心者の方にもわかりやすく、Reactの開発環境のセットアップ方法を説明します。
            </p>
          </section>

          {/* Prerequisites */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              必要なもの
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactの開発環境を構築するために、以下のツールが必要です：
              </p>
              <ul className="ml-6 space-y-3 list-disc">
                <li>
                  <strong className="text-gray-900 dark:text-white">Node.js</strong>
                  <br />
                  JavaScriptを実行するための環境です。Reactアプリケーションの開発に必要です。
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">テキストエディタ</strong>
                  <br />
                  コードを書くためのソフトウェアです。Visual Studio Code（VS Code）がおすすめです。
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Webブラウザ</strong>
                  <br />
                  Chrome、Firefox、Edgeなどの最新のブラウザがあれば問題ありません。
                </li>
              </ul>
            </div>
          </section>

          {/* Node.js Installation */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Step 1: Node.jsのインストール
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Node.jsは、JavaScriptをサーバー側で実行できるようにするツールです。Reactの開発にも必要です。
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  📥 インストール手順
                </p>
                <ol className="ml-4 space-y-2 list-decimal">
                  <li>
                    <a
                      href="https://nodejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Node.jsの公式サイト
                    </a>
                    にアクセスします
                  </li>
                  <li>「LTS」と書かれたバージョンをダウンロードします（LTSは安定版を意味します）</li>
                  <li>ダウンロードしたファイルを実行して、インストールします</li>
                  <li>インストール中は、デフォルトの設定のままで問題ありません</li>
                  <li>インストールが完了したら、パソコンを再起動します</li>
                </ol>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ✅ インストール確認
                </p>
                <p className="mb-2">
                  ターミナル（Mac）またはコマンドプロンプト（Windows）を開いて、以下のコマンドを入力します：
                </p>
                <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
                  <code>node --version</code>
                </div>
                <p className="mt-2 text-sm">
                  バージョン番号が表示されれば、インストールは成功です（例: v20.11.0）。
                </p>
              </div>
            </div>
          </section>

          {/* Text Editor */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Step 2: テキストエディタの準備
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                コードを書くためのテキストエディタを準備します。おすすめはVisual Studio Code（VS Code）です。
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  📝 Visual Studio Codeのインストール
                </p>
                <ol className="ml-4 space-y-2 list-decimal">
                  <li>
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      VS Codeの公式サイト
                    </a>
                    にアクセスします
                  </li>
                  <li>自分のOS（Windows/Mac/Linux）に合わせてダウンロードします</li>
                  <li>ダウンロードしたファイルを実行して、インストールします</li>
                  <li>インストール後、VS Codeを起動します</li>
                </ol>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ※ VS Codeは無料で使えます。他のエディタ（Sublime Text、Atomなど）を使っても問題ありませんが、VS Codeは初心者にも使いやすく、多くの拡張機能が利用できます。
              </p>
            </div>
          </section>

          {/* Create React App */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Step 3: Reactプロジェクトの作成
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactの開発を始めるには、プロジェクトを作成する必要があります。Create React Appというツールを使うと、簡単にReactプロジェクトを作成できます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  🚀 プロジェクトの作成手順
                </p>
                <p className="mb-3">
                  ターミナルまたはコマンドプロンプトで、プロジェクトを作成したいフォルダに移動して、以下のコマンドを実行します：
                </p>
                <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800 mb-3">
                  <code>npx create-react-app my-app</code>
                </div>
                <p className="mb-3 text-sm">
                  <strong>注意:</strong> 「my-app」はプロジェクト名です。好きな名前に変更できます（日本語やスペースは使わないようにしてください）。
                </p>
                <p className="text-sm">
                  このコマンドを実行すると、必要なファイルが自動的にダウンロードされ、プロジェクトが作成されます。数分かかる場合があります。
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  💡 npxとは？
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  npxは、Node.jsと一緒にインストールされるツールです。create-react-appをダウンロードせずに、直接実行できます。
                </p>
              </div>
            </div>
          </section>

          {/* Start Development Server */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Step 4: 開発サーバーの起動
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                プロジェクトが作成できたら、開発サーバーを起動して、Reactアプリケーションをブラウザで確認できます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ▶️ サーバーの起動方法
                </p>
                <p className="mb-3">
                  ターミナルまたはコマンドプロンプトで、プロジェクトフォルダに移動して、以下のコマンドを実行します：
                </p>
                <div className="space-y-2">
                  <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
                    <code>cd my-app</code>
                  </div>
                  <div className="rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100 dark:bg-gray-800">
                    <code>npm start</code>
                  </div>
                </div>
                <p className="mt-3 text-sm">
                  コマンドを実行すると、自動的にブラウザが開き、http://localhost:3000 でReactアプリケーションが表示されます。
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ 成功の確認
                </p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  ブラウザにReactのロゴが回転する画面が表示されれば、環境構築は成功です！
                </p>
              </div>
            </div>
          </section>

          {/* Project Structure */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              プロジェクトの構造（簡単な説明）
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                作成されたプロジェクトには、いくつかのファイルとフォルダが含まれています。最初のうちは、以下のファイルを理解しておけば十分です：
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900 dark:text-white">src/App.js</strong>
                    <br />
                    <span className="text-sm">メインのコンポーネントファイルです。ここにコードを書いていきます。</span>
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">src/index.js</strong>
                    <br />
                    <span className="text-sm">Reactアプリケーションのエントリーポイント（起点）です。通常は変更しません。</span>
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">public/index.html</strong>
                    <br />
                    <span className="text-sm">HTMLファイルです。ReactアプリケーションがこのHTMLに表示されます。</span>
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">package.json</strong>
                    <br />
                    <span className="text-sm">プロジェクトの設定ファイルです。使用しているライブラリの情報が記載されています。</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ※ その他のファイルやフォルダについては、必要に応じて学習を進めながら理解していけば問題ありません。
              </p>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              よくある問題と解決方法
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ❌ 「node コマンドが見つかりません」
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Node.jsが正しくインストールされていない可能性があります。Node.jsを再インストールし、パソコンを再起動してみてください。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ❌ 「create-react-app コマンドが実行できない」
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  インターネット接続を確認してください。また、管理者権限でターミナル/コマンドプロンプトを実行してみてください。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ❌ 「ポート3000が既に使用されています」
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  別のReactアプリケーションが既に起動している可能性があります。他のターミナルウィンドウで実行中のアプリを停止するか、ブラウザで http://localhost:3000 にアクセスして確認してください。
                </p>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                このレッスンでは、Reactの開発環境を構築する方法を学びました。
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Node.jsをインストールしました</li>
                <li>テキストエディタ（VS Code）を準備しました</li>
                <li>Create React Appを使ってプロジェクトを作成しました</li>
                <li>開発サーバーを起動して、Reactアプリケーションを確認しました</li>
              </ul>
              <p>
                環境構築が完了したら、次のレッスンで実際にReactのコードを書いていきましょう！
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/react-toha"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← 前のレッスン: Reactとは
            </Link>
            <Link
              href="/react-intro"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              レッスン一覧に戻る
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


