"use client";

import Link from "next/link";

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
    title: "Reactとは",
    description: "Reactの基本概念と特徴について学びます",
    duration: "10分",
    slug: "/react-intro/react-toha",
  },
  {
    id: 2,
    title: "環境構築",
    description: "React開発環境のセットアップ方法",
    duration: "15分",
    slug: "/react-intro/kankyo-kouchiku",
  },
  {
    id: 3,
    title: "JSXの基礎",
    description: "JSXの書き方とルールを理解する",
    duration: "20分",
    slug: "/react-intro/jsx-kiso",
  },
  {
    id: 4,
    title: "コンポーネントの作成",
    description: "関数コンポーネントとクラスコンポーネント",
    duration: "25分",
    slug: "/react-intro/komponente-sakusei",
  },
  {
    id: 5,
    title: "propsの使い方",
    description: "コンポーネント間でデータを渡す方法",
    duration: "20分",
  },
  {
    id: 6,
    title: "イベントハンドリング",
    description: "ユーザーインタラクションの処理方法",
    duration: "20分",
  },
];

export default function ReactIntroPage() {
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
              React入門
            </h1>
            <span className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              初級
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Reactの基本概念、JSX、コンポーネントの作成方法を学びます
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
                      {lesson.slug ? (
                        <Link
                          href={lesson.slug}
                          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          開始
                        </Link>
                      ) : (
                        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                          開始
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
