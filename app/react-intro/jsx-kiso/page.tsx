"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import EditableCodeBlock from "@/app/components/EditableCodeBlock";

export default function JsxKisoPage() {
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
              JSXの基礎
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 3
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            推定学習時間: 20分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              JSX（JavaScript XML）は、Reactで使われる特殊な記法です。HTMLによく似ていますが、JavaScriptの中で直接HTMLのようなコードを書くことができます。このレッスンでは、プログラミング初心者の方にもわかりやすく、JSXの基本的な書き方とルールを説明します。
            </p>
          </section>

          {/* What is JSX */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              JSXとは何か
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                JSXは、JavaScriptの拡張構文で、HTMLのように見えるコードをJavaScriptの中に書くことができます。これにより、Webページの見た目を直感的にコードで表現できます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  💡 JSXの読み方
                </p>
                <p className="text-sm">
                  JSXは「ジェイエスエックス」と読みます。JavaScript XMLの略称ですが、XMLよりもHTMLに近い記法です。
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  📝 簡単な例
                </p>
                <CopyableCodeBlock code='const element = <h1>こんにちは、世界！</h1>;' />
                <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                  これはJSXの最も簡単な例です。HTMLのように見えますが、実際にはJavaScriptのコードです。
                </p>
              </div>

              {/* 例題セクション */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  📚 例題
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  以下の例題に挑戦して、JSXの基本を理解しましょう。各例題のコードを実際に書いて、どのように表示されるか確認してください。
                </p>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題1: 自己紹介のJSX
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      あなたの名前を表示するJSX要素を作成してください。h2タグを使って「こんにちは、[あなたの名前]です」と表示するコードを書いてみましょう。
                    </p>
                    <EditableCodeBlock code='const introduction = <h2>こんにちは、山田太郎です</h2>;' placeholder="<h2>こんにちは、[あなたの名前]です</h2>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題2: パラグラフタグのJSX
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      好きな言葉やメッセージをpタグ（段落）で表示するJSX要素を作成してください。「Reactを学んでいます」というメッセージを表示してみましょう。
                    </p>
                    <EditableCodeBlock code='const message = <p>Reactを学んでいます</p>;' placeholder="<p>Reactを学んでいます</p>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題3: 複数の要素
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      divタグを使って、h1タグとpタグを1つの要素にまとめてください。タイトルと説明文を含むJSXを作成しましょう。
                    </p>
                    <EditableCodeBlock code={`const content = (\n  <div>\n    <h1>React学習</h1>\n    <p>JSXの基礎を学んでいます</p>\n  </div>\n);`} placeholder="<div>\n  <h1>タイトル</h1>\n  <p>説明文</p>\n</div>" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Basic JSX Syntax */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              JSXの基本的な書き方
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                JSXはHTMLとよく似ていますが、いくつか重要な違いがあります。まずは、基本的な書き方を見ていきましょう。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  ✅ 基本的な例
                </p>
                <CopyableCodeBlock code={`const Greeting = () => {\n  return <h1>こんにちは！</h1>;\n}`} className="mb-3" />
                <p className="text-sm">
                  このコードは、&quot;こんにちは！&quot;という文字列を表示するh1タグを返します。
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ※ 関数の中でJSXを返す場合、returnキーワードの後にJSXを書きます。
              </p>

              {/* 例題セクション */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  📚 例題
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  以下の例題で、関数コンポーネントとJSXの基本的な書き方を練習しましょう。
                </p>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題1: 挨拶コンポーネント
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      「おはようございます」と表示するGreetingコンポーネントを作成してください。
                    </p>
                    <EditableCodeBlock code={`const Greeting = () => {\n  return <h1>おはようございます</h1>;\n}`} placeholder="<h1>おはようございます</h1>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題2: 説明コンポーネント
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      pタグを使って「今日は良い天気です」という説明文を返すDescriptionコンポーネントを作成してください。
                    </p>
                    <EditableCodeBlock code={`const Description = () => {\n  return <p>今日は良い天気です</p>;\n}`} placeholder="<p>今日は良い天気です</p>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題3: カードコンポーネント
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      divタグの中にh2タグとpタグを含むCardコンポーネントを作成してください。タイトルと本文を表示する構造にしましょう。
                    </p>
                    <EditableCodeBlock code={`const Card = () => {\n  return (\n    <div>\n      <h2>カードタイトル</h2>\n      <p>カードの内容です</p>\n    </div>\n  );\n}`} placeholder="<div>\n  <h2>カードタイトル</h2>\n  <p>カードの内容です</p>\n</div>" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* JSX Rules */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              JSXの重要なルール
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ルール1: 1つの要素を返す
                </h3>
                <p className="mb-3 text-sm">
                  JSXは必ず1つの親要素で囲む必要があります。複数の要素を返したい場合は、&lt;div&gt;や&lt;&gt;（フラグメント）で囲みます。
                </p>
                <CopyableCodeBlock code={`return (\n  <h1>タイトル</h1>\n  <p>説明</p>\n);`} className="mb-2" />
                <CopyableCodeBlock code={`return (\n  <div>\n    <h1>タイトル</h1>\n    <p>説明</p>\n  </div>\n);`} />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ルール2: classNameを使う
                </h3>
                <p className="mb-3 text-sm">
                  HTMLではclass属性を使いますが、JSXではclassNameを使います（classはJavaScriptの予約語のため）。
                </p>
                <CopyableCodeBlock code='<div class="container">...</div>' className="mb-2" />
                <CopyableCodeBlock code='<div className="container">...</div>' />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ルール3: 閉じタグが必要
                </h3>
                <p className="mb-3 text-sm">
                  JSXでは、すべてのタグを閉じる必要があります。&lt;br&gt;や&lt;img&gt;のような自己終了タグも、&lt;br /&gt;や&lt;img /&gt;のように書きます。
                </p>
                <CopyableCodeBlock code={`<br>\n<img src="image.jpg">`} className="mb-2" />
                <CopyableCodeBlock code={`<br />\n<img src="image.jpg" />`} />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ルール4: 属性名はキャメルケース
                </h3>
                <p className="mb-3 text-sm">
                  HTML属性の一部は、JSXではキャメルケース（単語の最初を大文字にする）で書きます。例: tabindex → tabIndex, onclick → onClick
                </p>
                <CopyableCodeBlock code='<div tabindex="0">...</div>' className="mb-2" />
                <CopyableCodeBlock code='<div tabIndex="0">...</div>' />
              </div>
            </div>
          </section>

          {/* Embedding Expressions */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              変数や式の埋め込み
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                JSXの中では、中括弧 {`{ }`} を使って、JavaScriptの変数や式を埋め込むことができます。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 変数を埋め込む
                </p>
                <CopyableCodeBlock code={`const Welcome = () => {\n  const name = "太郎";\n  return <h1>こんにちは、{name}さん！</h1>;\n}`} className="mb-3" />
                <p className="text-sm">
                  このコードは、&quot;こんにちは、太郎さん！&quot;と表示します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 式を埋め込む
                </p>
                <CopyableCodeBlock code={`const Calculation = () => {\n  const a = 5;\n  const b = 3;\n  return <p>{a} + {b} = {a + b}</p>;\n}`} className="mb-3" />
                <p className="text-sm">
                  このコードは、&quot;5 + 3 = 8&quot;と表示します。
                </p>
              </div>

              {/* 例題セクション */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  📚 例題
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  変数や式をJSXに埋め込む練習をしましょう。中括弧 {`{ }`} を使って、動的な値を表示してみてください。
                </p>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題1: 年齢の表示
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      年齢を変数として定義し、「私は[年齢]歳です」と表示するコンポーネントを作成してください。年齢は20として定義しましょう。
                    </p>
                    <EditableCodeBlock code={`const AgeDisplay = () => {\n  const age = 20;\n  return <p>私は{age}歳です</p>;\n}`} placeholder="<p>私は{age}歳です</p>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題2: 計算結果の表示
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      2つの数値（10と5）を定義し、その掛け算の結果を表示するコンポーネントを作成してください。「10 × 5 = 50」のように表示しましょう。
                    </p>
                    <EditableCodeBlock code={`const Multiplication = () => {\n  const num1 = 10;\n  const num2 = 5;\n  return <p>{num1} × {num2} = {num1 * num2}</p>;\n}`} placeholder="<p>{num1} × {num2} = {num1 * num2}</p>;" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題3: 文字列の連結
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      姓と名を別々の変数として定義し、フルネームを表示するコンポーネントを作成してください。姓は「山田」、名は「花子」としましょう。
                    </p>
                    <EditableCodeBlock code={`const FullName = () => {\n  const lastName = "山田";\n  const firstName = "花子";\n  return <h2>{lastName}{firstName}</h2>;\n}`} placeholder="<h2>{lastName}{firstName}</h2>;" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conditional Rendering */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              条件分岐（条件によって表示を変える）
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                JSXでは、条件によって表示内容を変えることができます。いくつかの方法があります。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 三項演算子を使う
                </p>
                <CopyableCodeBlock code={`const Greeting = () => {\n  const isLoggedIn = true;\n  return (\n    <div>\n      {isLoggedIn ? <h1>ようこそ！</h1> : <h1>ログインしてください</h1>}\n    </div>\n  );\n}`} className="mb-3" />
                <p className="text-sm">
                  isLoggedInがtrueの場合は「ようこそ！」、falseの場合は「ログインしてください」と表示します。
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 &&演算子を使う
                </p>
                <CopyableCodeBlock code={`const Message = () => {\n  const hasMessage = true;\n  return (\n    <div>\n      {hasMessage && <p>メッセージがあります</p>}\n    </div>\n  );\n}`} className="mb-3" />
                <p className="text-sm">
                  hasMessageがtrueの場合のみ、&lt;p&gt;タグの内容が表示されます。
                </p>
              </div>

              {/* 例題セクション */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  📚 例題
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  条件分岐を使って、条件に応じて異なる内容を表示するコンポーネントを作成してみましょう。
                </p>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題1: 時間帯による挨拶
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      時間帯（午前か午後か）を判定し、午前なら「おはようございます」、午後なら「こんにちは」と表示するコンポーネントを作成してください。isMorningという変数を使ってみましょう。
                    </p>
                    <EditableCodeBlock code={`const TimeGreeting = () => {\n  const isMorning = true;\n  return (\n    <div>\n      {isMorning ? <h1>おはようございます</h1> : <h1>こんにちは</h1>}\n    </div>\n  );\n}`} placeholder="<div>\n  {isMorning ? <h1>おはようございます</h1> : <h1>こんにちは</h1>}\n</div>" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題2: エラーメッセージの表示
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      hasErrorという変数がtrueの場合のみ、「エラーが発生しました」というメッセージを表示するコンポーネントを作成してください。&&演算子を使いましょう。
                    </p>
                    <EditableCodeBlock code={`const ErrorMessage = () => {\n  const hasError = true;\n  return (\n    <div>\n      {hasError && <p className="text-red-500">エラーが発生しました</p>}\n    </div>\n  );\n}`} placeholder='<div>\n  {hasError && <p className="text-red-500">エラーが発生しました</p>}\n</div>' />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題3: 点数に応じた評価
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      点数（score）が80以上なら「優秀」、60以上なら「合格」、それ以外なら「不合格」と表示するコンポーネントを作成してください。ネストした三項演算子を使ってみましょう。
                    </p>
                    <EditableCodeBlock code={`const ScoreEvaluation = () => {\n  const score = 85;\n  return (\n    <div>\n      <p>点数: {score}点</p>\n      <p>\n        評価: {score >= 80 ? '優秀' : score >= 60 ? '合格' : '不合格'}\n      </p>\n    </div>\n  );\n}`} placeholder="<div>\n  <p>点数: {score}点</p>\n  <p>評価: {score >= 80 ? '優秀' : score >= 60 ? '合格' : '不合格'}</p>\n</div>" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lists */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              リストの表示
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                配列のデータをリストとして表示する場合、mapメソッドを使います。各要素には、keyという属性を付ける必要があります。
              </p>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 配列をリストとして表示
                </p>
                <CopyableCodeBlock code={`const FruitList = () => {\n  const fruits = ["りんご", "バナナ", "オレンジ"];\n  return (\n    <ul>\n      {fruits.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}`} className="mb-3" />
                <p className="text-sm">
                  このコードは、果物のリストを表示します。key属性は、Reactが要素を識別するために必要です。
                </p>
              </div>
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ key属性について
                </p>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  key属性は、リストの各要素に一意の値を設定する必要があります。配列のインデックスを使うこともできますが、データにidがある場合は、それを使う方が推奨されます。
                </p>
              </div>

              {/* 例題セクション */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  📚 例題
                </h3>
                <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                  配列データをリストとして表示する練習をしましょう。mapメソッドとkey属性の使い方をマスターしてください。
                </p>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題1: 商品リスト
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      「パン」「牛乳」「卵」という商品名の配列を作成し、それらをリストとして表示するコンポーネントを作成してください。
                    </p>
                    <EditableCodeBlock code={`const ProductList = () => {\n  const products = ["パン", "牛乳", "卵"];\n  return (\n    <ul>\n      {products.map((product, index) => (\n        <li key={index}>{product}</li>\n      ))}\n    </ul>\n  );\n}`} placeholder="<ul>\n  {products.map((product, index) => (\n    <li key={index}>{product}</li>\n  ))}\n</ul>" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題2: 番号付きリスト
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      「第1章」「第2章」「第3章」というタイトルの配列を作成し、番号と一緒に表示するコンポーネントを作成してください。各項目に番号も表示しましょう。
                    </p>
                    <EditableCodeBlock code={`const ChapterList = () => {\n  const chapters = ["第1章", "第2章", "第3章"];\n  return (\n    <ol>\n      {chapters.map((chapter, index) => (\n        <li key={index}>{chapter}: JSXの基礎</li>\n      ))}\n    </ol>\n  );\n}`} placeholder="<ol>\n  {chapters.map((chapter, index) => (\n    <li key={index}>{chapter}: JSXの基礎</li>\n  ))}\n</ol>" />
                  </div>

                  <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      例題3: カードリスト
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      「React」「Vue」「Angular」というフレームワーク名の配列を作成し、それぞれをdivタグで囲んでカードのように表示するコンポーネントを作成してください。
                    </p>
                    <EditableCodeBlock code={`const FrameworkList = () => {\n  const frameworks = ["React", "Vue", "Angular"];\n  return (\n    <div>\n      {frameworks.map((framework, index) => (\n        <div key={index} className="card">\n          <h3>{framework}</h3>\n        </div>\n      ))}\n    </div>\n  );\n}`} placeholder='<div>\n  {frameworks.map((framework, index) => (\n    <div key={index} className="card">\n      <h3>{framework}</h3>\n    </div>\n  ))}\n</div>' />
                  </div>
                </div>
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
                このレッスンでは、JSXの基礎を学びました。
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>JSXは、JavaScriptの中にHTMLのようなコードを書くための記法です</li>
                <li>JSXは1つの親要素で囲む必要があります</li>
                <li>class属性の代わりにclassNameを使います</li>
                <li>すべてのタグを閉じる必要があります</li>
                <li>中括弧 {`{ }`} を使って、変数や式を埋め込めます</li>
                <li>条件分岐やリスト表示もJSXで書けます</li>
              </ul>
              <p>
                JSXの基本を理解したら、次のレッスンでコンポーネントの作成方法を学びましょう！
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/kankyo-kouchiku"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: 環境構築
            </Link>
            <Link
              href="/react-intro"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <div></div>
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

