"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import UseEffectLifecycleDiagram from "@/app/components/UseEffectLifecycleDiagram";
import UseEffectDependencyArrayDiagram from "@/app/components/UseEffectDependencyArrayDiagram";
import UseEffectCleanupDiagram from "@/app/components/UseEffectCleanupDiagram";
import UseEffectApiCallDiagram from "@/app/components/UseEffectApiCallDiagram";
import UseEffectStateInteractionDiagram from "@/app/components/UseEffectStateInteractionDiagram";

export const runtime = 'edge';

export default function UseEffectBasicPage() {
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
              useEffectの基礎
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 2
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            副作用処理を実行するuseEffectフックの基本的な使い方を学びます
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            推定学習時間: 25分
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* useEffectとは */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              useEffectとは
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>は、Reactコンポーネントで「副作用（Side Effect）」を実行するためのフックです。
              </p>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                <p className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                  💡 副作用（Side Effect）とは？
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  副作用とは、コンポーネントのレンダリング以外で行われる処理のことです。
                  例えば、API呼び出し、タイマー設定、DOM操作、ログ出力などが副作用に当たります。
                </p>
                
                {/* 例えの説明 */}
                <div className="mt-3 rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                  <p className="text-xs font-medium text-purple-900 dark:text-purple-100 mb-2">
                    🎯 例えで理解しよう
                  </p>
                  <div className="text-xs text-purple-800 dark:text-purple-200 space-y-1">
                    <p>
                      <strong>🍽️ レストランの例:</strong> useEffectは「お客様が座った後に、注文を取って、料理を運ぶ」ようなものです。
                      画面に表示された後（コンポーネントがレンダリングされた後）に、必要な処理を実行します。
                    </p>
                    <p>
                      <strong>📞 電話の例:</strong> useEffectは「電話が繋がった後に、用件を伝える」ようなものです。
                      コンポーネントが表示された後に、外部との通信や処理を行います。
                    </p>
                    <p>
                      <strong>⏰ タイマーの例:</strong> useEffectは「時計が動き始めた後に、定期的に時刻を更新する」ようなものです。
                      コンポーネントが表示された後に、継続的な処理を開始します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 身近な例え: レストランの例 */}
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
                <h3 className="mb-4 text-center text-lg font-semibold text-orange-900 dark:text-orange-100">
                  🍽️ 身近な例えで理解しよう：レストランの例
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">レストランの流れ</h4>
                    <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>1. お客様が席に座る（コンポーネント表示）</li>
                      <li>2. ウェイターが注文を取る（useEffect実行）</li>
                      <li>3. 料理を運ぶ（副作用処理：API呼び出しなど）</li>
                      <li>4. お客様が帰る時に片付ける（クリーンアップ）</li>
                    </ol>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">useEffectの流れ</h4>
                    <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>1. コンポーネントが表示される（マウント）</li>
                      <li>2. useEffectが実行される</li>
                      <li>3. 副作用処理を実行（API、タイマーなど）</li>
                      <li>4. コンポーネント削除時にクリーンアップ</li>
                    </ol>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-orange-800 dark:text-orange-200">
                  💡 useEffectは「お客様が座った後に注文を取り、料理を運ぶウェイター」のようなものです
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  ✅ useEffectを使う理由
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>API呼び出し:</strong> データを外部サーバーから取得できます
                  </li>
                  <li>
                    <strong>タイマー処理:</strong> 定期的に何かを実行できます（例：時計、カウントダウン）
                  </li>
                  <li>
                    <strong>DOM操作:</strong> ブラウザのAPIを使って、ページタイトルを変更したり、スクロール位置を設定したりできます
                  </li>
                  <li>
                    <strong>イベントリスナー:</strong> ウィンドウのサイズ変更などのイベントを監視できます
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
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>の基本的な書き方を学びましょう。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 useEffectの基本構文
                </p>
                <CopyableCodeBlock
                  code={`import { useEffect } from "react";

const MyComponent = () => {
  // useEffectの基本的な書き方
  useEffect(() => {
    // ここに副作用の処理を書く
    console.log("コンポーネントが表示されました！");
  });

  return <div>Hello World</div>;
};`}
                  className="mb-3"
                />
                <div className="mt-3 space-y-2 text-sm">
                  <p>
                    <strong>1. useEffectのインポート:</strong> Reactから<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>をインポートします
                  </p>
                  <p>
                    <strong>2. useEffectの呼び出し:</strong> コンポーネント内で<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>を呼び出します
                  </p>
                  <p>
                    <strong>3. 処理の記述:</strong> 第1引数として、実行したい処理を関数で渡します
                  </p>
                  <p>
                    <strong>4. 実行タイミング:</strong> デフォルトでは、コンポーネントがレンダリングされるたびに実行されます
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ 重要な注意点
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>
                    依存配列を指定しない場合、<strong>毎回のレンダリング後に実行</strong>されます（非推奨）
                  </li>
                  <li>
                    多くの場合、依存配列を指定して、必要な時だけ実行するようにします
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 依存配列の基本 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              依存配列の基本
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                依存配列を使うことで、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>を実行するタイミングを制御できます。
              </p>

              {/* 依存配列の比較図解 */}
              <UseEffectDependencyArrayDiagram />

              {/* ライフサイクル図解 */}
              <UseEffectLifecycleDiagram />

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 空の依存配列 []（マウント時のみ実行）
                </p>
                <CopyableCodeBlock
                  code={`useEffect(() => {
  // コンポーネントが初めて表示された時だけ実行される
  console.log("初めて表示されました！");
  
  // 例：APIからデータを取得
  fetch("/api/data")
    .then(response => response.json())
    .then(data => console.log(data));
}, []); // ← 空の配列 []`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 空の依存配列<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">[]</code>を指定すると、コンポーネントがマウントされた時（初めて表示された時）に1回だけ実行されます。
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 依存配列に値を指定（値が変わった時だけ実行）
                </p>
                <CopyableCodeBlock
                  code={`const [count, setCount] = useState(0);

useEffect(() => {
  // countが変わった時だけ実行される
  console.log("countが変わりました:", count);
  
  // 例：countが変わるたびにAPIを呼び出す
  fetch(\`/api/data?count=\${count}\`)
    .then(response => response.json())
    .then(data => console.log(data));
}, [count]); // ← countを指定`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 依存配列に<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">count</code>を指定すると、<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">count</code>の値が変わるたびに実行されます。
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                  ✅ 依存配列の使い分け
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>
                    <strong>空の配列 []:</strong> コンポーネントが表示された時だけ実行（API初期データ取得など）
                  </li>
                  <li>
                    <strong>値の指定 [count]:</strong> 指定した値が変わった時だけ実行（フィルター、検索など）
                  </li>
                  <li>
                    <strong>複数の値 [count, name]:</strong> いずれかの値が変わった時に実行
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* クリーンアップ関数 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              クリーンアップ関数
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>は、クリーンアップ関数を返すことができます。
                この関数は、useEffectが再実行される前や、コンポーネントが削除される時に実行されます。
              </p>

              {/* クリーンアップ関数の図解 */}
              <UseEffectCleanupDiagram />

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 クリーンアップ関数の基本構文
                </p>
                <CopyableCodeBlock
                  code={`useEffect(() => {
  // 副作用処理
  const timer = setInterval(() => {
    console.log("1秒ごとに実行");
  }, 1000);

  // クリーンアップ関数を返す
  return () => {
    clearInterval(timer); // タイマーをクリア
  };
}, []);`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 クリーンアップ関数は、副作用処理で作成したリソース（タイマー、イベントリスナーなど）を適切に解放するために使用します。
                </p>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                  ⚠️ クリーンアップが必要な理由
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>
                    <strong>メモリリークの防止:</strong> タイマーやイベントリスナーを削除しないと、メモリリークが発生する可能性があります
                  </li>
                  <li>
                    <strong>リソースの適切な解放:</strong> 不要になったリソースを適切に解放することで、アプリケーションのパフォーマンスが向上します
                  </li>
                  <li>
                    <strong>予期しない動作の防止:</strong> コンポーネントが削除された後も処理が実行され続けることを防ぎます
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* useStateとuseEffectの連携 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              useStateとuseEffectの連携
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useState</code>と<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>は、一緒に使うことで非常に強力な組み合わせになります。
              </p>

              {/* useStateとuseEffectの連携図解 */}
              <UseEffectStateInteractionDiagram />

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 基本的な連携パターン
                </p>
                <CopyableCodeBlock
                  code={`const MyComponent = () => {
  const [count, setCount] = useState(0);

  // countが変わるたびに実行
  useEffect(() => {
    console.log("countが変わりました:", count);
    
    // countの値を使って何か処理
    document.title = \`カウント: \${count}\`;
  }, [count]); // ← countを依存配列に含める

  return (
    <div>
      <p>カウント: ${'{'}count${'{'}}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 useStateで状態を管理し、useEffectでその状態に応じた副作用処理を実行する、これが最も一般的なパターンです。
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                <p className="font-medium text-red-900 dark:text-red-100 mb-2">
                  ⚠️ 重要な注意点
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 dark:text-red-200">
                  <li>
                    <strong>依存配列に必ず含める:</strong> useEffect内で使用している状態やpropsは、依存配列に必ず含める必要があります
                  </li>
                  <li>
                    <strong>古い値を参照する可能性:</strong> 依存配列に含めないと、古い値が参照される可能性があります
                  </li>
                  <li>
                    <strong>ESLintの警告:</strong> React HooksのESLintルールが、依存配列の不足を警告してくれます
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 実践的な例 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              実践的な例
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                実際によく使われる<code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700">useEffect</code>の使い方を見てみましょう。
              </p>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 例1: ページタイトルを変更する
                </p>
                <CopyableCodeBlock
                  code={`const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ページタイトルを変更
    document.title = \`カウント: \${count}\`;
  }, [count]); // countが変わるたびに実行

  return (
    <div>
      <p>カウント: ${'{'}count${'{'}}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 ブラウザのタブに表示されるタイトルを、状態に応じて動的に変更できます。
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 例2: タイマーを設定する
                </p>
                <CopyableCodeBlock
                  code={`const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // タイマーを設定（1秒ごとに実行）
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // クリーンアップ関数（後で説明）
    return () => {
      clearInterval(interval);
    };
  }, []); // マウント時のみ実行

  return <p>経過時間: ${'{'}seconds${'{'}}秒</p>;
};`}
                  className="mb-3"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 コンポーネントが表示されたときにタイマーを開始し、削除されたときにタイマーをクリアします。
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  📝 例3: APIからデータを取得する
                </p>
                
                {/* API呼び出しの流れ図解 */}
                <UseEffectApiCallDiagram />

                <CopyableCodeBlock
                  code={`const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディング状態をtrueに設定
    setLoading(true);
    
    // APIからデータを取得
    fetch("/api/user")
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("エラー:", error);
        setLoading(false);
      });
  }, []); // マウント時のみ実行

  if (loading) return <p>読み込み中...</p>;
  if (!user) return <p>ユーザーが見つかりません</p>;

  return <div>こんにちは、${'{'}user.name${'{'}}さん</div>;
};`}
                  className="mb-3"
                />
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20 mt-3">
                  <p className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm">
                    💡 この例の流れ
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-blue-800 dark:text-blue-200">
                    <li>コンポーネントがマウントされると、useEffectが実行されます</li>
                    <li>ローディング状態をtrueに設定して、ユーザーに読み込み中であることを伝えます</li>
                    <li>fetch APIを使ってサーバーからデータを取得します</li>
                    <li>データ取得成功時に、状態を更新してローディングをfalseにします</li>
                    <li>状態が更新されると、コンポーネントが再描画されて、データが画面に表示されます</li>
                  </ol>
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
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">useEffect</code>は副作用処理を実行するためのフックです
                  </li>
                  <li>
                    <code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">useEffect({`()`} ={`>`} {`{`} ... {`}`}, [依存配列]);</code>の形式で使用します
                  </li>
                  <li>
                    依存配列が<code className="px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/50">[]</code>（空）の場合、マウント時のみ実行されます
                  </li>
                  <li>
                    依存配列に値を指定すると、その値が変わった時だけ実行されます
                  </li>
                  <li>
                    依存配列を指定しない場合、毎回のレンダリング後に実行されます（非推奨）
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/state-management/use-state"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              ← 前のレッスン: useStateの基礎
            </Link>
            <Link
              href="/state-management"
              className="justify-self-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 whitespace-nowrap"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/state-management/use-effect-advanced"
              className="justify-self-end rounded-lg border border-blue-500 bg-blue-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-blue-600 dark:border-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400 whitespace-nowrap"
            >
              次のレッスン: useEffectの応用 →
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

