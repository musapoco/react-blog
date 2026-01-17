"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import InteractiveButtonClick from "@/app/components/InteractiveButtonClick";
import InteractiveInputChange from "@/app/components/InteractiveInputChange";
import InteractiveFormSubmit from "@/app/components/InteractiveFormSubmit";
import InteractiveToggleSwitch from "@/app/components/InteractiveToggleSwitch";
import EventHandlingDiagram from "@/app/components/EventHandlingDiagram";
import EventObjectDiagram from "@/app/components/EventObjectDiagram";
import EventFlowSimpleDiagram from "@/app/components/EventFlowSimpleDiagram";
import SimpleEventObjectBox from "@/app/components/SimpleEventObjectBox";
import EventTargetDiagram from "@/app/components/EventTargetDiagram";
import InteractiveExampleCounter from "@/app/components/InteractiveExampleCounter";
import InteractiveExampleTextInput from "@/app/components/InteractiveExampleTextInput";
import InteractiveExampleToggle from "@/app/components/InteractiveExampleToggle";

export default function IbentoHandoringPage() {
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
              イベントハンドリング
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 6
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
          {/* イベントハンドリングとは */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              イベントハンドリングとは
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                イベントハンドリングとは、ユーザーの操作（クリック、入力など）に応じて、プログラムの処理を実行する仕組みです。
                Reactでは、これらのイベントを「イベントハンドラー」という関数で処理します。
              </p>

              {/* イベントハンドリングの流れ図解 */}
              <EventHandlingDiagram />

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                  💡 身近な例えで理解しよう
                </p>
                <div className="space-y-3 text-purple-800 dark:text-purple-200 text-sm">
                  <div>
                    <strong>🚪 ドアのベル:</strong> ボタンを押す（ユーザーの操作）→ ベルが鳴る（イベント発生）→ 
                    誰かが出てくる（イベントハンドラー実行）→ ドアが開く（UI更新）
                  </div>
                  <div>
                    <strong>🎮 ゲームのコントローラー:</strong> ボタンを押す（操作）→ コマンドが送られる（イベント）→ 
                    キャラクターが動く（処理実行）→ 画面が変わる（表示更新）
                  </div>
                  <div>
                    <strong>📱 スマホの通知:</strong> メッセージが届く（イベント発生）→ 通知音が鳴る（ハンドラー実行）→ 
                    画面に表示される（UI更新）
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  📝 イベントハンドリングの特徴
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>ユーザーとの対話:</strong> クリック、入力、ホバーなどの操作に反応します
                  </li>
                  <li>
                    <strong>即座の反応:</strong> イベントが発生すると、すぐに関数が実行されます
                  </li>
                  <li>
                    <strong>状態の変更:</strong> イベントハンドラー内で状態を変更すると、UIが自動的に更新されます
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* onClickイベント */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              onClickイベント（クリックイベント）
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                ボタンをクリックしたときに処理を実行したい場合は、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">onClick</code>イベントハンドラーを使用します。
              </p>

              {/* useStateについての補足説明 */}
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                <p className="font-medium text-purple-900 dark:text-purple-100 mb-3">
                  💡 このレッスンで使うuseStateについて
                </p>
                <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <p>
                    このレッスンでは、イベントハンドリングの説明のために<code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">useState</code>を使用しています。
                  </p>
                  <p>
                    <code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">useState</code>は、コンポーネントの状態（データ）を保存し、変更するためのReactの機能（フック）です。
                  </p>
                  <div className="mt-3 rounded-lg border border-purple-300 bg-white p-3 dark:border-purple-700 dark:bg-gray-800">
                    <p className="text-xs font-semibold text-purple-900 dark:text-purple-100 mb-2">
                      📝 useStateの基本的な使い方
                    </p>
                    <pre className="text-xs text-purple-800 dark:text-purple-200 font-mono bg-purple-50 p-2 rounded dark:bg-purple-900/20 overflow-x-auto">
{`// useStateの基本的な書き方
const [値の名前, 値を変更する関数] = useState(初期値);

// 例：数値を保存する場合
const [count, setCount] = useState(0);

// 例：文字列を保存する場合
const [name, setName] = useState("");`}
                    </pre>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-purple-700 dark:text-purple-300">
                      <li><code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">useState</code>は2つの値を返します：現在の値と、その値を変更する関数</li>
                      <li>値を変更するには、返された関数（例：<code className="px-1 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50">setCount</code>）を使用します</li>
                      <li>値が変更されると、コンポーネントが自動的に再描画されます</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-100">
                    📚 <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">useState</code>の詳しい使い方、<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">useEffect</code>、カスタムフックなど、状態管理についての詳細は「<strong>状態管理</strong>」カテゴリで詳しく解説します。
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 onClickの基本的な使い方
                </p>
                <CopyableCodeBlock
                  code={`const Button = () => {\n  // クリック時に実行される関数を定義\n  const handleClick = () => {\n    alert("ボタンがクリックされました！");\n  };\n\n  return (\n    // onClick属性にイベントハンドラー関数を渡す（括弧は付けない）\n    <button onClick={handleClick}>\n      クリックしてください\n    </button>\n  );\n};`}
                  className="mb-3"
                />
                <p className="text-sm">
                  <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">onClick</code>
                  にイベントハンドラー関数を渡すことで、ボタンがクリックされたときにその関数が実行されます。
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-3">
                  💡 onClickイベントとは？
                </p>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  onClickイベントは、ボタンや要素をクリックしたときに実行されるイベントです。
                  ユーザーがクリックすると、指定した関数が自動的に呼び出されます。
                </p>
                
                {/* 例えの説明 */}
                <div className="mb-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                  <p className="text-xs font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    🎯 例えで理解しよう
                  </p>
                  <div className="text-xs text-yellow-800 dark:text-yellow-200 space-y-1">
                    <p>
                      <strong>🔘 ボタンを押す例:</strong> onClickは「エレベーターのボタンを押す」ようなものです。
                      ボタンを押すと、エレベーターが動き始めます（関数が実行されます）。
                    </p>
                    <p>
                      <strong>🚪 ドアベルを鳴らす例:</strong> onClickは「ドアベルを鳴らす」ようなものです。
                      ベルを鳴らすと、中から人が出てきます（関数が実行されます）。
                    </p>
                    <p>
                      <strong>📞 電話をかける例:</strong> onClickは「電話をかける」ようなものです。
                      電話をかけると、相手が電話に出ます（関数が実行されます）。
                    </p>
                  </div>
                </div>
                
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ ポイント
                </p>
                <ul className="list-disc pl-5 space-y-1 text-green-800 dark:text-green-200 text-sm">
                  <li>
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">onClick={"{"}handleClick{"}"}</code>
                    のように、関数名の後ろに括弧を付けない（<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">handleClick()</code>
                    と書くと、ページが読み込まれた瞬間に実行されてしまいます）
                  </li>
                  <li>
                    インラインで関数を書くことも可能: <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">onClick={"{"}() =&gt; alert("クリック！"){"}"}</code>
                  </li>
                </ul>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveButtonClick />
            </div>
          </section>

          {/* onChangeイベント */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              onChangeイベント（入力変更イベント）
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                入力フィールドの値が変更されたときに処理を実行したい場合は、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">onChange</code>イベントハンドラーを使用します。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 onChangeの基本的な使い方
                </p>
                <CopyableCodeBlock
                  code={`const InputField = () => {\n  // 入力値を保存するための状態を定義\n  const [value, setValue] = useState("");\n\n  // 入力値が変更されたときに実行される関数\n  // e: イベントオブジェクト（入力フィールドの情報を含む）\n  const handleChange = (e) => {\n    // e.target.valueで入力された値を取得して状態を更新\n    setValue(e.target.value);\n  };\n\n  return (\n    <input \n      type="text" \n      value={value} // 入力フィールドの値を状態と同期\n      onChange={handleChange} // 値が変更されたときにhandleChangeを実行\n      placeholder="入力してください" \n    />\n  );\n};`}
                  className="mb-3"
                />
                <p className="text-sm">
                  <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">onChange</code>
                  イベントハンドラーには、イベントオブジェクト（通常<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">e</code>と書く）が渡されます。
                  <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">e.target.value</code>
                  で入力された値を取得できます。
                </p>

                {/* インタラクティブデモ（実際の表示結果） */}
                <InteractiveInputChange />
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                  💡 イベントオブジェクトとは？
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  イベントオブジェクト（<code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50">e</code>）は、イベントに関する情報を含むオブジェクトです。
                  Reactが自動的に作成し、イベントハンドラー関数の引数として渡してくれます。
                </p>

                {/* 例えの説明 */}
                <div className="mt-4 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                  <p className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                    🎯 身近な例えで理解しよう
                  </p>
                  <div className="space-y-3 text-sm text-purple-800 dark:text-purple-200">
                    <div>
                      <strong>📦 宅配便の荷物:</strong> イベントオブジェクト（e）は「宅配便の荷物」のようなものです。
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                        <li>ユーザーが入力する = 荷物を発送する</li>
                        <li>Reactがeを作る = 配送センターが荷物を箱に入れる</li>
                        <li>eの中身 = 箱の中の荷物（情報）</li>
                        <li>関数にeが渡される = 配達員が荷物を届ける</li>
                        <li>e.target.valueを使う = 箱を開けて中身を取り出す</li>
                      </ul>
                    </div>
                    <div>
                      <strong>📮 手紙の例:</strong> イベントオブジェクト（e）は「手紙」のようなものです。
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                        <li>ユーザーが入力する = 手紙を書く</li>
                        <li>Reactがeを作る = 郵便局が手紙を封筒に入れる</li>
                        <li>eの中身 = 封筒の中の手紙（情報）</li>
                        <li>関数にeが渡される = 郵便配達員が手紙を届ける</li>
                        <li>e.target.valueを使う = 封筒を開けて手紙を読む</li>
                      </ul>
                    </div>
                    <div>
                      <strong>🎁 プレゼントの例:</strong> イベントオブジェクト（e）は「プレゼントボックス」のようなものです。
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                        <li>ユーザーが入力する = プレゼントを選ぶ</li>
                        <li>Reactがeを作る = プレゼントを箱に入れる</li>
                        <li>eの中身 = 箱の中のプレゼント（情報）</li>
                        <li>関数にeが渡される = プレゼントを渡す</li>
                        <li>e.target.valueを使う = 箱を開けてプレゼントを取り出す</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* シンプルなeの箱の図解 */}
                <SimpleEventObjectBox />

                {/* eの移動の流れ */}
                <EventFlowSimpleDiagram />
                
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">
                    📦 eの中身（主なプロパティ）:
                  </p>
                </div>

                {/* e.target, e.target.value, e.target.typeの図解 */}
                <EventTargetDiagram />

                <div className="mt-4 rounded-lg bg-white p-3 dark:bg-gray-800">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                    🎯 実際の使用例:
                  </p>
                  <pre className="text-xs text-gray-700 dark:text-gray-300 font-mono bg-gray-50 p-2 rounded dark:bg-gray-900 overflow-x-auto">
{`const handleChange = (e) => {
  console.log(e.target);        // <input type="text" ...>
  console.log(e.target.value);  // "入力された文字"
  console.log(e.target.type);   // "text"
  console.log(e.type);          // "change"
};`}
                  </pre>
                </div>
              </div>

              {/* イベントオブジェクトの図解 */}
              <EventObjectDiagram />
            </div>
          </section>

          {/* onSubmitイベント */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              onSubmitイベント（フォーム送信イベント）
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                フォームを送信したときに処理を実行したい場合は、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">onSubmit</code>イベントハンドラーを使用します。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 onSubmitの基本的な使い方
                </p>
                
                {/* 例えの説明 */}
                <div className="mb-4 rounded-lg border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-800 dark:bg-indigo-900/20">
                  <p className="text-xs font-medium text-indigo-900 dark:text-indigo-100 mb-2">
                    💡 例えで理解しよう
                  </p>
                  <div className="text-xs text-indigo-800 dark:text-indigo-200 space-y-1">
                    <p>
                      <strong>📮 手紙を送る例:</strong> onSubmitは「手紙をポストに入れる」ようなものです。
                      手紙を入れると、郵便局に送られて処理されます。
                    </p>
                    <p>
                      <strong>🎁 プレゼントを渡す例:</strong> onSubmitは「プレゼントを渡す」ようなものです。
                      プレゼントを渡すと、受け取った人が中身を確認します。
                    </p>
                  </div>
                </div>
                <CopyableCodeBlock
                  code={`const Form = () => {\n  // 名前を保存するための状態を定義\n  const [name, setName] = useState("");\n\n  // フォーム送信時に実行される関数\n  const handleSubmit = (e) => {\n    e.preventDefault(); // ページのリロードを防ぐ（重要！）\n    alert(\`こんにちは、\${name}さん！\`);\n  };\n\n  return (\n    // onSubmit属性にイベントハンドラー関数を渡す\n    <form onSubmit={handleSubmit}>\n      <input \n        type="text" \n        value={name} // 入力フィールドの値を状態と同期\n        // 入力が変更されたら状態を更新（インライン関数）\n        onChange={(e) => setName(e.target.value)} \n        placeholder="名前を入力" \n      />\n      <button type="submit">送信</button>\n    </form>\n  );\n};`}
                  className="mb-3"
                />
                <p className="text-sm mb-3">
                  <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">e.preventDefault()</code>
                  を呼び出すことで、フォーム送信時のページリロードを防ぐことができます。
                  これはReactアプリケーションでは重要な処理です。
                </p>
                
                {/* e.preventDefault()の例え */}
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                  <p className="text-xs font-medium text-red-900 dark:text-red-100 mb-2">
                    🛑 e.preventDefault()の例え
                  </p>
                  <div className="text-xs text-red-800 dark:text-red-200 space-y-1">
                    <p>
                      <strong>🚦 信号機の例:</strong> e.preventDefault()は「赤信号で止まる」ようなものです。
                      通常、フォームを送信するとページがリロードされますが、e.preventDefault()でそれを止めます。
                    </p>
                    <p>
                      <strong>🚪 ドアを閉める例:</strong> e.preventDefault()は「ドアを閉めて外に出ないようにする」ようなものです。
                      通常の動作（ページリロード）を防いで、自分で処理を制御します。
                    </p>
                    <p>
                      <strong>📦 宅配便の例:</strong> e.preventDefault()は「配送をキャンセルする」ようなものです。
                      通常は自動的に配送されますが、キャンセルして自分で処理します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                  ⚠️ 重要なポイント
                </p>
                <ul className="list-disc pl-5 space-y-1 text-orange-800 dark:text-orange-200 text-sm">
                  <li>
                    <code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">e.preventDefault()</code>
                    を忘れると、フォーム送信時にページがリロードされてしまいます
                  </li>
                  <li>
                    フォーム内のボタンには<code className="px-1 py-0.5 rounded bg-orange-100 dark:bg-orange-900/50">type="submit"</code>
                    を指定すると、Enterキーでも送信できます
                  </li>
                </ul>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveFormSubmit />
            </div>
          </section>

          {/* その他のイベント */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              その他のイベント
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Reactでは、他にも多くのイベントを処理できます。よく使われるイベントを紹介します。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 よく使われるイベント一覧
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onClick
                    </code>
                    <span className="ml-2">クリックされたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onChange
                    </code>
                    <span className="ml-2">入力値が変更されたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onSubmit
                    </code>
                    <span className="ml-2">フォームが送信されたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onFocus
                    </code>
                    <span className="ml-2">要素がフォーカスされたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onBlur
                    </code>
                    <span className="ml-2">要素からフォーカスが外れたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onMouseEnter
                    </code>
                    <span className="ml-2">マウスが要素の上に来たとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onMouseLeave
                    </code>
                    <span className="ml-2">マウスが要素から離れたとき</span>
                  </div>
                  <div>
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                      onKeyDown
                    </code>
                    <span className="ml-2">キーが押されたとき</span>
                  </div>
                </div>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveToggleSwitch />
            </div>
          </section>

          {/* 例題セクション */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20 mt-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              📚 例題
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-4">
              実際にイベントハンドリングを使ってコンポーネントを作成してみましょう。
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題1: クリックカウンター
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  ボタンをクリックするたびにカウントが増えるコンポーネントを作成してください。
                </p>
                <CopyableCodeBlock
                  code={`const Counter = () => {\n  // カウント数を保存する状態を定義（初期値は0）\n  const [count, setCount] = useState(0);\n\n  // クリック時にカウントを1増やす関数\n  const handleClick = () => {\n    setCount(count + 1); // countの値を1増やして状態を更新\n  };\n\n  return (\n    <div>\n      <p>カウント: {count}</p>\n      <button onClick={handleClick}>+1</button>\n    </div>\n  );\n};`}
                />
                <InteractiveExampleCounter />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題2: 入力フィールド
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  入力されたテキストをリアルタイムで表示するコンポーネントを作成してください。
                </p>
                <CopyableCodeBlock
                  code={`const TextInput = () => {\n  // 入力テキストを保存する状態を定義\n  const [text, setText] = useState("");\n\n  // 入力値が変更されたときに実行される関数\n  const handleChange = (e) => {\n    setText(e.target.value); // 入力値を状態に保存\n  };\n\n  return (\n    <div>\n      <input \n        type="text" \n        value={text} // 入力フィールドの値を状態と同期\n        onChange={handleChange} // 入力変更時にhandleChangeを実行\n        placeholder="入力してください" \n      />\n      <p>入力された値: {text}</p> {/* 状態の値をリアルタイムで表示 */}\n    </div>\n  );\n};`}
                />
                <InteractiveExampleTextInput />
              </div>

              <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  例題3: トグルスイッチ
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  クリックするたびにON/OFFが切り替わるスイッチコンポーネントを作成してください。
                </p>
                <CopyableCodeBlock
                  code={`const Toggle = () => {\n  // ON/OFFの状態を保存（初期値はfalse = OFF）\n  const [isOn, setIsOn] = useState(false);\n\n  // クリック時にON/OFFを切り替える関数\n  const handleToggle = () => {\n    setIsOn(!isOn); // 現在の状態を反転（!は否定演算子）\n  };\n\n  return (\n    <div>\n      {/* isOnがtrueなら"ON"、falseなら"OFF"を表示 */}\n      <button onClick={handleToggle}>\n        {isOn ? "ON" : "OFF"}\n      </button>\n      <p>状態: {isOn ? "オン" : "オフ"}</p>\n    </div>\n  );\n};`}
                />
                <InteractiveExampleToggle />
              </div>
            </div>
          </div>

          {/* まとめ */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 覚えておきたい3つのポイント
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <strong>イベントハンドラーは関数:</strong> <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">onClick={"{"}handleClick{"}"}</code>
                    のように、関数名を渡します（括弧は付けない）
                  </li>
                  <li>
                    <strong>イベントオブジェクトで値を取得:</strong> <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">e.target.value</code>
                    で入力値を取得できます
                  </li>
                  <li>
                    <strong>フォーム送信時はpreventDefault:</strong> <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">e.preventDefault()</code>
                    でページリロードを防ぎます
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>イベントハンドリング:</strong> ユーザーの操作に応じて処理を実行する仕組みです。
                </p>
                <p>
                  <strong>主なイベント:</strong> onClick（クリック）、onChange（入力変更）、onSubmit（フォーム送信）などがあります。
                </p>
                <p>
                  <strong>状態の更新:</strong> イベントハンドラー内で状態を更新すると、UIが自動的に更新されます。
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20 mt-4">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  💪 次のステップ
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  イベントハンドリングの基本的な使い方を理解できたら、実際にコードを書いて練習してみましょう。
                  例題に挑戦して、インタラクティブなコンポーネントを作成してみてください。
                  最初は難しく感じるかもしれませんが、繰り返し練習することで必ず理解できるようになります！
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/props-no-tsukaikata"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: propsの使い方
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
