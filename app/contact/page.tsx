"use client";

import Link from "next/link";
import Header from "@/app/components/Header";

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Header */}
      <section className="border-b border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-900 sm:px-6 lg:px-8">
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
          <div className="mb-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              お問い合わせ
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            ご質問やご意見をお気軽にお寄せください
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <svg
                className="h-10 w-10 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Coming Soon
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              お問い合わせフォームは現在準備中です。
              <br />
              まもなく公開予定ですので、しばらくお待ちください。
            </p>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                お急ぎの場合は
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ご質問やご意見は、GitHubのIssuesやプルリクエストでお受けしています。
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
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
