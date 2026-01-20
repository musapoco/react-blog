"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import InteractiveExampleCounter from "@/app/components/InteractiveExampleCounter";
import InteractiveExampleTextInput from "@/app/components/InteractiveExampleTextInput";
import InteractiveAgeDisplay from "@/app/components/InteractiveAgeDisplay";
import UseStateFlowDiagram from "@/app/components/UseStateFlowDiagram";
import UseStateBoxDiagram from "@/app/components/UseStateBoxDiagram";
import UseStateUpdateDiagram from "@/app/components/UseStateUpdateDiagram";

export default function UseStatePage() {
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
              useStateの基礎
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 1
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            コンポーネントの状態を管理するuseStateフックの使い方を学びます
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            推定学習時間: 25分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* useStateとは */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              useStateとは
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>は、Reactコンポーネントの状態（データ）を保存し、変更するためのフック（機能）です。
              </p>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                  💡 状態（State）とは？
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  状態（State）とは、コンポーネントが持つ「変化するデータ」のことです。
                  例えば、ユーザーの入力値、クリック回数、ON/OFFの切り替えなどが状態に当たります。
                </p>
                
                {/* 例えの説明 */}
                <div className="mt-3 rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                  <p className="text-xs font-medium text-purple-900 dark:text-purple-100 mb-2">
                    🎯 例えで理解しよう
                  </p>
                  <div className="text-xs text-purple-800 dark:text-purple-200 space-y-1">
                    <p>
                      <strong>💾 メモ帳の例:</strong> useStateは「メモ帳」のようなものです。
                      情報を書き留めて（状態を保存）、後で見返したり書き直したり（状態を変更）できます。
                    </p>
                    <p>
                      <strong>📦 箱の例:</strong> useStateは「データを入れる箱」のようなものです。
                      箱に何かを入れて（状態を保存）、中身を取り出したり、別のものに入れ替えたり（状態を変更）できます。
                    </p>
                    <p>
                      <strong>🔄 変数の進化版:</strong> useStateは「普通の変数の進化版」です。
                      変数と違って、値が変わると画面が自動的に更新されます。
                    </p>
                  </div>
                </div>
              </div>

              {/* useStateの流れ図解 */}
              <UseStateFlowDiagram />

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ✅ useStateを使う理由
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>データの保存:</strong> ユーザーの入力や操作結果を保存できます
                  </li>
                  <li>
                    <strong>自動更新:</strong> 状態が変わると、コンポーネントが自動的に再描画されます
                  </li>
                  <li>
                    <strong>リアルタイム反映:</strong> 状態の変更が即座に画面に反映されます
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 基本的な使い方 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              基本的な使い方
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>の基本的な書き方を学びましょう。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 useStateの基本構文
                </p>
                <CopyableCodeBlock
                  code={`import { useState } from "react";

const MyComponent = () => {
  // useStateの基本的な書き方
  // const [状態の名前, 状態を変更する関数] = useState(初期値);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};`}
                  className="mb-3"
                />
                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    <strong>1. useStateのインポート:</strong> Reactから<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>をインポートします
                  </p>
                  <p>
                    <strong>2. 状態の定義:</strong> <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">const [count, setCount] = useState(0);</code>のように書きます
                  </p>
                  <p>
                    <strong>3. 状態の使用:</strong> <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">{`{count}`}</code>のように状態を表示に使います
                  </p>
                  <p>
                    <strong>4. 状態の更新:</strong> <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">setCount(count + 1)</code>のように関数を使って状態を更新します
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ ポイント
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">useState</code>は2つの値を返します：現在の値と、その値を変更する関数
                  </li>
                  <li>
                    状態を変更する関数名は通常、<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">set + 状態名</code>とします（例：count → setCount）
                  </li>
                  <li>
                    状態が変更されると、コンポーネントが自動的に再描画されます
                  </li>
                  <li>
                    直接状態を変更してはいけません（例：<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">count = count + 1</code>は❌）
                  </li>
                </ul>
              </div>

              {/* インタラクティブデモ */}
              <InteractiveExampleCounter />
            </div>
          </section>

          {/* 様々な型の状態 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              様々な型の状態
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>は、数値、文字列、真偽値、配列、オブジェクトなど、様々な型のデータを保存できます。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 数値型の状態
                </p>
                <CopyableCodeBlock
                  code={`const Counter = () => {
  // 数値型の状態（初期値は0）
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>増やす</button>
      <button onClick={() => setCount(count - 1)}>減らす</button>
    </div>
  );
};`}
                  className="mb-3"
                />
                <InteractiveExampleCounter />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 文字列型の状態
                </p>
                <CopyableCodeBlock
                  code={`const TextInput = () => {
  // 文字列型の状態（初期値は空文字列）
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="入力してください" 
      />
      <p>入力された値: {text}</p>
    </div>
  );
};`}
                  className="mb-3"
                />
                <InteractiveExampleTextInput />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 真偽値型の状態
                </p>
                <CopyableCodeBlock
                  code={`const Toggle = () => {
  // 真偽値型の状態（初期値はfalse）
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON" : "OFF"}
      </button>
      <p>状態: {isOn ? "オン" : "オフ"}</p>
    </div>
  );
};`}
                  className="mb-3"
                />
              </div>
            </div>
          </section>

          {/* 状態の更新方法 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              状態の更新方法
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                状態を更新するには、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>から返された関数を使用します。
              </p>

              {/* 状態更新の流れ図解 */}
              <UseStateUpdateDiagram />

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 直接値を設定する方法
                </p>
                <CopyableCodeBlock
                  code={`const [name, setName] = useState("");

// 新しい値を直接設定
setName("太郎");
setName("花子");`}
                  className="mb-3"
                />
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 現在の値を使って更新する方法
                </p>
                <CopyableCodeBlock
                  code={`const [count, setCount] = useState(0);

// 現在の値を使って更新
const increment = () => {
  setCount(count + 1); // countの現在の値に1を足す
};

const decrement = () => {
  setCount(count - 1); // countの現在の値から1を引く
};`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 関数を使って更新する場合は、現在の値を参照して新しい値を計算します。
                </p>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ 重要な注意点
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>
                    状態を直接変更してはいけません（例：<code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/50">count = count + 1</code>は❌）
                  </li>
                  <li>
                    必ず更新関数を使用してください（例：<code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/50">setCount(count + 1)</code>は✅）
                  </li>
                  <li>
                    状態の更新は非同期で行われます。更新直後に状態を参照しても、古い値が返される可能性があります。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 例題 */}
          <section className="mb-12">
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                📚 例題
              </h3>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                実際にuseStateを使ってコンポーネントを作成してみましょう。
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-green-300 bg-white p-4 dark:border-green-700 dark:bg-gray-900">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    例題: 年齢表示コンポーネント
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    年齢を状態として管理し、数値入力で変更できるコンポーネントを作成してください。
                  </p>
                  <CopyableCodeBlock
                    code={`const AgeDisplay = () => {
  // 年齢を状態として定義（初期値は20）
  const [age, setAge] = useState(20);

  return (
    <div>
      <label>
        年齢:
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(Number(e.target.value))} 
        />
      </label>
      <p>私は{age}歳です</p>
    </div>
  );
};`}
                  />
                  <InteractiveAgeDisplay />
                </div>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              まとめ
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 覚えておきたいポイント
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">useState</code>は状態を保存し、変更するためのフックです
                  </li>
                  <li>
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">const [値, 更新関数] = useState(初期値);</code>の形式で使用します
                  </li>
                  <li>
                    状態を変更するには、必ず更新関数を使用します（直接変更は❌）
                  </li>
                  <li>
                    状態が変更されると、コンポーネントが自動的に再描画されます
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/react-intro/ibento-handoring"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: イベントハンドリング
            </Link>
            <Link
              href="/state-management"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/state-management/use-effect-basic"
              className="justify-self-end rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              次のレッスン: useEffectの基礎 →
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

