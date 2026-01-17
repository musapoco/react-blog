"use client";

import Link from "next/link";
import Header from "@/app/components/Header";

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  slug?: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "useStateの基礎",
    description: "コンポーネントの状態を管理するuseStateフックの使い方",
    duration: "25分",
    slug: "/state-management/use-state",
  },
  {
    id: 2,
    title: "useEffectの基礎",
    description: "副作用処理を実行するuseEffectフックの基本",
    duration: "25分",
    slug: "#",
  },
  {
    id: 3,
    title: "useEffectの応用",
    description: "依存配列とクリーンアップ関数を使った実践的な使い方",
    duration: "25分",
    slug: "#",
  },
  {
    id: 4,
    title: "複数の状態管理",
    description: "複数のuseStateを使った状態管理の方法",
    duration: "25分",
    slug: "#",
  },
  {
    id: 5,
    title: "状態の更新パターン",
    description: "状態を更新する様々な方法とベストプラクティス",
    duration: "25分",
    slug: "#",
  },
  {
    id: 6,
    title: "カスタムフック",
    description: "再利用可能なカスタムフックの作成方法",
    duration: "25分",
    slug: "#",
  },
];

export default function StateManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Header */}
      <section className="border-b border-gray-200 bg-white px-4 py-12 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
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
            ホームに戻る
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              状態管理
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              初級
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            useState、useEffect、カスタムフックを使った状態管理を習得します
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              レッスン一覧
            </h2>
            <div className="space-y-3">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {lesson.title}
                        </h3>
                      </div>
                      <p className="ml-11 text-sm text-gray-600 dark:text-gray-400">
                        {lesson.description}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                        {lesson.duration}
                      </span>
                      {lesson.slug && lesson.slug !== "#" ? (
                        <Link
                          href={lesson.slug}
                          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          開始
                        </Link>
                      ) : (
                        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 opacity-50 cursor-not-allowed">
                          準備中
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

