"use client";

import Link from "next/link";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import Header from "@/app/components/Header";
import AsyncAwaitPatternDiagram from "@/app/components/AsyncAwaitPatternDiagram";
import EventListenerDiagram from "@/app/components/EventListenerDiagram";
import DebounceDiagram from "@/app/components/DebounceDiagram";
import MultipleUseEffectDiagram from "@/app/components/MultipleUseEffectDiagram";
import InfiniteLoopDiagram from "@/app/components/InfiniteLoopDiagram";

export const runtime = "edge";

export default function UseEffectAdvancedPage() {
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
              useEffectの応用
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              レッスン 3
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            実際のアプリでよく使うパターン（非同期処理・イベントリスナー・検索など）を通して、
            useEffectの応用的な使い方を学びます。
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
                  基礎レッスンで学んだ<code className="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900/50">useEffect</code>の知識を、
                  実際のアプリケーション開発で使えるように応用していきます。
                </p>
                <p>
                  このレッスンでは、以下の実践的なパターンを学びます：
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>非同期処理（async/await）:</strong> API呼び出しなど、時間のかかる処理を正しく扱う方法
                  </li>
                  <li>
                    <strong>イベントリスナー:</strong> ウィンドウのリサイズやスクロールなどのブラウザイベントを監視する方法
                  </li>
                  <li>
                    <strong>デバウンス:</strong> 検索フォームなどで、入力が止まってから処理を実行する方法
                  </li>
                  <li>
                    <strong>複数のuseEffect:</strong> コードを読みやすく、メンテナンスしやすくする方法
                  </li>
                  <li>
                    <strong>よくある失敗パターン:</strong> 無限ループなどのバグを避ける方法
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  💡 このレッスンでは、各パターンを身近な例え話と図解で詳しく説明します。
                  初心者の方でも、段階的に理解できるように構成されています。
                </p>
              </div>
            </div>
          </section>

          {/* 1. 非同期処理（async/await）のパターン */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              1. 非同期処理（async/await）のパターン
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">useEffect</code>の中で
                  <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">async / await</code>
                  を使う場合は、<strong>中で関数を定義して呼び出す</strong>形にするのが定番です。
                </p>

                <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                  <p className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                    🤔 なぜ内側で関数を定義するの？
                  </p>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <code className="rounded bg-orange-100 px-1 py-0.5 dark:bg-orange-900/50">useEffect</code>に直接
                    <code className="rounded bg-orange-100 px-1 py-0.5 dark:bg-orange-900/50">async</code>を付けると、
                    クリーンアップ関数を返せなくなってしまいます。
                    内側で関数を定義することで、クリーンアップ関数も使えるようになります。
                  </p>
                </div>

                {/* 図解 */}
                <AsyncAwaitPatternDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 正しい書き方（内側にasync関数を定義）
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useEffect, useState } from "react";\n\n' +
                      "const UserProfile = () => {\n" +
                      "  const [user, setUser] = useState(null);\n" +
                      "  const [loading, setLoading] = useState(true);\n" +
                      "  const [error, setError] = useState(null);\n\n" +
                      "  useEffect(() => {\n" +
                      "    const fetchUser = async () => {\n" +
                      "      try {\n" +
                      "        setLoading(true);\n" +
                      "        setError(null);\n" +
                      '        const response = await fetch("/api/user");\n' +
                      "        if (!response.ok) {\n" +
                      "          throw new Error(\"レスポンスが正常ではありません\");\n" +
                      "        }\n" +
                      "        const data = await response.json();\n" +
                      "        setUser(data);\n" +
                      "      } catch (e) {\n" +
                      "        console.error(e);\n" +
                      "        setError(\"ユーザー情報の取得に失敗しました\");\n" +
                      "      } finally {\n" +
                      "        setLoading(false);\n" +
                      "      }\n" +
                      "    };\n\n" +
                      "    fetchUser();\n" +
                      "  }, []);\n\n" +
                      "  if (loading) return <p>読み込み中...</p>;\n" +
                      "  if (error) return <p>{error}</p>;\n" +
                      "  if (!user) return <p>ユーザーが見つかりません</p>;\n\n" +
                      "  return <div>こんにちは、{user.name}さん</div>;\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ ポイント1:</strong> useEffectに直接
                      <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">async</code>
                      を付けないこと（クリーンアップ関数との相性が悪くなるため）
                    </p>
                    <p>
                      <strong>✅ ポイント2:</strong> 内側に
                      <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">fetchUser</code>
                      関数を定義して呼び出すのがベストプラクティスです
                    </p>
                    <p>
                      <strong>✅ ポイント3:</strong> try-catch-finallyを使って、エラーハンドリングとローディング状態の管理を行います
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                  <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                    💡 実践的な使い方
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-green-800 dark:text-green-200">
                    <li>ユーザー情報、商品リスト、記事データなどの取得</li>
                    <li>フォーム送信後の処理</li>
                    <li>定期的なデータ更新（ポーリング）</li>
                    <li>外部APIとの連携</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 2. イベントリスナーの登録と解除 */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              2. イベントリスナーの登録と解除
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  ウィンドウのリサイズやスクロールなど、
                  <strong>ブラウザのイベントを監視</strong>
                  したいときも<code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">useEffect</code>を使います。
                </p>

                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
                  <p className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                    🎯 イベントリスナーとは？
                  </p>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    イベントリスナーは、ブラウザで何かが起こった時（ウィンドウがリサイズされた、スクロールした、キーを押したなど）に、
                    自動的に実行される関数のことです。
                    例えば、ウィンドウのサイズに応じてレイアウトを変えたい時に使います。
                  </p>
                </div>

                {/* 図解 */}
                <EventListenerDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 画面幅を監視してレイアウトを変える例
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useEffect, useState } from "react";\n\n' +
                      "const WindowSizeWatcher = () => {\n" +
                      "  const [width, setWidth] = useState(window.innerWidth);\n\n" +
                      "  useEffect(() => {\n" +
                      "    const handleResize = () => {\n" +
                      "      setWidth(window.innerWidth);\n" +
                      "    };\n\n" +
                      "    window.addEventListener(\"resize\", handleResize);\n" +
                      "    // 初回も一度実行しておく\n" +
                      "    handleResize();\n\n" +
                      "    // クリーンアップ関数でリスナーを解除\n" +
                      "    return () => {\n" +
                      "      window.removeEventListener(\"resize\", handleResize);\n" +
                      "    };\n" +
                      "  }, []);\n\n" +
                      "  const isMobile = width < 768;\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <p>現在の幅: {width}px</p>\n" +
                      "      <p>レイアウト: {isMobile ? \"モバイル\" : \"デスクトップ\"}</p>\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ ポイント1:</strong> イベントリスナーは
                      <strong>必ずクリーンアップで解除</strong>
                      する（メモリリーク防止）
                    </p>
                    <p>
                      <strong>✅ ポイント2:</strong> 依存配列を
                      <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">[]</code>
                      にすると、マウント時の1回だけ登録されます
                    </p>
                    <p>
                      <strong>✅ ポイント3:</strong> 初回実行もしておくと、初期値が正しく設定されます
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                  <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    ⚠️ メモリリークとは？
                  </p>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    イベントリスナーを解除しないと、コンポーネントが削除されてもイベントを監視し続けてしまいます。
                    これがメモリリークです。たくさんのコンポーネントでメモリリークが発生すると、
                    ブラウザが重くなったり、クラッシュしたりする可能性があります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 入力の監視とデバウンス（検索フォームなど） */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              3. 入力の監視とデバウンス（検索フォーム）
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  ユーザーが文字を入力するたびに
                  <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">fetch</code>
                  をすると、リクエストが多くなりすぎます。
                  <strong>デバウンス</strong>
                  （入力が止まってから少し待って実行）することで改善できます。
                </p>

                <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                  <p className="font-medium text-green-900 dark:text-green-100 mb-2">
                    🎯 デバウンスとは？
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    デバウンスは、「入力が止まってから一定時間待ってから処理を実行する」という技術です。
                    例えば、「React」と入力する場合、R→Re→Rea→Reac→React と5回のAPI呼び出しが発生しますが、
                    デバウンスを使えば、入力が止まってから1回だけAPIを呼び出せます。
                  </p>
                </div>

                {/* 図解 */}
                <DebounceDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    📝 500msデバウンス付き検索フォーム
                  </p>
                  <CopyableCodeBlock
                    code={
                      'import { useEffect, useState } from "react";\n\n' +
                      "const SearchBox = () => {\n" +
                      "  const [keyword, setKeyword] = useState(\"\");\n" +
                      "  const [result, setResult] = useState(null);\n\n" +
                      "  useEffect(() => {\n" +
                      "    if (!keyword) {\n" +
                      "      setResult(null);\n" +
                      "      return;\n" +
                      "    }\n\n" +
                      "    const timer = setTimeout(() => {\n" +
                      "      // 実際にはここでAPIを呼び出す\n" +
                      '      console.log("検索実行:", keyword);\n' +
                      "      setResult({ message: \"検索結果のサンプル\" });\n" +
                      "    }, 500); // 500ms入力が止まったら実行\n\n" +
                      "    return () => {\n" +
                      "      clearTimeout(timer); // 前回のタイマーをキャンセル\n" +
                      "    };\n" +
                      "  }, [keyword]);\n\n" +
                      "  return (\n" +
                      "    <div>\n" +
                      "      <input\n" +
                      "        value={keyword}\n" +
                      "        onChange={(e) => setKeyword(e.target.value)}\n" +
                      "        placeholder=\"キーワードを入力\"\n" +
                      "      />\n" +
                      "      {result && <p>{result.message}</p>}\n" +
                      "    </div>\n" +
                      "  );\n" +
                      "};\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ ポイント1:</strong> <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">setTimeout</code>で一定時間待ってから処理を実行します
                    </p>
                    <p>
                      <strong>✅ ポイント2:</strong> 新しい入力があると、クリーンアップ関数で前のタイマーをキャンセルします
                    </p>
                    <p>
                      <strong>✅ ポイント3:</strong> 空文字の場合は早期リターンして、不要なAPI呼び出しを避けます
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    💡 ユーザー体験の向上
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    デバウンスを使うことで、ユーザーは快適に検索でき、サーバーへの負荷も減らせます。
                    実務で非常によく使われるパターンです。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 複数のuseEffectを使い分ける */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              4. 複数のuseEffectを使い分ける
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  1つの<code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">useEffect</code>にすべての処理を書くと読みにくくなるので、
                  <strong>目的ごとにuseEffectを分ける</strong>
                  のがコツです。
                </p>

                <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
                  <p className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                    🎯 なぜ分けるの？
                  </p>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    コードが読みやすくなり、バグの原因を特定しやすくなります。
                    また、それぞれのuseEffectを個別にテストできたり、
                    必要に応じて無効化しやすくなったりします。
                  </p>
                </div>

                {/* 図解 */}
                <MultipleUseEffectDiagram />

                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <p className="mb-3 font-medium text-gray-900 dark:text-white">
                    ✅ 良い例（役割ごとに分割）
                  </p>
                  <CopyableCodeBlock
                    code={
                      "// タイトル更新用\n" +
                      "useEffect(() => {\n" +
                      '  document.title = "カウント: " + count;\n' +
                      "}, [count]);\n\n" +
                      "// ローカルストレージ保存用\n" +
                      "useEffect(() => {\n" +
                      '  localStorage.setItem("count", String(count));\n' +
                      "}, [count]);\n\n" +
                      "// ログ送信用\n" +
                      "useEffect(() => {\n" +
                      "  sendLog(count);\n" +
                      "}, [count]);\n"
                    }
                    className="mb-3"
                  />
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>✅ メリット1:</strong> 一つ一つのuseEffectが「何のための処理か」明確になります
                    </p>
                    <p>
                      <strong>✅ メリット2:</strong> メンテナンス性が向上します（変更したい処理だけを探せます）
                    </p>
                    <p>
                      <strong>✅ メリット3:</strong> 個別にテストできるようになります
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. よくある失敗パターン */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              5. よくある失敗パターン：無限ループ
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  <code className="rounded bg-gray-200 px-1 py-0.5 dark:bg-gray-700">useEffect</code>の中で状態を更新し、
                  その状態を依存配列に含めていると、無限ループになることがあります。
                </p>

                <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                  <p className="font-medium text-red-900 dark:text-red-100 mb-2">
                    ⚠️ 無限ループとは？
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    無限ループは、「状態更新 → 再レンダリング → useEffect再実行 → 状態更新 → ...」
                    が永遠に続いてしまう状態です。ブラウザがフリーズしてしまうこともあります。
                  </p>
                </div>

                {/* 図解 */}
                <InfiniteLoopDiagram />

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
                  <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    💡 解決方法のまとめ
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-yellow-800 dark:text-yellow-200">
                    <li>
                      <strong>方法1:</strong> 依存配列を空にする（1回だけ実行したい場合）
                    </li>
                    <li>
                      <strong>方法2:</strong> 条件分岐を追加する（特定の条件の時だけ実行したい場合）
                    </li>
                    <li>
                      <strong>方法3:</strong> 関数型更新を使う（推奨！前の値を使って更新する方法）
                    </li>
                  </ul>
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
                    <code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">async/await</code>を使う時は、
                    内側で関数を定義して呼び出す
                  </li>
                  <li>
                    イベントリスナーは必ずクリーンアップで解除する（メモリリーク防止）
                  </li>
                  <li>
                    デバウンスを使うと、ユーザー体験とサーバー負荷の両方を改善できる
                  </li>
                  <li>
                    複数の<code className="rounded bg-green-100 px-1 py-0.5 dark:bg-green-900/50">useEffect</code>を
                    役割ごとに分けると、コードが読みやすくなる
                  </li>
                  <li>
                    無限ループを避けるために、依存配列と条件分岐を慎重に設計する
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="grid grid-cols-3 items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            <Link
              href="/state-management/use-effect-basic"
              className="whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← 前のレッスン: useEffectの基礎
            </Link>
            <Link
              href="/state-management"
              className="justify-self-center whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              レッスン一覧に戻る
            </Link>
            <Link
              href="/state-management/multiple-state"
              className="whitespace-nowrap rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              次のレッスン: 複数の状態管理 →
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
