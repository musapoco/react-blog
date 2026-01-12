"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  slug: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "React入門",
    description: "Reactの基本概念、JSX、コンポーネントの作成方法を学びます",
    lessons: 12,
    difficulty: "beginner",
    slug: "/react-intro",
  },
  {
    id: 2,
    title: "状態管理",
    description: "useState、useEffect、カスタムフックを使った状態管理を習得",
    lessons: 15,
    difficulty: "beginner",
    slug: "#",
  },
  {
    id: 3,
    title: "コンポーネント設計",
    description: "再利用可能なコンポーネントの設計パターンとベストプラクティス",
    lessons: 10,
    difficulty: "intermediate",
    slug: "#",
  },
  {
    id: 4,
    title: "パフォーマンス最適化",
    description: "React.memo、useMemo、useCallbackを使ったパフォーマンス向上",
    lessons: 8,
    difficulty: "advanced",
    slug: "#",
  },
  {
    id: 5,
    title: "ルーティング",
    description: "React Routerを使ったSPAのルーティング実装",
    lessons: 9,
    difficulty: "intermediate",
    slug: "#",
  },
  {
    id: 6,
    title: "状態管理ライブラリ",
    description: "Redux、Zustand、Jotaiなどの状態管理ライブラリの比較",
    lessons: 14,
    difficulty: "advanced",
    slug: "#",
  },
];

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

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
                <span className="text-sm font-bold">R</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                React Learning
              </span>
            </div>
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

      {/* Hero Section */}
      <section
        className="relative px-4 py-24 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/Hero Section.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/40 dark:bg-gray-950/60"></div>
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Reactを
              <span className="text-gray-200"> マスター </span>
              しよう
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-100">
              実践的なチュートリアルとインタラクティブな例で、Reactの基礎から上級テクニックまで
              段階的に学べる学習プラットフォームです
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="w-full rounded-lg bg-gray-900 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-gray-800 active:scale-[0.98] dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 sm:w-auto">
                学習を始める
              </button>
              <button className="w-full rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-600 sm:w-auto">
                カリキュラムを見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-gray-800 px-4 py-20 dark:bg-gray-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              学習モジュール
            </h2>
            <p className="text-gray-300">
              基礎から応用まで、体系的なカリキュラムで学べます
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.slug}
                className="group relative block overflow-hidden rounded-2xl border border-gray-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300/80 hover:shadow-xl dark:border-gray-800/60 dark:bg-gray-900/50 dark:hover:border-gray-700/80 dark:hover:bg-gray-900"
                onMouseEnter={() => setHoveredCard(module.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Subtle background effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 transition-opacity duration-300 ${
                    hoveredCard === module.id ? "opacity-100" : ""
                  } dark:from-gray-800/30`}
                ></div>

                <div className="relative">
                  {/* Title with label on the right */}
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="flex-1 text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-gray-950 dark:text-white dark:group-hover:text-gray-100">
                      {module.title}
                    </h3>
                    <span
                      className={`flex-shrink-0 rounded-lg px-3 py-1 text-xs font-semibold tracking-wide ${
                        difficultyColors[module.difficulty]
                      }`}
                    >
                      {difficultyLabels[module.difficulty]}
                    </span>
                  </div>

                  {/* Description with improved typography */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>

                  {/* Footer with enhanced styling */}
                  <div className="flex items-center justify-between border-t border-gray-200/80 pt-5 dark:border-gray-800/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
                      {module.lessons} レッスン
                    </span>
                    <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-200 hover:gap-3 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      <span>開始</span>
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-gray-50 px-4 py-20 dark:border-gray-800 dark:bg-gray-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-800">
                📚
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                体系的カリキュラム
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                基礎から応用まで、段階的に学習できる設計
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-800">
                💻
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                実践的な例
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                実際のプロジェクトで使えるコード例を提供
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-800">
                🎯
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                インタラクティブ学習
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                ハンズオン形式で実際にコードを書きながら学べる
              </p>
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
